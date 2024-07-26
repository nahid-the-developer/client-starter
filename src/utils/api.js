import axios from 'axios'
import process from 'next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss'

export const httpClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_SERVER,
    headers: {
        'Content-Type': 'application/json',
    },
})
