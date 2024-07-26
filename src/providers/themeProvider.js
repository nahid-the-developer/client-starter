'use client'
import React, { useEffect, useState } from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme } from '@mui/material'
import Navbar from '@/components/Navbar'
import { useTheme } from 'next-themes'

const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
})

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
})

export default function ThemeProvider({ children }) {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const themeMode = theme === 'light' ? lightTheme : darkTheme
    return (
        <MuiThemeProvider theme={themeMode}>
            <CssBaseline />
            <Navbar
                toggleThemeMode={() =>
                    setTheme(theme === 'dark' ? 'light' : 'dark')
                }
                darkMode={theme === 'dark'}
            />
            {children}
        </MuiThemeProvider>
    )
}
