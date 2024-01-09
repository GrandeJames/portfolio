import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "James Grande",
  description:
    "James Grande is a Computer Science student. He is a full-stack developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen">
          <div className="p-4 md:p-10 lg:p-20">
            <nav className="flex justify-center gap-6 text-gray-500 mb-10">
              <Link href="/">home</Link>
              <Link href="/projects">projects</Link>
              <Link href="/work">work</Link>
            </nav>
            {children}
          </div>
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
