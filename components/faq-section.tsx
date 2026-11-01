"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      q: "What does 'OmniClip' actually mean?",
      a: "Omni means 'all' and 'everywhere'. OmniClip embodies this by taking one single piece of content (a podcast, keynote, Zoom call, or YouTube video) and automatically distributing it everywhere — YouTube Shorts, TikTok, Instagram Reels, LinkedIn Video, X, and Threads — without requiring separate edits or manual uploading.",
    },
    {
      q: "How does the AI choose the best clips?",
      a: "Our multimodal AI analyzes audio waveforms, speech transcripts, pacing, vocal inflection, and emotional cues. It identifies high-retention segments (cliffhangers, impactful revelations, counter-intuitive statements) that typically achieve high completion and share rates on short-form feeds.",
    },
    {
      q: "Does OmniClip support active face tracking for multi-person videos?",
      a: "Yes! OmniClip's Auto-Director vision model automatically detects who is speaking and frames them in 9:16 vertical. When two or more people are bantering or debating, it automatically triggers clean split-screen cuts or smooth pans.",
    },
    {
      q: "Can I customize the captions, fonts, and brand colors?",
      a: "Absolutely. You can choose from popular presets like Karaoke Glow, Hormozi Bold, or Clean Minimal, or customize your own brand fonts, colors (including our signature #d8572a theme), logo watermarks, and caption positions.",
    },
    {
      q: "Do I need to connect my social media accounts?",
      a: "You can either download the generated clips in 4K MP4 format to post yourself, or connect your social channels via official OAuth APIs to let OmniClip schedule and publish natively with custom titles, descriptions, and hashtags.",
    },
    {
      q: "Can I try OmniClip before paying?",
      a: "Yes. Every new user receives 5 full-featured viral clips 100% free with no credit card required.",
    },
  ]

  return (
    <section id="faq" className="py-20 md:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <Badge variant="omni" className="mb-3">
          Got Questions?
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Frequently asked questions
        </h2>
        <p className="mt-3 text-base text-muted-foreground">
          Everything you need to know about turning single clips into everywhere reach.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-3">
        {faqs.map((faq, idx) => (
          <AccordionItem
            key={idx}
            value={`item-${idx}`}
            className="rounded-2xl border border-border/70 bg-card/60 backdrop-blur-md px-6 py-1 hover:border-[#d8572a]/50 transition-colors"
          >
            <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-1">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
