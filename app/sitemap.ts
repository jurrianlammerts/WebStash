import { MetadataRoute } from "next";
import prisma from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const users = await prisma.user.findMany({
    select: {
      id: true,
    },
    take: 1,
  });

  return [
    {
      // TODO: Replace with your own URL
      url: "",
      lastModified: new Date(),
    },
    ...users.map((user) => ({
      // // TODO: Replace with your own URL
      url: `/${user.id}`,
      lastModified: new Date(),
    })),
  ];
}
