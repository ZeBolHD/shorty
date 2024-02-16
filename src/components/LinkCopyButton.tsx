"use client";

import { useState } from "react";

import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface linkCopyButtonProps {
  shortedURL: string;
}

const LinkCopyButton = ({ shortedURL }: linkCopyButtonProps) => {
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const copyToClipboard = async () => {
    navigator.clipboard.writeText(shortedURL);
    setIsLinkCopied(true);
    setTimeout(() => {
      setIsLinkCopied(false);
    }, 2500);
  };

  return (
    <Button
      className={cn(
        "w-full bg-blue-500 hover:bg-blue-400 text-white",
        isLinkCopied
          ? "animate-[pulse_2.5s_ease-in-out] bg-green-500 hover:bg-green-400"
          : "transition-all duration-1000"
      )}
      type="button"
      onClick={copyToClipboard}
      disabled={isLinkCopied}
    >
      {isLinkCopied ? "Copied!" : "Copy Link"}
    </Button>
  );
};

export default LinkCopyButton;
