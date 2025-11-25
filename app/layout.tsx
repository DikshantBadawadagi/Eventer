import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import Waves from "@/components/Waves";
import Navbar from "@/components/Navbar";
import { PostHogProvider } from "./providers/PostHogProvider";
import { Suspense } from "react";


const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eventer",
  description: "The Hub for the events that matter!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibstedGrotesk.variable} ${martianMono.variable} antialiased`}
      >
        <PostHogProvider />
        {/* ensure main content is positioned and stacked above the waves */}
        <Navbar/>
        <main className="relative z-10">
          {children}
        </main>
        <Suspense fallback={null}>
          <Waves
            lineColor="#ffffff"
            backgroundColor="transarent"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />
        </Suspense>
        
      </body>
    </html>
  );
}
