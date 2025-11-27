"use client"

import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-accent to-cyan-400 rounded-lg flex items-center justify-center">
            <span className="text-foreground font-bold text-xl">₿</span>
          </div>
          <span className="font-bold text-xl text-foreground">Trade-Swing</span>
        </div>

        <nav className="hidden md:flex gap-8 items-center text-foreground/70">
          <a href="#features" className="hover:text-accent transition-colors">
            Features
          </a>
          <a href="#platforms" className="hover:text-accent transition-colors">
            Platforms
          </a>
          <a href="#resources" className="hover:text-accent transition-colors">
            Resources
          </a>
        </nav>

        <div className="flex gap-3">
          <Button variant="outline" className="hidden sm:inline-flex bg-transparent" asChild>
            <a href="https://app.trade-swing.tech">Sign In</a>
          </Button>
          <Button className="bg-accent hover:bg-accent/90 text-foreground font-semibold" asChild>
            <a href="https://app.trade-swing.tech">Get Started</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
