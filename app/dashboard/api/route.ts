import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response("Unauthorized", { status: 403 });
    }
    const { user } = session;

    const bookmarks = await prisma.bookmark.findMany({
      select: {
        id: true,
        title: true,
        url: true,
        createdAt: true,
      },
      where: {
        // @ts-ignore
        userId: user?.id,
      },
    });

    return new Response(JSON.stringify(bookmarks));
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}

export async function POST(req: Request) {
  console.log("post");
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response("Unauthorized", { status: 403 });
    }

    const { user } = session;

    const body = await req.json();

    const bookmark = await prisma.bookmark.create({
      data: {
        url: body.url,
        title: body.title,
        // @ts-ignore
        userId: user?.id,
      },
      select: {
        id: true,
      },
    });

    return NextResponse.json({ bookmark });
  } catch (error) {
    if (error) {
      return new Response(null, { status: 422 });
    }

    return new Response(null, { status: 500 });
  }
}
