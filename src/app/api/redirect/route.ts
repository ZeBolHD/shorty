import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prismadb";

interface SearchParams {
  hash: string;
}

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const hash = searchParams.get("hash");

  if (!hash) {
    return NextResponse.json({ Error: "Wrong hash" }, { status: 400 });
  }

  const hashedLink = await prisma.link.findUnique({
    where: {
      hash: hash,
    },
  });

  if (!hashedLink) {
    return NextResponse.json({ Error: "Wrong hash" }, { status: 400 });
  }

  await prisma.link.update({
    where: {
      hash: hash,
    },
    data: {
      click: {
        increment: 1,
      },
    },
  });

  const url = hashedLink.url;

  return NextResponse.json(url, { status: 302 });
}
