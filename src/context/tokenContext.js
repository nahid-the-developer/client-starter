'use client'
import { createContext, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { httpClient } from '@/utils/api'

export const TokenContext = createContext('undefined')

export const TokenProvider = ({ children }) => {
    const [tokenStatus, setTokenStatus] = useState('undefined')
    const { data: session } = useSession()

    useEffect(() => {
        if (session) {
            httpClient.defaults.headers.common['Authorization'] =
                `Bearer ${session?.user.accessToken}`
            setTokenStatus('added')
        } else {
            httpClient.defaults.headers.common['Authorization'] = ''
            setTokenStatus('removed')
        }
    }, [session])

    return (
        <TokenContext.Provider value={tokenStatus}>
            {children}
        </TokenContext.Provider>
    )
}
