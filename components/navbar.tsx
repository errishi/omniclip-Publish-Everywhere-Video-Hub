"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X, ArrowRight } from "lucide-react"

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-background/85 backdrop-blur-xl shadow-xs"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo matching Taskos styling */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <img
            src={theme === "dark" ? "/logo-light.svg" : "/logo-black.svg"}
            alt="OmniClip logo"
            className="h-10 w-full"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-full px-4 py-1.5 bg-card/60 border border-border/70 backdrop-blur-md">
          <a
            href="#features"
            className="px-3.5 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/60"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="px-3.5 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/60"
          >
            How it works
          </a>
          <a
            href="#simulator"
            className="px-3.5 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/60"
          >
            Studio
          </a>
          <a
            href="#pricing"
            className="px-3.5 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/60"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="px-3.5 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/60"
          >
            FAQ
          </a>
        </nav>

        {/* Right CTA & Controls */}
        <div className="hidden md:flex items-center gap-3">
          {/* Light / Dark Mode Animated Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative size-9 rounded-full border border-border bg-card/60 hover:bg-muted flex items-center justify-center transition-all duration-300 text-foreground overflow-hidden cursor-pointer shadow-xs hover:border-[#d8572a]/50"
          >
            <div
              className={`transform transition-transform duration-500 flex items-center justify-center ${
                theme === "dark" ? "rotate-180" : "rotate-0"
              }`}
            >
              {theme === "dark" ? (
                <Moon className="size-4 text-[#d8572a] transition-colors" />
              ) : (
                <Sun className="size-4 text-[#d8572a] transition-colors" />
              )}
            </div>
          </button>

          <Button
            variant="ghost"
            size="sm"
            className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer"
          >
            Log in
          </Button>

          {/* Primary Action Button (#d8572a) */}
          <Button
            size="sm"
            className="relative group overflow-hidden bg-[#d8572a] hover:bg-[#c44c22] text-white font-semibold rounded-full px-4 shadow-[0_0_20px_rgba(216,87,42,0.3)] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <span>Start Free</span>
            <ArrowRight className="size-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="size-9 rounded-full border border-border bg-card/60 flex items-center justify-center text-foreground cursor-pointer"
          >
            {theme === "dark" ? (
              <Moon className="size-4 text-[#d8572a]" />
            ) : (
              <Sun className="size-4 text-[#d8572a]" />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="size-9 rounded-full border border-border bg-card/60 flex items-center justify-center text-foreground cursor-pointer"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-xl px-6 py-5 flex flex-col gap-3 animate-in slide-in-from-top-4 duration-300">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium py-2 text-foreground/80 hover:text-foreground"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium py-2 text-foreground/80 hover:text-foreground"
          >
            How it works
          </a>
          <a
            href="#simulator"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium py-2 text-foreground/80 hover:text-foreground"
          >
            Studio
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium py-2 text-foreground/80 hover:text-foreground"
          >
            Pricing
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium py-2 text-foreground/80 hover:text-foreground"
          >
            FAQ
          </a>
          <div className="pt-3 border-t border-border flex flex-col gap-2">
            <Button variant="outline" className="w-full justify-center">
              Log in
            </Button>
            <Button className="w-full justify-center bg-[#d8572a] text-white hover:bg-[#c44c22]">
              Start Free
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
