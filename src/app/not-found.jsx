import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-cream text-brand-charcoal">
      {/* Minimal Header */}
      <header className="border-b border-brand-gold/30 bg-brand-cream py-6 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl tracking-[0.2em] font-semibold text-brand-charcoal uppercase">
            ONE TABLE
          </Link>
          <Link
            href="/"
            className="text-xs font-semibold text-brand-rose hover:text-[#a84464] flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 flex items-center justify-center py-20 px-6">
        <div className="max-w-md w-full text-center space-y-6 bg-brand-white border border-brand-gold/30 rounded-2xl p-8 shadow-card">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cream border border-brand-gold/30 text-brand-rose text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Page Not Found</span>
          </div>

          <h1 className="font-serif text-4xl text-brand-charcoal font-semibold">
            Table Not Found
          </h1>

          <p className="text-brand-muted text-sm leading-relaxed">
            The page or gathering you are looking for may have moved, or is no longer scheduled.
          </p>

          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-brand-rose hover:bg-[#b04f6f] text-brand-white text-xs font-semibold px-5 py-3 rounded-xl transition-all shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to ONE TABLE</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-brand-gold/30 py-6 text-center text-xs text-brand-muted">
        <p>© {new Date().getFullYear()} ONE TABLE WOMEN. London Redesign Prototype.</p>
      </footer>
    </div>
  );
}
