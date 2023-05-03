import Input from "@/components/dashboard/input";
import List from "@/components/dashboard/list";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  const bookmarks = await prisma.bookmark.findMany({
    select: {
      id: true,
      title: true,
      url: true,
    },
    where: {
      // @ts-ignore
      userId: session.user?.id,
    },
  });

  return (
    <div className="mx-auto w-full max-w-screen-xl px-5 xl:px-0">
      <Input />
      <List bookmarks={bookmarks} />
    </div>
  );
}
