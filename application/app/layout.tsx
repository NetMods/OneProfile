import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { inter } from "@/fonts";
import ClientOnly from "@/components/clientonly";
import MainPage from "@/components/mainpage";

export const metadata: Metadata = {
  title: "Oneprofile",
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
        className={cn(
          inter.className,
          "antialiased overflow-y-hidden "
        )}
      >
        {children}
      </body>
    </html>
  );
}
