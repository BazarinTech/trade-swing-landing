"use client"

import { useState } from "react"

export function Stats() {
  const [stats, setStats] = useState([
    { label: "24h Volume", value: "$50B" },
    { label: "Supported Coins", value: "500+" },
    { label: "Active Traders", value: "500K+" },
    { label: "Uptime", value: "99.99%" },
  ])

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-gradient-to-br from-accent/5 to-cyan-400/5 border border-accent/20 hover:border-accent/50 transition-colors text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">{stat.value}</div>
              <p className="text-foreground/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
