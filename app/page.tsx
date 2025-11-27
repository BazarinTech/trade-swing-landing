import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Stats } from "@/components/stats"
import { Platforms } from "@/components/platforms"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Trade-Swing | Crypto Trading Platform",
  description: "Advanced crypto trading and investment platform. Trade with confidence, invest with data.",
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Stats />
      <Platforms />
      <CTA />
      <Footer />
    </main>
  )
}
