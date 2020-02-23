
import { FetcherCustomOptions, fetcherOptions, HttpResponse } from '../types'

type Fetcher = <T>(args: fetcherOptions) => HttpResponse<T>
type Middlewares = (args: fetcherOptions) => fetcherOptions

const applyMiddleware = (fetcher: Fetcher, middlewares: Middlewares[]) => (args: FetcherCustomOptions) => {
    const mergedOptions = middlewares.reduce((args, func) => func(args), args)

    return fetcher(mergedOptions)
}

export default applyMiddleware