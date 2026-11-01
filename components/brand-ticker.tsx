"use client"

import React from "react"

export function BrandTicker() {
  const platforms = [
    { name: "YouTube Shorts", icon: "▶", handle: "4K 60fps" },
    { name: "TikTok", icon: "♬", handle: "Auto-Sound Sync" },
    { name: "Instagram Reels", icon: "📸", handle: "9:16 Vertical" },
    { name: "LinkedIn Video", icon: "💼", handle: "Square & 9:16" },
    { name: "X / Twitter", icon: "𝕏", handle: "Direct Thread" },
    { name: "Threads", icon: "🧵", handle: "Multi-post" },
    { name: "Facebook Reels", icon: "ⓕ", handle: "Page Sync" },
    { name: "Spotify Video", icon: "🟢", handle: "Podcast Canvas" },
  ]

  return (
    <section className="py-10 border-y border-border bg-card/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 text-center">
        <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
          One clip automatically formatted, optimized & published across all ecosystems
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        <div className="flex w-max gap-6 px-4">
          {[...platforms, ...platforms].map((plat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-card shadow-2xs hover:border-[#d8572a] transition-all cursor-default group shrink-0"
            >
              <span className="size-6 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-foreground">
                {plat.icon}
              </span>
              <div className="flex flex-col text-left">
                <span className="text-xs font-semibold text-foreground tracking-tight">
                  {plat.name}
                </span>
                <span className="text-[10px] text-muted-foreground">
                  {plat.handle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
