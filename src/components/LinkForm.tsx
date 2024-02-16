"use client";

import { useState } from "react";

import { isValidURL } from "@/lib/utils";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import LinkInput from "./LinkInput";

const LinkForm = () => {
  const [isError, setIsError] = useState(false);
  const [shortedURL, setShortedURL] = useState("");

  const getShortedURL = async (url: string) => {
    const body = JSON.stringify({
      url: url,
    });

    const shorted = await fetch("/api/link", {
      body,
      method: "POST",
    }).then((res) => res.json());

    return shorted;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = e.currentTarget.url.value as string;

    if (!isValidURL(url)) {
      setIsError(true);
      return;
    }

    const shorted = await getShortedURL(url);
    console.log(shorted);

    setShortedURL(shorted.url);

    setIsError(false);
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

        <div className="w-full mt-5">
          <Button className="w-full" type="submit">
            Get shorty link
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LinkForm;
