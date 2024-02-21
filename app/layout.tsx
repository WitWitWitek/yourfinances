import type { Metadata } from "next";
import { Poppins as Font } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import Navbar from "../components/Navbar/Navbar";
import { Toaster } from "sonner";

const font = Font({ weight: ["300", "400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twoje Finanse",
  description:
    "Bezpieczna pożyczka dla Twoich potrzeb! Nie pobierzemy od Ciebie prowizji!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(font.className, "relative h-full font-sans antialiased")}
      >
        <Toaster position="bottom-left" richColors expand={true} />
        <main className="relative flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
