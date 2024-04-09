import { NextResponse, type NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//   matcher: "/profile",
// };

export function middleware(request: NextRequest) {
  // redirection
  if (request.nextUrl.pathname === "/profile") {
    return NextResponse.redirect(new URL("/hello", request.nextUrl));
  }
  // url rewrite
  if (request.nextUrl.pathname === "/profile") {
    return NextResponse.rewrite(new URL("/hello", request.nextUrl));
  }
}
