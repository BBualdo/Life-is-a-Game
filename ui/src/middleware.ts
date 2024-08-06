import { NextResponse, type NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const requestCookies = req.cookies;
  console.log("Request Cookies: ", requestCookies);
  const response = NextResponse.next();
  const responseCookies = response.cookies;
  console.log("Response Cookies: ", responseCookies);
  const cookies = await getToken({ req });
  console.log("Cookies: ", cookies);
  let token = requestCookies.get("LIAGToken")?.value;
  console.log("Token: ", token);

  if (
    token &&
    (req.nextUrl.pathname === "/login" || req.nextUrl.pathname === "/sign-up")
  ) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
  if (
    !token &&
    (req.nextUrl.pathname === "/" ||
      req.nextUrl.pathname === "/missions" ||
      req.nextUrl.pathname === "/achievements" ||
      req.nextUrl.pathname === "/profile")
  ) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
}
