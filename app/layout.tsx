import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "WebStash",
  description:
    "An open source application built using the new router, server components and everything new in Next.js 13.",
  twitter: {
    card: "summary_large_image",
    title: "WebStash",
    description:
      "An open source application built using the new router, server components and everything new in Next.js 13.",
    creator: "Jurrian Lammerts",
  },
  metadataBase: new URL("http://localhost:3000/"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="pointer-events-none fixed -z-1 h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          <Nav />
        </Suspense>
        <main className="min-h-screen w-full py-32">{children}</main>
        <Footer />
        
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
