"use client"

import * as React from "react"

type Theme = "dark" | "light"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>("dark")
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("omniclip-theme") as Theme | null
    if (stored === "light" || stored === "dark") {
      setThemeState(stored)
      applyTheme(stored)
    } else {
      // Default to dark as shown in the hero reference screenshot
      applyTheme("dark")
    }
  }, [])

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement
    root.classList.add("theme-transitioning")
    if (newTheme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
    const timeout = setTimeout(() => {
      root.classList.remove("theme-transitioning")
    }, 350)
    return () => clearTimeout(timeout)
  }

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem("omniclip-theme", newTheme)
    applyTheme(newTheme)
  }

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
  }

  // Prevent hydration mismatch by still providing context
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      <div className={!mounted ? "opacity-95" : ""}>{children}</div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

