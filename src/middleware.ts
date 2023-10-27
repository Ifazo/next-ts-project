import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // const token = await getToken({
  //   req: request,
  //   secret: process.env.NEXTAUTH_SECRET,
  // });
  // console.log("JSON Web Token", token);
  return NextResponse.redirect(new URL("/auth/signin", request.url));
}

export const config = {
  matcher: "/dashboard/:path*",
};
