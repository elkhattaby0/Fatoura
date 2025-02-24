import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    let token = false;
    
    const authCookie = req.cookies.get("auth")?.value || "{}";
    const authData = JSON.parse(authCookie);

    if (authData?.email === "admin@admin" && authData?.password === "admin") {
        token = true;
    }

    const publicRoutes = [
        '/public/home',
        '/public/pricing',
        '/public/about', 
        '/public/contact',
        '/public/signin', 
        '/public/signup'
    ];
    const isPublicRoute = publicRoutes.some(route => req.nextUrl.pathname.startsWith(route));
    const isDashboardRoute = req.nextUrl.pathname.startsWith('/auth/');

    if (token && isPublicRoute) {
        return NextResponse.redirect(new URL('/auth/dashboard', req.url));
    }

    if (!token && isDashboardRoute) {
        return NextResponse.redirect(new URL('/public/home', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/auth/:path*', '/public/:path*'],
};