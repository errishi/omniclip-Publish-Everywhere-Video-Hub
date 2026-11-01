"use client"

import React from "react"
import Link from "next/link"
import { useTheme } from "@/components/theme-provider"
import { Moon, Sun } from "lucide-react"

export function Footer() {
  const { theme, toggleTheme } = useTheme()

  return (
    <footer className="border-t border-border/60 bg-card/40 backdrop-blur-md pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-border/50">
          {/* Brand Col */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="size-8 rounded-xl bg-[#d8572a] flex items-center justify-center text-white">
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 3v3" />
                  <path d="M12 18v3" />
                  <path d="M3 12h3" />
                  <path d="M18 12h3" />
                </svg>
              </div>
              <span className="font-bold text-lg tracking-tight text-foreground">
                OmniClip
              </span>
            </Link>

            <p className="mt-3 text-xs sm:text-sm text-muted-foreground max-w-sm leading-relaxed">
              The AI video syndication engine. Takes one raw video clip and repurposes, reframes, captions, and distributes it across all social feeds simultaneously.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-muted-foreground font-medium">
                All rendering pipelines operational (99.98% uptime)
              </span>
            </div>
          </div>

          {/* Product links */}
          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-foreground">
              Product
            </span>
            <a href="#features" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Auto 9:16 Reframe
            </a>
            <a href="#simulator" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Viral Hook Predictor
            </a>
            <a href="#features" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Karaoke Captions
            </a>
            <a href="#how-it-works" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Omni-Scheduler
            </a>
            <a href="#pricing" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Pricing Plans
            </a>
          </div>

          {/* Integrations */}
          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-foreground">
              Channels
            </span>
            <span className="text-xs text-muted-foreground">YouTube Shorts</span>
            <span className="text-xs text-muted-foreground">TikTok Direct</span>
            <span className="text-xs text-muted-foreground">Instagram Reels</span>
            <span className="text-xs text-muted-foreground">LinkedIn Video</span>
            <span className="text-xs text-muted-foreground">X / Twitter</span>
          </div>

          {/* Company & Legal */}
          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-foreground">
              Company
            </span>
            <a href="#faq" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
            <span className="text-xs text-muted-foreground cursor-pointer hover:text-foreground">
              Privacy Policy
            </span>
            <span className="text-xs text-muted-foreground cursor-pointer hover:text-foreground">
              Terms of Service
            </span>
            <span className="text-xs text-muted-foreground cursor-pointer hover:text-foreground">
              Brand Assets
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>© 2026 OmniClip AI Inc. All rights reserved.</span>
            <span>•</span>
            <span className="text-[#d8572a] font-semibold">
              Accent Color: #d8572a
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span>Theme:</span>
            <button
              onClick={toggleTheme}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-card/60 hover:bg-muted text-foreground transition-all cursor-pointer font-medium"
            >
              {theme === "dark" ? (
                <>
                  <Moon className="size-3 text-[#d8572a]" />
                  <span>Dark Mode</span>
                </>
              ) : (
                <>
                  <Sun className="size-3 text-[#d8572a]" />
                  <span>Light Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
