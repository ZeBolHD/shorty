import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shorty",
  description: "Shorty your URLs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <meta name="viewport" content="width=device-width, user-scalable=no" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
      <link
        rel="apple-touch-icon"
        href="/icon.png"
        type="image/png"
        sizes="200x200px"
      />
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
