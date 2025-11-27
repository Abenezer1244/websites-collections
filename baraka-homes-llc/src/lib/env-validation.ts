/**
 * Environment Variable Validation
 * 
 * Validates that required environment variables are present at startup.
 * Throws errors in production, warns in development.
 */

const requiredEnvVars = {
  // Production required
  production: [
    'SENDGRID_API_KEY',
    'CONTACT_EMAIL',
    'FROM_EMAIL',
  ],
  // Development optional but recommended
  development: [],
}

const recommendedEnvVars = [
  'NEXT_PUBLIC_SITE_URL',
  'NEXT_PUBLIC_GA_TRACKING_ID',
]

/**
 * Validate environment variables
 * 
 * @throws Error if required variables are missing in production
 */
export function validateEnv() {
  // Only run on server side
  if (typeof window !== 'undefined') {
    return
  }

  const env = process.env.NODE_ENV || 'development'
  const required =
    requiredEnvVars[env as keyof typeof requiredEnvVars] || []

  const missing: string[] = []

  // Check required variables
  required.forEach((varName) => {
    if (!process.env[varName]) {
      missing.push(varName)
    }
  })

  // Handle missing variables
  if (missing.length > 0) {
    const errorMessage = `Missing required environment variables: ${missing.join(', ')}`
    
    if (env === 'production') {
      throw new Error(errorMessage)
    } else {
      // In development, log warning but don't throw
      console.warn(`⚠️  ${errorMessage}`)
      console.warn('⚠️  Application may not function correctly without these variables.')
    }
  }

  // Check recommended variables
  const missingRecommended: string[] = []
  recommendedEnvVars.forEach((varName) => {
    if (!process.env[varName]) {
      missingRecommended.push(varName)
    }
  })

  if (missingRecommended.length > 0 && env === 'development') {
    console.info(
      `ℹ️  Recommended environment variables not set: ${missingRecommended.join(', ')}`
    )
  }
}

// Validate on module load (server-side only, runtime only)
// Skip validation during build time (Next.js build process)
if (
  typeof window === 'undefined' &&
  process.env.NEXT_PHASE !== 'phase-production-build'
) {
  try {
    validateEnv()
  } catch (error) {
    // In production runtime, this will prevent the app from starting
    // In development, it will just log warnings
    if (process.env.NODE_ENV === 'production') {
      console.error('❌ Environment validation failed:', error)
      throw error
    }
  }
}

