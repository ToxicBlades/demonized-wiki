// middleware.js
import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // If the user is accessing "/", redirect to "/wiki"
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/wiki', request.url));
  }

  // Otherwise, continue as normal
  return NextResponse.next();
}

// Optionally, only run this middleware on the root path
export const config = {
  matcher: ['/'],
};
