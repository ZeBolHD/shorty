"use client";

import { useState } from "react";

import { cn, isValidURL } from "@/lib/utils";
import getShortedURL from "@/lib/getShortedURL";

import { Button } from "./ui/button";

import LinkInput from "./LinkInput";
import LinkCopyButton from "./LinkCopyButton";

const LinkForm = () => {
  const [isError, setIsError] = useState(false);
  const [shortedURL, setShortedURL] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = e.currentTarget.url.value as string;

    if (!isValidURL(url)) {
      setIsError(true);
      return;
    }

    const shorted = await getShortedURL(url);

    setShortedURL(shorted.url);
    setIsError(false);
  };

  const resetShortedURL = () => {
    setShortedURL("");
  };

  return (
    <div className="w-full">
      <form className="w-full" onSubmit={onSubmit}>
        {shortedURL ? (
          <div>
            <p>Shorted URL:</p>
            <a
              className="text-blue-500 underline"
              href={`http://${shortedURL}`}
              target="_blank"
            >
              {shortedURL}
            </a>
          </div>
        ) : (
          <LinkInput />
        )}

        {isError ? (
          <div className="mt-2">
            <p className="text-red-500 text-xs">Wrong url</p>
          </div>
        ) : null}

        <div
          className={cn(
            "w-full mt-5 flex max-mobile:flex-col",
            shortedURL ? "gap-2" : ""
          )}
        >
          {shortedURL ? (
            <>
              <LinkCopyButton shortedURL={shortedURL} />
              <Button
                type="button"
                className="w-full"
                onClick={resetShortedURL}
              >
                Shorty other link
              </Button>
            </>
          ) : (
            <Button className="w-full" type="submit">
              Get shorty link
            </Button>
          )}
          {}
        </div>
      </form>
    </div>
  );
};

export default LinkForm;
