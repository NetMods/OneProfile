import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: "OneProfile",
  description: "One Profile For Coders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, "antialiased")}
      >
        {children}
      </body>
    </html>
  );
}
