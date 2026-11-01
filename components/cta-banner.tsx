"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react"

export function CtaBanner() {
  const [email, setEmail] = React.useState("")
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3500)
    setEmail("")
  }

  return (
    <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Solid container - NO gradients */}
      <div className="relative overflow-hidden rounded-3xl border border-border dark:border-[#d8572a]/30 bg-card dark:bg-[#141210] p-8 sm:p-14 lg:p-20 text-center shadow-xl">
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <Badge
            variant="outline"
            className="mb-6 border-[#d8572a]/40 bg-[#d8572a]/10 text-[#d8572a] font-semibold px-4 py-1.5 text-xs tracking-wider uppercase"
          >
            Start Multiplying Your Reach Today
          </Badge>

          {/* Solid Typography - NO gradient clip text */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] mb-5 text-foreground">
            One clip. Everywhere.{" "}
            <span className="block mt-1 text-[#d8572a]">
              Zero extra editing hours.
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-9 leading-relaxed">
            Join 10,000+ creators who turn single recordings into hundreds of thousands of views across YouTube Shorts, TikTok, and Reels.
          </p>

          {/* Solid Email / Action Capsule */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col sm:flex-row items-center gap-2 rounded-2xl sm:rounded-full bg-background border border-border p-2 shadow-md focus-within:border-[#d8572a]"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your creator email..."
              required
              className="w-full sm:flex-1 bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <Button
              type="submit"
              className="w-full sm:w-auto rounded-full bg-[#d8572a] hover:bg-[#c44c22] text-white font-bold px-6 h-11 transition-all shrink-0 cursor-pointer shadow-sm hover:scale-[1.02]"
            >
              <span>Get 5 Free Clips</span>
              <ArrowRight className="size-4 ml-1.5" />
            </Button>
          </form>

          {submitted && (
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-xs font-semibold animate-in fade-in">
              <CheckCircle2 className="size-3.5" />
              <span>Invite link sent! Check your inbox to begin.</span>
            </div>
          )}

          {/* Guarantee Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-[#d8572a]" />
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="size-4 text-[#d8572a]" />
              Instant 45-second processing
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-[#d8572a]" />
              Official API partners
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
