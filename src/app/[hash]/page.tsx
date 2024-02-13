"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface HashLinkPageParams {
  params: {
    hash: string;
  };
}

const HashLinkPage = ({ params }: HashLinkPageParams) => {
  const { hash } = params;
  const router = useRouter();

  const getURL = async () => {
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
    getURL();
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

export default HashLinkPage;
