import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const protectedPaths = ["/dashboard"];

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const isPathProtected = protectedPaths?.some((path) => pathname == path);
  const res = NextResponse.next();
  const token = await getToken({ req });

  if (isPathProtected) {
    if (!token) {
      const url = new URL(`/`, req.url);
      url.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(url);
    }
  }

  return res;
}
