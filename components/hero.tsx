import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen pt-20 px-4 bg-gradient-to-b from-background via-background/95 to-background flex items-center">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-sm px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20">
                ✨ Next-Generation Trading
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Trade Crypto with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-400">
                  Confidence
                </span>
              </h1>
              <p className="text-xl text-foreground/70 max-w-xl leading-relaxed">
                Advanced trading tools, real-time analytics, and intelligent risk management. Swing trade, invest, or
                hodl—all on one powerful platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-foreground font-semibold text-base"
                asChild
              >
                <a href="https://app.trade-swing.tech">
                  Start Trading Free <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-foreground/20 text-foreground hover:bg-foreground/5 bg-transparent"
              >
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-accent">500K+</div>
                <p className="text-sm text-foreground/60">Active Traders</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">$50B+</div>
                <p className="text-sm text-foreground/60">Daily Volume</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">50+</div>
                <p className="text-sm text-foreground/60">Crypto Assets</p>
              </div>
            </div>
          </div>

          <div className="relative h-96 lg:h-full lg:min-h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-cyan-400/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-foreground/5 to-foreground/10 rounded-2xl border border-border p-8 backdrop-blur-xl w-full max-w-sm">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-semibold text-foreground/70">BTC/USD</h3>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">+12.5%</span>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-foreground">$47,234.50</div>
                  <div className="text-sm text-foreground/60">+$5,423 today</div>
                </div>
                <svg className="w-full h-24" viewBox="0 0 400 100" preserveAspectRatio="none">
                  <polyline
                    points="0,80 50,60 100,50 150,40 200,35 250,45 300,30 350,50 400,40"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgb(34, 197, 94)" />
                      <stop offset="100%" stopColor="rgb(34, 197, 94)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
