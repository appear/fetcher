import { IncomingMessage } from 'http'

export enum HTTPMethod {
    DELETE = 'DELETE',
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
}

export type ErrorHandler = (args: {
    status: number
    path: string
    method: HTTPMethod
    error?: Error
}) => Error

export type RequestContext = {
    sessionId: string
}

export interface MiddlewareData {
    requestContext?: RequestContext
    errorHandler?: ErrorHandler
}

export interface FetcherCustomOptions {
    url: string
    params?: {
        [key: string]: any
    }
    responseType?: string
    defaultResult?: any
    method: HTTPMethod
    silently?: boolean
    headers?: Headers
    initalRequests?: Request
    body?: string
    req?: IncomingMessage
}

export interface HttpResponse<T> {
    status: number
    ok: boolean
    data: T
    error?: Error
}

export type fetcherOptions = FetcherCustomOptions & MiddlewareData

