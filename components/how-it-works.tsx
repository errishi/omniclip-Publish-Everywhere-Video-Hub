"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { UploadCloud, Cpu, Radio, Check } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: UploadCloud,
      title: "Input One Video Link or File",
      description:
        "Paste a YouTube, Loom, Zoom or Podcast URL, or upload your raw MP4/MOV file. OmniClip extracts high-fidelity transcripts, audio stems, and speaker profiles in 10 seconds.",
      features: [
        "Direct link parsing (YouTube, Twitch, Drive)",
        "Whisper v3 instant transcription",
        "Multi-speaker voice separation",
      ],
    },
    {
      step: "02",
      icon: Cpu,
      title: "AI Finds Dopamine Hooks & Reframes",
      description:
        "Our virality model identifies the strongest 30-60s retention hooks, crops the video into seamless 9:16 vertical with face-tracking, and stamps karaoke animated captions.",
      features: [
        "Algorithmic retention scoring (0-100)",
        "Dynamic speaker tracking & crop",
        "Hormozi & karaoke kinetic subtitles",
      ],
    },
    {
      step: "03",
      icon: Radio,
      title: "Omni-Publish Everywhere at Once",
      description:
        "Review your generated clips and push them simultaneously to YouTube Shorts, TikTok, Instagram Reels, LinkedIn, and X — or schedule an entire month in advance.",
      features: [
        "1-Click multi-platform sync",
        "Platform-specific captions & hashtags",
        "Smart optimal time auto-scheduler",
      ],
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-card/40 border-y border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="omni" className="mb-3">
            Workflow Architecture
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            From single clip to <span className="text-[#d8572a]">omnipresent reach</span>
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            No editing software required. No manual resizing. Just drop your clip and let OmniClip syndicate.
          </p>
        </div>

        {/* 3 Step Cards Grid (Solid styling - NO gradients) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((st, idx) => {
            const Icon = st.icon
            return (
              <Card
                key={idx}
                className="relative overflow-hidden border border-border bg-card hover:border-[#d8572a] transition-all duration-200 hover:shadow-md group"
              >
                <CardContent className="p-8 flex flex-col h-full justify-between">
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="size-12 rounded-2xl bg-[#d8572a]/10 border border-[#d8572a]/30 flex items-center justify-center text-[#d8572a] shadow-2xs group-hover:bg-[#d8572a] group-hover:text-white transition-colors">
                        <Icon className="size-6" />
                      </div>
                      <span className="text-3xl font-black text-muted-foreground/30 group-hover:text-[#d8572a]/50 transition-colors">
                        {st.step}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">
                      {st.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {st.description}
                    </p>
                  </div>

                  {/* Bullet Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-border">
                    {st.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-foreground/90 font-medium">
                        <div className="size-4 rounded-full bg-[#d8572a]/15 flex items-center justify-center shrink-0">
                          <Check className="size-2.5 text-[#d8572a]" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
