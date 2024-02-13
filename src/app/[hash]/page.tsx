import RedirectComponent from "@/components/RedirectComponent";

import { Metadata } from "next";

interface HashLinkPageParams {
  params: {
    hash: string;
  };
}

export const metadata: Metadata = {
  title: "Redirecting...",
};

const HashLinkPage = ({ params }: HashLinkPageParams) => {
  const { hash } = params;

  return <RedirectComponent hash={hash} />;
};

export default HashLinkPage;
