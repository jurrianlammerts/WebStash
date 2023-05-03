"use client";

import Link from "next/link";

export default function FallbackNavBar() {
  return (
    <>
      <div className={`fixed top-0 z-30 w-full bg-white/0 transition-all`}>
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl">
            <p>WebStash</p>
          </Link>
        </div>
      </div>
    </>
  );
}
