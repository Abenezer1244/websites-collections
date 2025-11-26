/**
 * Logger utility for development and production
 * - Logs to console in development
 * - Sends errors to Sentry in production
 */

type LogLevel = 'info' | 'warn' | 'error' | 'debug'

function log(level: LogLevel, message: string, ...args: unknown[]) {
  if (process.env.NODE_ENV === 'development') {
    switch (level) {
      case 'info':
        console.log(`[INFO] ${message}`, ...args)
        break
      case 'warn':
        console.warn(`[WARN] ${message}`, ...args)
        break
      case 'error':
        console.error(`[ERROR] ${message}`, ...args)
        break
      case 'debug':
        console.debug(`[DEBUG] ${message}`, ...args)
        break
    }
  }
  
  // In production, send errors to Sentry
  if (level === 'error' && process.env.NODE_ENV === 'production') {
    try {
      // Dynamic import to avoid issues if Sentry not configured
      // Use setTimeout to avoid blocking
      setTimeout(async () => {
        try {
          const Sentry = await import('@sentry/nextjs').catch(() => null)
          if (Sentry && (process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN)) {
            const error = args[0] instanceof Error 
              ? args[0] 
              : new Error(message)
            
            Sentry.captureException(error, {
              extra: args.length > 0 ? { data: args } : undefined,
              tags: { logger: 'true', level },
            })
          }
        } catch (sentryError) {
          // Silently fail if Sentry not configured
        }
      }, 0)
    } catch (sentryError) {
      // Silently fail if Sentry not configured
      // Don't break the app if error tracking fails
    }
  }
}

export const logger = {
  info: (message: string, ...args: unknown[]) => log('info', message, ...args),
  warn: (message: string, ...args: unknown[]) => log('warn', message, ...args),
  error: (message: string, ...args: unknown[]) => log('error', message, ...args),
  debug: (message: string, ...args: unknown[]) => log('debug', message, ...args),
}

