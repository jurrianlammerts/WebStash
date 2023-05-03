"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CtaButton({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <Link
      href={isLoggedIn ? "/dashboard" : "/auth"}
      className={cn(buttonVariants({ size: "lg" }))}
    >
      {isLoggedIn ? "Dashboard" : "Get started"}
    </Link>
  );
}
