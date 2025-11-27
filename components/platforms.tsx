import { Apple, MonitorPlay } from "lucide-react"

export function Platforms() {
  return (
    <section id="platforms" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Trade Anywhere, Anytime</h2>
          <p className="text-lg text-foreground/60">
            Seamless experience across all your devices. Desktop, web, or mobile.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-foreground/5 to-foreground/10 border border-border hover:border-accent/50 transition-colors">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                  <MonitorPlay className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Desktop</h3>
              </div>
              <p className="text-foreground/60">
                Full-featured trading platform with advanced charts and real-time data.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-foreground/5 to-foreground/10 border border-border hover:border-accent/50 transition-colors">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                  <Apple className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Mobile App</h3>
              </div>
              <p className="text-foreground/60">
                iOS and Android apps with push notifications and instant trade execution.
              </p>
            </div>
          </div>

          <div className="relative h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-cyan-400/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-foreground/5 to-foreground/10 rounded-2xl border border-border p-6 backdrop-blur-xl h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📱</div>
                <p className="text-foreground/60">Native apps for iOS & Android</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
