"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ScanFace, 
  Flame, 
  Globe2, 
  CalendarCheck, 
  BarChart3 
} from "lucide-react"

export function BentoGrid() {
  return (
    <section id="features" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge variant="omni" className="mb-3">
          Omni-Engine Features
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Built for creators who refuse to be{" "}
          <span className="text-[#d8572a]">confined to one platform</span>
        </h2>
        <p className="mt-3 text-base text-muted-foreground">
          Every feature is engineered to maximize virality, viewer retention, and multi-channel scale.
        </p>
      </div>

      {/* Bento Layout - Clean solid components (NO gradients) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: 2-column wide - Dynamic Speaker Tracking */}
        <Card className="md:col-span-2 border border-border bg-card hover:border-[#d8572a] transition-all duration-200 relative overflow-hidden group shadow-xs">
          <CardContent className="p-8 flex flex-col justify-between h-full">
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="size-11 rounded-xl bg-[#d8572a]/10 border border-[#d8572a]/30 flex items-center justify-center text-[#d8572a] mb-4">
                  <ScanFace className="size-5" />
                </div>
                <h3 className="text-2xl font-bold text-foreground tracking-tight">
                  Intelligent 9:16 Face-Tracking & Multi-Speaker Cuts
                </h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-lg">
                  OmniClip identifies the active speaker in horizontal footage and fluidly zooms, pans, or creates dynamic split-screen cuts when two hosts speak simultaneously.
                </p>
              </div>
              <span className="hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-[#d8572a]/15 text-[#d8572a] border border-[#d8572a]/30">
                Auto-Director AI
              </span>
            </div>

            {/* Visual preview inside card (Solid backgrounds - NO gradients) */}
            <div className="rounded-2xl border border-border bg-muted/40 p-5 flex flex-col sm:flex-row items-center gap-6">
              {/* Landscape source */}
              <div className="flex-1 w-full bg-card border border-border rounded-xl p-3 text-center">
                <div className="text-[11px] font-semibold text-muted-foreground mb-2 flex items-center justify-center gap-1.5">
                  <span className="size-2 rounded-full bg-neutral-400" />
                  Source (16:9 Landscape)
                </div>
                <div className="w-full aspect-video rounded-lg bg-neutral-800 border border-border flex items-center justify-center text-xs text-white/80">
                  Dual Hosts in Studio
                </div>
              </div>

              <div className="shrink-0 size-8 rounded-full bg-[#d8572a] text-white flex items-center justify-center font-bold text-xs shadow-md">
                →
              </div>

              {/* 9:16 Vertical Destination */}
              <div className="flex-1 w-full bg-card border border-border rounded-xl p-3 text-center">
                <div className="text-[11px] font-semibold text-[#d8572a] mb-2 flex items-center justify-center gap-1.5">
                  <span className="size-2 rounded-full bg-emerald-400" />
                  OmniClip Output (9:16 Vertical)
                </div>
                <div className="w-full h-24 rounded-lg bg-[#181513] border border-[#d8572a]/30 flex flex-col items-center justify-center text-[11px] text-[#ffb094] font-semibold p-2">
                  <span>Dynamic Split View</span>
                  <span className="text-[10px] text-white/70 font-normal">Auto-Reframed</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card 2: Virality Hook Predictor */}
        <Card className="border border-border bg-card hover:border-[#d8572a] transition-all duration-200 relative overflow-hidden group shadow-xs">
          <CardContent className="p-8 flex flex-col justify-between h-full">
            <div>
              <div className="size-11 rounded-xl bg-[#d8572a]/10 border border-[#d8572a]/30 flex items-center justify-center text-[#d8572a] mb-4">
                <Flame className="size-5 text-[#d8572a]" />
              </div>
              <h3 className="text-xl font-bold text-foreground tracking-tight">
                Dopamine Hook Detector
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Trained on over 200,000 viral videos to spot conversational cliffhangers, shocking statements, and instant dopamine spikes.
              </p>
            </div>

            {/* Retention graph simulation */}
            <div className="mt-6 p-4 rounded-xl bg-muted/40 border border-border">
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="font-semibold text-foreground">Virality Index</span>
                <span className="font-extrabold text-[#d8572a]">98.4 / 100</span>
              </div>
              <div className="h-12 w-full flex items-end gap-1.5">
                {[30, 45, 60, 95, 80, 88, 98, 70, 85, 92].map((height, i) => (
                  <div
                    key={i}
                    style={{ height: `${height}%` }}
                    className={`flex-1 rounded-t transition-all ${
                      height > 90
                        ? "bg-[#d8572a]"
                        : "bg-muted-foreground/30 dark:bg-card"
                    }`}
                  />
                ))}
              </div>
              <div className="mt-2 text-[10px] text-muted-foreground flex justify-between">
                <span>0:00 (Hook)</span>
                <span className="text-[#d8572a] font-semibold">Peak: 0:14</span>
                <span>0:45 (CTA)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card 3: Multi-Language Kinetic Subtitles */}
        <Card className="border border-border bg-card hover:border-[#d8572a] transition-all duration-200 relative overflow-hidden group shadow-xs">
          <CardContent className="p-8 flex flex-col justify-between h-full">
            <div>
              <div className="size-11 rounded-xl bg-[#d8572a]/10 border border-[#d8572a]/30 flex items-center justify-center text-[#d8572a] mb-4">
                <Globe2 className="size-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground tracking-tight">
                Kinetic Subtitles in 32+ Languages
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Translate your original clip into Spanish, French, German, Japanese, and Portuguese with automatic lip-sync and karaoke highlight colors.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["English (US)", "Spanish", "German", "Japanese", "French", "Portuguese", "+26 more"].map((l, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-full text-[11px] font-medium border border-border bg-card text-foreground"
                >
                  {l}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Card 4: Omni-Schedule & Native Publishing */}
        <Card className="border border-border bg-card hover:border-[#d8572a] transition-all duration-200 relative overflow-hidden group shadow-xs">
          <CardContent className="p-8 flex flex-col justify-between h-full">
            <div>
              <div className="size-11 rounded-xl bg-[#d8572a]/10 border border-[#d8572a]/30 flex items-center justify-center text-[#d8572a] mb-4">
                <CalendarCheck className="size-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground tracking-tight">
                One-Click Omni-Scheduler
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Set it and forget it. OmniClip writes channel-specific titles, hooks, and hashtags, then triggers direct native publishing at your audience peak hours.
              </p>
            </div>

            <div className="mt-6 p-3 rounded-xl bg-muted/40 border border-border flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="size-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500 text-xs font-bold">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">7 Channels Scheduled</div>
                  <div className="text-[10px] text-muted-foreground">Tomorrow at 12:00 PM EST</div>
                </div>
              </div>
              <span className="text-xs font-semibold text-[#d8572a]">Active</span>
            </div>
          </CardContent>
        </Card>

        {/* Card 5: Consolidated Cross-Platform Analytics */}
        <Card className="border border-border bg-card hover:border-[#d8572a] transition-all duration-200 relative overflow-hidden group shadow-xs">
          <CardContent className="p-8 flex flex-col justify-between h-full">
            <div>
              <div className="size-11 rounded-xl bg-[#d8572a]/10 border border-[#d8572a]/30 flex items-center justify-center text-[#d8572a] mb-4">
                <BarChart3 className="size-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground tracking-tight">
                Unified Omnipresence Analytics
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Track how that one original video performed across TikTok, YouTube Shorts, Reels, and LinkedIn inside a single unified dashboard.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-center">
              <div className="p-3 rounded-xl bg-card border border-border">
                <div className="text-lg font-black text-foreground">3.2M</div>
                <div className="text-[10px] text-muted-foreground">Total Views</div>
              </div>
              <div className="p-3 rounded-xl bg-card border border-border">
                <div className="text-lg font-black text-emerald-500">+14.2K</div>
                <div className="text-[10px] text-muted-foreground">Followers Gained</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
