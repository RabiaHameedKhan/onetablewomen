import Link from "next/link";
import { Mail, Heart, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-white border-t border-brand-gold/30 mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-5">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl tracking-[0.2em] font-semibold text-brand-charcoal uppercase">
                ONE TABLE
              </span>
              <p className="text-xs tracking-[0.2em] text-brand-muted uppercase mt-0.5">
                Women's Collective
              </p>
            </Link>

            <p className="text-brand-muted text-sm leading-relaxed max-w-sm">
              Different backgrounds. Different stories. One table. We create welcoming, intimate gatherings across London where women come together to build genuine friendships and share memorable experiences.
            </p>

            <div className="flex items-center gap-3 pt-2 text-brand-charcoal">
              <a
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-brand-cream border border-brand-gold/40 flex items-center justify-center text-brand-charcoal hover:text-brand-rose hover:border-brand-rose transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="mailto:hello@onetablewomen.co.uk"
                className="w-9 h-9 rounded-full bg-brand-cream border border-brand-gold/40 flex items-center justify-center text-brand-charcoal hover:text-brand-rose hover:border-brand-rose transition-colors"
                aria-label="Email us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-brand-charcoal font-semibold">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-brand-muted">
              <li>
                <Link href="/about" className="hover:text-brand-rose transition-colors">
                  About ONE TABLE
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-brand-rose transition-colors">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link href="/membership" className="hover:text-brand-rose transition-colors">
                  Membership Perks
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-brand-rose transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/member" className="hover:text-brand-rose transition-colors inline-flex items-center gap-1">
                  <span>Member Area Preview</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Keep In Touch */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-brand-charcoal font-semibold">
              Stay Connected
            </h4>
            <p className="text-sm text-brand-muted leading-relaxed">
              Be the first to hear when new tables and seasonal gatherings open in your neighbourhood.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full text-xs px-3.5 py-2.5 bg-brand-cream border border-brand-gold/40 rounded-lg text-brand-charcoal placeholder-brand-muted/70 focus:outline-none focus:border-brand-rose"
                />
                <button
                  type="submit"
                  className="bg-brand-rose text-brand-white text-xs font-medium px-4 py-2.5 rounded-lg hover:bg-[#b04f6f] transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-[11px] text-brand-muted">
                No spam ever. Unsubscribe anytime.
              </p>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-brand-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
          <p>© {new Date().getFullYear()} ONE TABLE WOMEN. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-xs text-brand-charcoal/70 bg-brand-cream px-3 py-1.5 rounded-full border border-brand-gold/30">
            <span>Redesign Prototype Demo</span>
            <span className="text-brand-gold">•</span>
            <span>London, UK</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
