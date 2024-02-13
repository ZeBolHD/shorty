"use client";

import { useState } from "react";

import { isValidURL } from "@/lib/utils";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

const LinkForm = () => {
  const [isError, setIsError] = useState(true);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = e.currentTarget.url.value as string;

    if (!isValidURL(url)) {
      setIsError(true);
      return;
    }

    setIsError(false);
  };

  return (
    <div className="w-full">
      <form className="w-full" onSubmit={onSubmit}>
        <div>
          <label htmlFor="url">URL</label>
          <Input className="mt-1" id="url" type="url" />
        </div>

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
