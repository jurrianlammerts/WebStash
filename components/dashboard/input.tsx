"use client";

import { toast } from "@/lib/hooks/use-toast";
import { formatUrlToTitle } from "@/lib/utils";
import classNames from "classnames";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { Plus } from "../ui/icons";

export default function Input() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="w-full px-5 xl:px-0">
        <form onSubmit={handleSubmit} style={{ opacity: isLoading ? 0.5 : 1 }}>
          <label
            htmlFor="text"
            className={classNames(
              "relative block w-full rounded-lg border border-gray-300 text-sm text-gray-900 drop-shadow-sm focus:border-blue-500 focus:ring-blue-500",
              {
                "border-red-500": error,
                "ring-red-500": error,
              },
            )}
          >
            <Plus />
            <input
              onChange={() => setError(false)}
              disabled={isLoading}
              className="h-full w-full rounded-lg border-none p-2.5 pl-12 placeholder-gray-400 focus:outline-none"
              type="text"
              name="bookmark"
              placeholder="Insert a link, image or just plain text..."
            />
          </label>
        </form>
      </div>
    </div>
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    // @ts-ignore
    const bookmark = event.target.bookmark.value || null;

    const bookmarkJSON = JSON.stringify({
      title: formatUrlToTitle(bookmark),
      url: bookmark,
    });

    if (!bookmark) return;

    try {
      const response = await fetch("/dashboard/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: bookmarkJSON,
      });

      if (!response?.ok) {
        toast({
          title: "Something went wrong.",
          description: "Your bookmark was not created. Please try again.",
          variant: "destructive",
        });
      }

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }
}
