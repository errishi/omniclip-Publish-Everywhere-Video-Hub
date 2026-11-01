"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Check, Sparkles, ArrowRight } from "lucide-react"

export function PricingSection() {
  const [annual, setAnnual] = React.useState(true)

  const tiers = [
    {
      name: "Starter",
      desc: "For solo creators and founders testing video repurposing.",
      monthlyPrice: 0,
      annualPrice: 0,
      highlight: false,
      badge: "Free Forever",
      features: [
        "5 viral clips / month",
        "1080p HD rendering",
        "Standard kinetic captions",
        "Export for YouTube Shorts & TikTok",
        "Manual downloads (.mp4)",
      ],
      cta: "Get Started Free",
      popular: false,
    },
    {
      name: "Creator Pro",
      desc: "For active podcasters, marketers, and brands seeking omnipresence.",
      monthlyPrice: 29,
      annualPrice: 22,
      highlight: true,
      badge: "Most Popular",
      features: [
        "60 viral clips / month",
        "4K 60fps Ultra HD rendering",
        "AI Face-Tracking 9:16 Auto-Reframe",
        "Direct 1-Click publish to all 7 platforms",
        "Automated Omni-Scheduler",
        "Karaoke, Hormozi & 32 language subtitles",
        "Virality & Hook Score Predictor",
      ],
      cta: "Start 7-Day Free Trial",
      popular: true,
    },
    {
      name: "Agency & Scale",
      desc: "For media companies, growth agencies, and podcast networks.",
      monthlyPrice: 89,
      annualPrice: 69,
      highlight: false,
      badge: "Full Automation",
      features: [
        "Unlimited clips / month",
        "5 Team member seats",
        "Custom brand font & watermark templates",
        "Priority instant render queue",
        "Dedicated account manager",
        "Full REST API & Webhook access",
        "Consolidated multi-client analytics",
      ],
      cta: "Scale With Agency",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Background glow in #d8572a */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#d8572a]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge variant="omni" className="mb-3">
          Transparent Investment
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Predictable pricing for <span className="text-[#d8572a]">omnipresent reach</span>
        </h2>
        <p className="mt-3 text-base text-muted-foreground">
          Start for free. Upgrade when your view count explodes. Cancel anytime.
        </p>

        {/* Monthly / Annual Toggle */}
        <div className="mt-8 inline-flex items-center gap-3 p-1 rounded-full bg-muted/60 border border-border">
          <button
            onClick={() => setAnnual(false)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              !annual
                ? "bg-card text-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              annual
                ? "bg-card text-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span>Annually</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#d8572a]/15 text-[#d8572a]">
              Save 25%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch relative">
        {tiers.map((tier, idx) => {
          const price = annual ? tier.annualPrice : tier.monthlyPrice
          return (
            <Card
              key={idx}
              className={`relative flex flex-col justify-between transition-all duration-300 ${
                tier.highlight
                  ? "border-[#d8572a] bg-card/90 shadow-[0_12px_40px_rgba(216,87,42,0.2)] lg:-translate-y-2 ring-1 ring-[#d8572a]/50"
                  : "border-border/80 bg-card/60 backdrop-blur-md hover:border-border hover:shadow-lg"
              }`}
            >
              {/* Highlight Badge */}
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#d8572a] text-white shadow-md flex items-center gap-1">
                    <Sparkles className="size-3" />
                    {tier.badge}
                  </span>
                </div>
              )}

              <CardHeader className="p-8 pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                  {!tier.popular && (
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                      {tier.badge}
                    </span>
                  )}
                </div>
                <CardDescription className="mt-2 text-sm leading-relaxed">
                  {tier.desc}
                </CardDescription>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-black text-foreground">
                    ${price}
                  </span>
                  <span className="text-sm text-muted-foreground font-medium">
                    / month {annual && price > 0 && "(billed annually)"}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="p-8 pt-4 flex-1">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  What's included:
                </div>
                <ul className="space-y-3">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-foreground/90 font-medium">
                      <div
                        className={`size-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          tier.highlight
                            ? "bg-[#d8572a]/20 text-[#d8572a]"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <Check className="size-2.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="p-8 pt-0">
                <Button
                  className={`w-full h-11 rounded-full font-semibold transition-all cursor-pointer ${
                    tier.highlight
                      ? "bg-[#d8572a] hover:bg-[#c44c22] text-white shadow-md"
                      : "bg-muted hover:bg-muted/80 text-foreground border border-border"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="size-4 ml-1.5" />
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
