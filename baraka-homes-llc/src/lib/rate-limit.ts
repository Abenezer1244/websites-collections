/**
 * Rate Limiting Utility
 * 
 * Provides rate limiting for API routes to prevent spam and DoS attacks.
 * 
 * Supports two modes:
 * 1. Upstash (Production) - Uses Redis for distributed rate limiting
 * 2. In-Memory (Development) - Simple in-memory rate limiting for testing
 * 
 * Environment variables:
 * - UPSTASH_REDIS_REST_URL: Upstash Redis REST URL (for production)
 * - UPSTASH_REDIS_REST_TOKEN: Upstash Redis REST token (for production)
 */

import { NextRequest } from 'next/server'

// Rate limit configuration
const RATE_LIMIT_CONFIG = {
  maxRequests: 5, // Maximum requests per window
  windowSeconds: 10, // Time window in seconds
  windowMs: 10 * 1000, // Time window in milliseconds
}

interface RateLimitResult {
  success: boolean
  limit: number
  remaining: number
  reset: number
  rateLimited: boolean
}

/**
 * Check rate limit using Upstash (Production)
 */
async function checkRateLimitUpstash(
  identifier: string
): Promise<RateLimitResult> {
  try {
    // Dynamic import to avoid build errors if packages aren't installed
    const ratelimitModule = await import('@upstash/ratelimit').catch(() => null)
    const redisModule = await import('@upstash/redis').catch(() => null)
    
    if (!ratelimitModule || !redisModule) {
      throw new Error('Upstash packages not installed')
    }
    
    const { Ratelimit } = ratelimitModule
    const { Redis } = redisModule

    const ratelimit = new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(
        RATE_LIMIT_CONFIG.maxRequests,
        `${RATE_LIMIT_CONFIG.windowSeconds} s`
      ),
      prefix: '@arkcare/contact-form',
      analytics: true,
    })

    const { success, limit, remaining, reset } = await ratelimit.limit(identifier)

    return {
      success,
      limit,
      remaining,
      reset,
      rateLimited: !success,
    }
  } catch (error) {
    // Fallback to in-memory if Upstash fails
    console.error('Upstash rate limit error, falling back to in-memory:', error)
    return checkRateLimitInMemory(identifier)
  }
}

/**
 * Check rate limit using in-memory storage (Development/Fallback)
 */
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimitInMemory(identifier: string): RateLimitResult {
  const now = Date.now()
  const record = rateLimitMap.get(identifier)

  // Clean up old entries periodically (every 100 checks)
  if (Math.random() < 0.01) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now > value.resetTime) {
        rateLimitMap.delete(key)
      }
    }
  }

  if (!record || now > record.resetTime) {
    const resetTime = now + RATE_LIMIT_CONFIG.windowMs
    rateLimitMap.set(identifier, { count: 1, resetTime })
    return {
      success: true,
      limit: RATE_LIMIT_CONFIG.maxRequests,
      remaining: RATE_LIMIT_CONFIG.maxRequests - 1,
      reset: resetTime,
      rateLimited: false,
    }
  }

  if (record.count >= RATE_LIMIT_CONFIG.maxRequests) {
    return {
      success: false,
      limit: RATE_LIMIT_CONFIG.maxRequests,
      remaining: 0,
      reset: record.resetTime,
      rateLimited: true,
    }
  }

  record.count++
  return {
    success: true,
    limit: RATE_LIMIT_CONFIG.maxRequests,
    remaining: RATE_LIMIT_CONFIG.maxRequests - record.count,
    reset: record.resetTime,
    rateLimited: false,
  }
}

/**
 * Check rate limit for a request
 * 
 * @param request - Next.js request object
 * @returns Rate limit result with success status and metadata
 */
export async function checkRateLimit(
  request: NextRequest
): Promise<RateLimitResult> {
  // Extract identifier (IP address)
  // Note: request.ip is not available in Next.js App Router, use headers instead
  const identifier =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    '127.0.0.1'

  // Use Upstash if configured, otherwise use in-memory
  if (
    process.env.UPSTASH_REDIS_REST_URL &&
    process.env.UPSTASH_REDIS_REST_TOKEN &&
    process.env.NODE_ENV === 'production'
  ) {
    return checkRateLimitUpstash(identifier)
  }

  // Use in-memory for development or if Upstash not configured
  return checkRateLimitInMemory(identifier)
}

