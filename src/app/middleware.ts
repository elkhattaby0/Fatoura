import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const token = false; 

    const publicRoutes = ['/public/home', '/public/about', '/about/signin', '/about/signup'];
    const dashboardPath = '/auth/dashboard';

    if (token && publicRoutes.includes(req.nextUrl.pathname)) {
        const url = req.nextUrl.clone();
        url.pathname = dashboardPath;
        return NextResponse.redirect(url);
    }

    if (!token && !publicRoutes.includes(req.nextUrl.pathname)) {
        const url = req.nextUrl.clone();
        url.pathname = '/public/home';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}
