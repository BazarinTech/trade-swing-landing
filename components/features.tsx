import { Zap, Shield, TrendingUp, BarChart3, Bell, Smartphone } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-millisecond trade execution. Never miss a swing.",
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Military-grade encryption and 2FA protection for your assets.",
  },
  {
    icon: TrendingUp,
    title: "Smart Analysis",
    description: "AI-powered insights and technical analysis at your fingertips.",
  },
  {
    icon: BarChart3,
    title: "Advanced Charts",
    description: "Professional-grade charting with 100+ indicators and tools.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Customizable alerts for price movements and market conditions.",
  },
  {
    icon: Smartphone,
    title: "Mobile Trading",
    description: "Trade on the go with our native iOS and Android apps.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Everything You Need to Trade Smart</h2>
          <p className="text-lg text-foreground/60">
            Packed with powerful features designed for traders of all levels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="group p-8 rounded-xl bg-gradient-to-br from-foreground/5 to-foreground/10 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent mb-6 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
