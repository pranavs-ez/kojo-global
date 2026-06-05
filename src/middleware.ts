import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Flag LP routes so the root layout can suppress nav + footer
export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const isLp = request.nextUrl.pathname.startsWith('/lp/')
  response.headers.set('x-kojo-is-lp', isLp ? '1' : '0')
  return response
}

export const config = {
  matcher: ['/((?!_next|favicon\\.ico|images|fonts).*)'],
}
