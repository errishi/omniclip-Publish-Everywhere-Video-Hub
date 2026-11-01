"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Play, 
  Pause, 
  Sparkles, 
  Flame, 
  Heart, 
  MessageSquare, 
  Share2, 
  Send 
} from "lucide-react"

export function LiveSimulator() {
  const [isPlaying, setIsPlaying] = React.useState(true)
  const [aspectRatio, setAspectRatio] = React.useState<"9:16" | "1:1" | "16:9">("9:16")
  const [captionStyle, setCaptionStyle] = React.useState<"karaoke" | "hormozi" | "minimal">("karaoke")
  const [targetPlatform, setTargetPlatform] = React.useState<"TikTok" | "Reels" | "Shorts" | "LinkedIn">("TikTok")
  const [activeHookIndex, setActiveHookIndex] = React.useState(0)

  const hooks = [
    {
      title: "Hook #1: The AI Secret Nobody Talks About",
      timestamp: "0:04 - 0:42",
      virality: 96,
      subtitles: "The biggest mistake creators make is posting everywhere manually.",
      highlightWord: "manually",
    },
    {
      title: "Hook #2: 0 to 1M Views Formula",
      timestamp: "1:18 - 1:56",
      virality: 92,
      subtitles: "OmniClip takes your raw audio, finds the dopamine hit, and slices it.",
      highlightWord: "dopamine hit",
    },
    {
      title: "Hook #3: Why 9:16 Vertical Dominates",
      timestamp: "3:40 - 4:15",
      virality: 89,
      subtitles: "One single 15-minute video can power your entire month of content.",
      highlightWord: "entire month",
    },
  ]

  const currentHook = hooks[activeHookIndex]

  return (
    <section id="simulator" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <Badge variant="omni" className="mb-3">
          Interactive Live Studio
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          See how <span className="text-[#d8572a]">OmniClip</span> transforms one video
        </h2>
        <p className="mt-3 text-base text-muted-foreground">
          Toggle aspect ratios, dynamic kinetic captions, and viral hook segments in real time.
        </p>
      </div>

      {/* Main Studio Frame */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
          {/* AI Hook Selector */}
          <Card className="border border-border bg-card shadow-xs">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <Flame className="size-3.5 text-[#d8572a]" />
                  AI Detected Viral Hooks
                </span>
                <span className="text-xs font-bold text-[#d8572a] bg-[#d8572a]/10 px-2 py-0.5 rounded-full">
                  3 Hooks Extracted
                </span>
              </div>

              <div className="space-y-2.5">
                {hooks.map((h, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveHookIndex(idx)}
                    className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      activeHookIndex === idx
                        ? "border-[#d8572a] bg-[#d8572a]/5 shadow-xs"
                        : "border-border hover:border-border hover:bg-muted/40"
                    }`}
                  >
                    <div>
                      <div className="text-sm font-semibold text-foreground">{h.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{h.timestamp}</div>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-md bg-card border border-border">
                      <span className="text-[#d8572a]">★</span>
                      <span>{h.virality}/100</span>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Aspect Ratio Switcher */}
          <Card className="border border-border bg-card shadow-xs">
            <CardContent className="p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-3">
                1. Auto-Reframe Aspect Ratio
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "9:16", label: "9:16 Vertical", desc: "Shorts, Reels, TikTok" },
                  { id: "1:1", label: "1:1 Square", desc: "LinkedIn & Feed" },
                  { id: "16:9", label: "16:9 Cinema", desc: "Original YouTube" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setAspectRatio(item.id as any)}
                    className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                      aspectRatio === item.id
                        ? "border-[#d8572a] bg-[#d8572a] text-white font-semibold shadow-xs"
                        : "border-border bg-card hover:bg-muted text-foreground"
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className="text-[10px] opacity-80 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Caption Style Switcher */}
          <Card className="border border-border bg-card shadow-xs">
            <CardContent className="p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-3">
                2. Kinetic Subtitle Style
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "karaoke", label: "Karaoke Glow", tag: "Viral standard" },
                  { id: "hormozi", label: "Bold Hormozi", tag: "High retention" },
                  { id: "minimal", label: "Clean Slate", tag: "Tech & B2B" },
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCaptionStyle(c.id as any)}
                    className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                      captionStyle === c.id
                        ? "border-[#d8572a] bg-[#d8572a] text-white font-semibold shadow-xs"
                        : "border-border bg-card hover:bg-muted text-foreground"
                    }`}
                  >
                    <div className="text-xs font-bold">{c.label}</div>
                    <div className="text-[10px] opacity-80 mt-0.5">{c.tag}</div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Publish Trigger */}
          <div className="p-4 rounded-2xl border border-dashed border-[#d8572a]/40 bg-[#d8572a]/5 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-foreground">Ready to Broadcast?</div>
              <div className="text-[11px] text-muted-foreground">Auto-schedules to 7 connected channels</div>
            </div>
            <Button
              size="sm"
              className="bg-[#d8572a] hover:bg-[#c44c22] text-white rounded-full text-xs font-semibold cursor-pointer shadow-sm"
            >
              <Send className="size-3 mr-1.5" />
              Syndicate Now
            </Button>
          </div>
        </div>

        {/* Live Mock Screen Column */}
        <div className="lg:col-span-7 flex flex-col items-center order-1 lg:order-2">
          {/* Platform Tab Badges */}
          <div className="flex items-center gap-2 mb-4 bg-muted/60 p-1 rounded-full border border-border">
            {(["TikTok", "Reels", "Shorts", "LinkedIn"] as const).map((plat) => (
              <button
                key={plat}
                onClick={() => setTargetPlatform(plat)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  targetPlatform === plat
                    ? "bg-card text-foreground shadow-xs font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {plat}
              </button>
            ))}
          </div>

          {/* Interactive Phone / Player Shell */}
          <div className="relative w-full max-w-[340px] sm:max-w-[360px] aspect-[9/16] max-h-[580px] rounded-[38px] border-4 border-[#d8572a]/30 dark:border-[#d8572a]/40 bg-black shadow-xl overflow-hidden flex flex-col justify-between p-4 transition-all duration-300">
            {/* Phone Notch */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-4 bg-neutral-900 rounded-full z-30" />

            {/* Video Canvas Simulation - Solid background (NO gradients) */}
            <div className="absolute inset-0 bg-[#12100e] flex items-center justify-center">
              {/* Speaker silhouette avatar */}
              <div className="relative flex flex-col items-center">
                <div className="size-24 rounded-full bg-[#d8572a] border-2 border-white/20 flex items-center justify-center text-white shadow-lg animate-float-slow">
                  <Sparkles className="size-10 text-white" />
                </div>
                <div className="mt-4 px-3 py-1 rounded-full bg-black/60 text-[10px] text-white/90 border border-white/10 flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-emerald-400" />
                  <span>Face-Tracking Active • Auto 9:16 Centered</span>
                </div>
              </div>

              {/* Watermark badge */}
              <div className="absolute top-8 left-4 text-[10px] font-bold text-white/50 tracking-wider">
                OMNICLIP // STUDIO PREVIEW
              </div>
            </div>

            {/* Top Video Header Overlay */}
            <div className="relative z-20 flex items-center justify-between text-white/80 pt-6">
              <span className="text-xs font-bold bg-black/50 px-2 py-0.5 rounded-md">
                {targetPlatform}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="size-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
                </button>
              </div>
            </div>

            {/* Subtitles & Captions Overlay */}
            <div className="relative z-20 mb-8 flex flex-col items-center text-center px-2">
              <div
                className={`transition-all duration-200 ${
                  captionStyle === "karaoke"
                    ? "text-lg font-extrabold uppercase tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                    : captionStyle === "hormozi"
                    ? "text-xl font-black uppercase text-[#ffc2aa] bg-black/70 px-3 py-1.5 rounded-lg border border-white/10"
                    : "text-sm font-medium text-white bg-black/60 px-3 py-1 rounded-full"
                }`}
              >
                {captionStyle === "karaoke" ? (
                  <span>
                    The biggest mistake is posting everywhere{" "}
                    <span className="text-[#d8572a] underline decoration-[#d8572a] decoration-2">
                      manually.
                    </span>
                  </span>
                ) : (
                  currentHook.subtitles
                )}
              </div>

              <div className="mt-3 flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#d8572a]/20 text-[#ffb094] border border-[#d8572a]/40">
                  Virality Score: {currentHook.virality}%
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-black/50 text-white/70">
                  {aspectRatio} Aspect
                </span>
              </div>
            </div>

            {/* Right Side Social Engagement Icons */}
            <div className="absolute right-3 bottom-24 z-20 flex flex-col items-center gap-3 text-white">
              <div className="flex flex-col items-center">
                <div className="size-9 rounded-full bg-black/50 flex items-center justify-center">
                  <Heart className="size-4.5 text-rose-500 fill-rose-500" />
                </div>
                <span className="text-[10px] font-semibold mt-0.5">84.2K</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="size-9 rounded-full bg-black/50 flex items-center justify-center">
                  <MessageSquare className="size-4.5 text-white" />
                </div>
                <span className="text-[10px] font-semibold mt-0.5">1,240</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="size-9 rounded-full bg-black/50 flex items-center justify-center">
                  <Share2 className="size-4.5 text-white" />
                </div>
                <span className="text-[10px] font-semibold mt-0.5">12.5K</span>
              </div>
            </div>

            {/* Progress bar - Solid color (NO gradient) */}
            <div className="absolute bottom-2 left-4 right-4 h-1 bg-white/20 rounded-full overflow-hidden z-20">
              <div className="w-3/5 h-full bg-[#d8572a] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
