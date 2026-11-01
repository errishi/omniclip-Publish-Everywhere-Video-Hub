import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "OmniClip — One Clip, Everywhere | AI Video Syndication & Repurposing",
  description: "Turn one video into viral reach everywhere. OmniClip auto-reframes, captions, scores virality, and publishes across YouTube Shorts, TikTok, Reels, LinkedIn, and X.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full scroll-smooth">
      <body className={cn("min-h-full flex flex-col antialiased transition-colors duration-300")}>
        {children}
      </body>
    </html>
  );
}
