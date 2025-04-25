import createMiddleware from "next-intl/middleware";
import { type NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const redirectMap: { [key: string]: string } = {
        "/": "/wiki",
        "/en": "/wiki",
        "/de": "/wiki",
        "/it": "/wiki",
        "/fr": "/wiki"
    };

    if (redirectMap[pathname]) {
        return NextResponse.redirect(new URL(redirectMap[pathname], request.url));
    }


    return intlMiddleware(request);
}

export const config = {
    matcher: [
        // Enable a redirect to a matching locale at the root
        "/",

        // Set a cookie to remember the previous locale for
        // all requests that have a locale prefix
        "/(en|de|it|fr)/:path*",

        // Enable redirects that add missing locales
        // (e.g. `/pathnames` -> `/en/pathnames`)
        "/((?!_next|_vercel|api|.*\\..*).*)",

        // Protect the dashboard route
        "/crm/:path*",
    ],
};
