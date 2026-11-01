"use client"

import * as React from "react"
import { HeroConvergence } from "@/components/hero-convergence"
import { Button } from "@/components/ui/button"
import { 
  Sparkles, 
  ArrowRight, 
  Video, 
  Zap, 
  Wand2 
} from "lucide-react"

export function HeroSection({
  onSelectSample,
}: {
  onSelectSample?: (sampleTitle: string) => void
}) {
  const [videoUrl, setVideoUrl] = React.useState("")
  const [isProcessing, setIsProcessing] = React.useState(false)
  const [processedSuccess, setProcessedSuccess] = React.useState(false)

  const sampleLinks = [
    { label: "🎙️ Tech & AI Podcast (48 min)", url: "https://youtube.com/watch?v=tech-omniclip-demo" },
    { label: "💡 Keynote Speech (22 min)", url: "https://youtube.com/watch?v=keynote-viral-demo" },
    { label: "🎮 Gaming Stream Peak (35 min)", url: "https://twitch.tv/videos/clip-highlights-demo" },
  ]

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault()
    if (!videoUrl && !sampleLinks[0].url) return
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setProcessedSuccess(true)
      setTimeout(() => setProcessedSuccess(false), 4000)
    }, 1200)
  }

  const handleSampleClick = (item: { label: string; url: string }) => {
    setVideoUrl(item.url)
    if (onSelectSample) {
      onSelectSample(item.label)
    }
  }

  return (
    <section className="relative min-h-[660px] pt-16 pb-24 md:pt-24 md:pb-32 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Animated Curved Convergence Lines in solid #d8572a (NO gradients) */}
      <HeroConvergence />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* Top Feature Pill Badge (Matching Taskos reference screenshot: "<icon> AI Project Tool") */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card text-xs font-medium text-foreground shadow-2xs hover:border-[#d8572a] transition-all duration-200 mb-6 group cursor-pointer">
          <div className="size-2 rounded-full bg-[#d8572a]" />
          <span className="flex items-center gap-1.5 text-muted-foreground group-hover:text-foreground">
            <span className="text-[#d8572a] font-semibold flex items-center gap-1">
              <Wand2 className="size-3 text-[#d8572a]" />
              AI Clip Tool
            </span>
            <span>•</span>
            <span>OmniClip 2.0</span>
          </span>
          <ArrowRight className="size-3 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
        </div>

        {/* Main Headline (Clean solid colors - absolutely NO gradients) */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground max-w-4xl leading-[1.12] mb-5">
          Plan your video reach,{" "}
          <span className="block mt-1 text-[#d8572a]">
            smarter and faster
          </span>
        </h1>

        {/* Dual Sub-Badges (Exact replica of Taskos: "A full plan in seconds" & "First project free") */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-9">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium border border-border bg-card text-foreground shadow-2xs">
            <Zap className="size-3.5 text-[#d8572a]" />
            <span>A full clip set in seconds</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium border border-border bg-card text-foreground shadow-2xs">
            <Sparkles className="size-3.5 text-[#d8572a]" />
            <span>First 5 clips free</span>
          </div>
        </div>

        {/* Central Prompt Capsule / Input Bar (Solid crisp structure, NO gradient) */}
        <div className="w-full max-w-2xl relative group">
          {/* Solid glow halo */}
          <div className="absolute -inset-1 rounded-full bg-[#d8572a]/20 blur-md opacity-80 group-hover:opacity-100 transition duration-300 pointer-events-none" />

          <form
            onSubmit={handleGenerate}
            className="relative flex items-center w-full rounded-full border border-border dark:border-[#d8572a]/40 bg-card dark:bg-[#141210] p-1.5 sm:p-2 shadow-lg transition-all duration-200 focus-within:border-[#d8572a] focus-within:ring-2 focus-within:ring-[#d8572a]/20"
          >
            <div className="pl-3 sm:pl-4 pr-2 text-muted-foreground">
              <Video className="size-5 text-[#d8572a]" />
            </div>

            <input
              type="text"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="Describe a project, or paste video URL e.g., podcast episode..."
              className="flex-1 bg-transparent border-0 text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 px-2 py-2 min-w-0"
            />

            <Button
              type="submit"
              disabled={isProcessing}
              className="rounded-full bg-[#d8572a] text-white hover:bg-[#c44c22] font-semibold px-4 sm:px-6 h-10 sm:h-11 shadow-sm transition-all duration-200 shrink-0 cursor-pointer"
            >
              {isProcessing ? (
                <div className="flex items-center gap-2">
                  <div className="size-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span className="hidden sm:inline">Repurposing...</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5">
                  <span className="font-medium text-xs sm:text-sm">Syndicate Everywhere</span>
                  <ArrowRight className="size-3.5 sm:size-4" />
                </div>
              )}
            </Button>
          </form>

          {/* Toast / Success simulation notification */}
          {processedSuccess && (
            <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-[#d8572a]/40 text-xs font-semibold text-foreground shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
              <Sparkles className="size-4 text-[#d8572a]" />
              <span>Analyzing clip hooks & generating 9:16 vertical exports...</span>
            </div>
          )}
        </div>

        {/* Quick sample chips below capsule (matching Taskos: "Or start from a template") */}
        <div className="flex flex-col sm:flex-row items-center gap-2.5 mt-5 text-xs text-muted-foreground">
          <span className="font-medium">Or start from a template:</span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {sampleLinks.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSampleClick(item)}
                className="px-2.5 py-1 rounded-full border border-border bg-card hover:bg-muted hover:border-[#d8572a] text-foreground transition-all cursor-pointer text-xs"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sub-hero explainer paragraph (Strictly formatted like Taskos description) */}
        <p className="mt-8 text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          <strong className="text-foreground font-semibold">OmniClip</strong> turns one sentence or video into a full distribution plan — clips, captions, 9:16 reframing and scheduling across 7 platforms — so your team can start moving today.
        </p>

        {/* Floating Quick Trust Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-12 pt-8 border-t border-border w-full max-w-3xl">
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#d8572a]">
              7+
            </span>
            <span className="text-xs text-muted-foreground mt-0.5">Platforms Synced</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#d8572a]">
              4.8M
            </span>
            <span className="text-xs text-muted-foreground mt-0.5">Clips Published</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#d8572a]">
              8.5x
            </span>
            <span className="text-xs text-muted-foreground mt-0.5">Reach Multiplier</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#d8572a]">
              45s
            </span>
            <span className="text-xs text-muted-foreground mt-0.5">Turnaround Time</span>
          </div>
        </div>
      </div>
    </section>
  )
}
