import { NextResponse } from 'next/server'

export function middleware(request) {
    const { cookies, nextUrl, url } = request
    const sessionToken = cookies.get('next-auth.session-token')?.value
    const currentPath = nextUrl.pathname

    const loginUserCannotAccess = [
        '/auth/login',
        '/auth/signup',
        '/auth/reset_password',
        '/auth/forgot_password',
    ]
    const isProtectedRoute = loginUserCannotAccess.includes(currentPath)

    if (sessionToken) {
        if (isProtectedRoute) {
            return NextResponse.redirect(new URL('/profile', url))
        }
    } else {
        if (!isProtectedRoute) {
            return NextResponse.redirect(new URL('/auth/login', url))
        }
    }
}

export const config = {
    matcher: ['/auth/:path*', '/profile'],
}
