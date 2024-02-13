"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";

interface RedirectComponentProps {
  hash: string;
}

const RedirectComponent = ({ hash }: RedirectComponentProps) => {
  const router = useRouter();

  const redirect = async () => {
    try {
      const url = await fetch("/api/redirect?hash=" + hash).then((res) =>
        res.json()
      );
      router.push(url);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    redirect();
  });

  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      <Card className="w-[400px]">
        <CardHeader>
          <h1 className="text-xl font-bold">Shorty</h1>
        </CardHeader>
        <CardContent>
          <p>Redirecting ...</p>
        </CardContent>
      </Card>
    </main>
  );
};

export default RedirectComponent;
