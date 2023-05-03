"use client";
import Link from "next/link";
import { useSignInModal } from "@/components/layout/sign-in-modal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CtaButton({ isLoggedIn }: { isLoggedIn: boolean }) {
  const { setShowSignInModal } = useSignInModal();

  if (isLoggedIn) {
    return (
      <Link href={"/dashboard"} className={cn(buttonVariants({ size: "lg" }))}>
        Dashboard
      </Link>
    );
  }
  return (
    <button
      className={cn(buttonVariants({ size: "lg" }))}
      onClick={() => setShowSignInModal(true)}
    >
      Get Started
    </button>
  );
}
