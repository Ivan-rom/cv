import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ivan Romanenko CV",
  description: "Ivan Romanenko CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
