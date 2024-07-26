import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { authOptions } from '@/utils/nextAuth'

export async function GET(request) {
    const session = await getServerSession(authOptions)
    return NextResponse.json({ id: 1 })
}
