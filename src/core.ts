import { useCallback, useState } from 'react'
import { applyMiddleware } from './middleware'
import { HttpResponse, fetcherOptions } from './types'
import fetch from 'isomorphic-fetch'


function fetcher<T>(args: fetcherOptions): Promise<HttpResponse<T>> {
    const [loading, setLoading] = useState(false)

    const response = useCallback(async () => {



    }, [args])


    return response
}


export default applyMiddleware([], fetcher)