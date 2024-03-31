import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | James Grande",
    default: "James Grande",
  },
  description:
    "James Grande is a Computer Science student at University of Hawaii at Manoa pursuing full-stack web development.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen">
          <div className="p-4 md:p-10 lg:p-20">
            <Navbar />
            {children}
          </div>
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
