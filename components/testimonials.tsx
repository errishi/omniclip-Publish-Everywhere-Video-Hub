"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const reviews = [
    {
      author: "Marcus Vance",
      role: "Host of 'Future Stack' Podcast",
      followers: "420K+ across YouTube & TikTok",
      quote:
        "Before OmniClip, we spent 25 hours a week reframing clips for Shorts and Reels. Now, we drop one link after recording, and 15 viral-ready clips are scheduled before dinner. Reach is up 400%.",
      rating: 5,
    },
    {
      author: "Elena Rostova",
      role: "Head of Growth at HyperLoop B2B",
      followers: "120K LinkedIn Followers",
      quote:
        "The karaoke captions and active speaker framing look genuinely handcrafted. People think we have an in-house production studio. OmniClip is hands-down our #1 organic acquisition weapon.",
      rating: 5,
    },
    {
      author: "David Chen",
      role: "Keynote Speaker & Author",
      followers: "1.2M Combined Views",
      quote:
        "The dopamine hook detection is eerie. It consistently picks the exact 45 seconds of my speeches that trigger comments and debate. One clip got 1.8M views on Instagram alone.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-muted/30 border-y border-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="omni" className="mb-3">
            Creator Proof
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Loved by podcasters, speakers &{" "}
            <span className="text-[#d8572a]">omnipresent creators</span>
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            See how top voices turn single recordings into multi-million view distribution loops.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <Card
              key={idx}
              className="border border-border/70 bg-card/80 backdrop-blur-xl hover:border-[#d8572a]/60 transition-all duration-300 flex flex-col justify-between shadow-xs"
            >
              <CardContent className="p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-1 text-[#d8572a] mb-5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="size-4 fill-[#d8572a] text-[#d8572a]" />
                    ))}
                  </div>

                  <p className="text-sm text-foreground/90 leading-relaxed italic mb-6">
                    "{rev.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-foreground">{rev.author}</div>
                    <div className="text-xs text-muted-foreground">{rev.role}</div>
                  </div>
                  <span className="text-[10px] font-semibold text-[#d8572a] bg-[#d8572a]/15 px-2 py-0.5 rounded-full border border-[#d8572a]/30">
                    {rev.followers}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
