"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { LoadingDots, Google, Github } from "@/components/ui/icons";

export default function SignInForm() {
  const [isLoading, setIsLoading] = useState({
    google: false,
    github: false,
    email: false,
  });
  const [email, setEmail] = useState("");

  return (
    <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-200 md:shadow-xl">
      <div className="flex flex-col items-center justify-center space-y-3 px-4 py-6 pt-8 text-center md:border-b md:border-gray-200 md:bg-white md:px-16">
        <h3 className="font-display text-2xl font-bold">Sign In</h3>
        <p className="text-sm text-gray-500">
          Only your email and profile picture will be stored.
        </p>
      </div>

      <div className="flex flex-col space-y-4 md:bg-gray-50 px-4 py-8 md:px-16">
        <input
          disabled={isLoading.email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-full w-full rounded-lg rounded-lg border border-gray-200 p-2.5 text-sm text-gray-900 placeholder-gray-400 drop-shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          type="email"
          value={email}
          name="email"
          placeholder="Email"
        />
        <button
          disabled={isLoading.email}
          type="submit"
          className={`${
            isLoading.email
              ? "cursor-not-allowed border-gray-200 bg-gray-100"
              : "border border-gray-200 bg-white text-black hover:bg-gray-50"
          } flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
          onClick={() => {
            setIsLoading((prev) => ({ ...prev, email: true }));
            signIn("email", { email });
          }}
        >
          {isLoading.email ? (
            <LoadingDots color="#808080" />
          ) : (
            <p>Send sign in link</p>
          )}
        </button>

        <div className="flex flex-row gap-4">
          <button
            disabled={isLoading.google}
            className={`${
              isLoading.google
                ? "cursor-not-allowed border-gray-200 bg-gray-100"
                : "border border-gray-200 bg-white text-black hover:bg-gray-50"
            } flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
            onClick={() => {
              setIsLoading((prev) => ({ ...prev, google: true }));
              signIn("google");
            }}
          >
            {isLoading.google ? (
              <LoadingDots color="#808080" />
            ) : (
              <>
                <Google className="h-5 w-5" />
                <p>Google</p>
              </>
            )}
          </button>
          <button
            disabled
            className={`${
              isLoading.github
                ? "cursor-not-allowed border-gray-200 bg-gray-100"
                : "border bg-gray-50 text-black"
            } flex h-10 w-full cursor-not-allowed items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
            onClick={() => {
              setIsLoading((prev) => ({ ...prev, github: true }));
              signIn("google");
            }}
          >
            {isLoading.github ? (
              <LoadingDots color="#808080" />
            ) : (
              <>
                <div className="h-5 w-5">
                  <Github />
                </div>
                <p>Github</p>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
