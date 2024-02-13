import { NextRequest, NextResponse } from "next/server";
import crc32 from "crc-32";

import { isValidURL } from "@/lib/utils";
import prisma from "@/lib/prismadb";
import { WEBSITE_URL } from "@/lib/consts";

interface ExtendedRequest extends NextRequest {
  json(): Promise<{ url: string }>;
}

export async function POST(req: ExtendedRequest) {
  const { url } = await req.json();

  if (!isValidURL(url)) {
    return NextResponse.json({ Error: "Wrong url" }, { status: 400 });
  }

  const hashedLink = await prisma.link.findUnique({
    where: {
      url: url,
    },
  });

  if (hashedLink) {
    const shortUrl = `${WEBSITE_URL}/${hashedLink.hash}`;
    return NextResponse.json({ url: shortUrl }, { status: 200 });
  }

  const hash = crc32.str(url).toString(16);

  await prisma.link.create({
    data: {
      url: url,
      hash: hash,
    },
  });

  const shortUrl = `${WEBSITE_URL}/${hash}`;

  return Response.json({ url: shortUrl }, { status: 200 });
}
