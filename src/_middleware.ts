// import { getToken } from "next-auth/jwt";
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// const userRoutes = [ "/dashboard", "/dashboard/user", "/dashboard/user/:page*" ];

// const adminRoutes = [
//   "/dashboard",
//   "/dashboard/admin",
//   "/dashboard/admin/:page*",
// ];

// const superAdminRoutes = [
//   "/dashboard",
//   "/dashboard/super_admin",
//   "/dashboard/super_admin/:page*",
// ];

// export async function middleware(request: NextRequest) {
//   const token = await getToken({
//     req: request,
//   });
//   console.log("token in middleware", token);
//   if (!token) {
//     return NextResponse.redirect(new URL("/auth/signin", request.url));
//   } else if (
//     token?.role === "admin" &&
//     adminRoutes.includes(request.nextUrl.pathname)
//   ) {
//     return NextResponse.next();
//   } else if (
//     token?.role === "super_admin" &&
//     superAdminRoutes.includes(request.nextUrl.pathname)
//   ) {
//     return NextResponse.next();
//   } else if (
//     token?.role === "user" &&
//     userRoutes.includes(request.nextUrl.pathname)
//   ) {
//     return NextResponse.next();
//   } else return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//   matcher: [
//     "/dashboard",
//     "/dashboard/admin",
//     "/dashboard/admin/:page*",
//     "/dashboard/super_admin",
//     "/dashboard/super_admin/:page*",
//     "/dashboard/user",
//     "/dashboard/user/:page*",
//   ],
// };
