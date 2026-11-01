"use client"

import * as React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { BrandTicker } from "@/components/brand-ticker"
import { LiveSimulator } from "@/components/live-simulator"
import { HowItWorks } from "@/components/how-it-works"
import { BentoGrid } from "@/components/bento-grid"
import { PricingSection } from "@/components/pricing-section"
import { Testimonials } from "@/components/testimonials"
import { FaqSection } from "@/components/faq-section"
import { CtaBanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"

export default function Home() {
  const handleSelectSample = (sampleTitle: string) => {
    const simulatorEl = document.getElementById("simulator")
    if (simulatorEl) {
      simulatorEl.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background text-foreground flex flex-col selection:bg-[#d8572a]/30 selection:text-foreground">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1 flex flex-col">
          {/* Hero Section with animated convergence curves & central glowing capsule */}
          <HeroSection onSelectSample={handleSelectSample} />

          {/* Social Platform Broadcast Ticker */}
          <BrandTicker />

          {/* Interactive Studio Previewer & Aspect Ratio Simulator */}
          <LiveSimulator />

          {/* 3-Step Workflow Architecture */}
          <HowItWorks />

          {/* Bento Feature Grid */}
          <BentoGrid />

          {/* Transparent SaaS Pricing Matrix with Annual/Monthly Toggle */}
          <PricingSection />

          {/* Creator Testimonials & Social Proof */}
          <Testimonials />

          {/* Frequently Asked Questions */}
          <FaqSection />

          {/* High-Converting Bottom Action Banner */}
          <CtaBanner />
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  )
}
