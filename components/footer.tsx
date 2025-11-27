export function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold">₿</span>
              </div>
              <span className="font-bold text-foreground">Trade-Swing</span>
            </div>
            <p className="text-foreground/60 text-sm">Advanced crypto trading platform for the modern investor.</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm">© 2025 Trade-Swing. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
              <span className="sr-only">Twitter</span>𝕏
            </a>
            <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
              <span className="sr-only">Discord</span>💬
            </a>
            <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
              <span className="sr-only">GitHub</span>
              ⚙️
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
