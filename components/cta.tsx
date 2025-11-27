import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-accent/10 via-background to-cyan-400/10 border-y border-border">
      <div className="container mx-auto max-w-3xl">
        <div className="relative rounded-2xl bg-gradient-to-br from-foreground/5 to-foreground/10 border border-border p-12 lg:p-16 text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10"></div>

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Join Thousands of Successful Traders</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-xl mx-auto">
            Start trading crypto with confidence today. Zero commissions on your first month.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-foreground font-semibold text-base" asChild>
              <a href="https://app.trade-swing.tech">
                Create Free Account <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground/20 text-foreground hover:bg-foreground/5 bg-transparent"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
