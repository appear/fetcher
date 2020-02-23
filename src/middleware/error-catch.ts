import { captureException } from '@sentry/browser'

import { fetcherOptions, ErrorHandler } from '../types'


export function errorCatch(options: fetcherOptions): fetcherOptions {
    const { silently = false } = options

    return {
        ...options,
        errorHandler: ({ status, method, path, error }: ErrorHandler): Error => {
            const customError = new Error(
                `[${status}] Failed to fetch ${method} request of '${path}' with response'`,
            )

            if (silently) {
                error && captureException(error)
                captureException(customError)

                return error || customError
            } else {
                throw error || customError
            }
        },
    }
}