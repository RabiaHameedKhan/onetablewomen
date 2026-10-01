"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import JoinModal from "@/components/JoinModal";
import { Sparkles, Check, ArrowRight, ShieldCheck, Heart, Users, Star } from "lucide-react";

export default function MembershipPage() {
  const [isJoinOpen, setIsJoinOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream">
      <Navbar />

      <main className="flex-1 py-12 sm:py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-white border border-brand-gold/30 text-brand-rose text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Community Membership</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl text-brand-charcoal font-medium">
              Join the ONE TABLE Collective
            </h1>

            <p className="text-brand-muted text-base sm:text-lg leading-relaxed">
              We believe meaningful community should be accessible. Joining the ONE TABLE collective connects you with hundreds of remarkable women across London.
            </p>
          </div>

          {/* Membership Tiers Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            
            {/* Community Membership (Standard) */}
            <div className="bg-brand-white border border-brand-gold/30 rounded-2xl p-7 sm:p-8 shadow-soft flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-brand-muted font-bold block">
                  Open Community
                </span>
                <h3 className="font-serif text-3xl font-semibold text-brand-charcoal">
                  Free Member
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Join our community mailing list and gain priority access to browse and reserve open public tables across London.
                </p>

                <div className="py-2 border-y border-brand-gold/20 flex items-baseline gap-1">
                  <span className="font-serif text-4xl font-bold text-brand-charcoal">£0</span>
                  <span className="text-xs text-brand-muted">/ forever</span>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-brand-charcoal">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-rose shrink-0" />
                    <span>Access to all public dining & brunch events</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-rose shrink-0" />
                    <span>Pay only per event attendance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-rose shrink-0" />
                    <span>Weekly newsletter & event drops</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-rose shrink-0" />
                    <span>WhatsApp post-event group invitations</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => setIsJoinOpen(true)}
                className="w-full py-3 bg-brand-cream border border-brand-gold/40 hover:border-brand-rose text-brand-charcoal text-xs font-semibold rounded-xl transition-colors"
              >
                Join Community List
              </button>
            </div>

            {/* Founding Member Club (Elevated Concept) */}
            <div className="bg-brand-white border-2 border-brand-rose/60 rounded-2xl p-7 sm:p-8 shadow-card flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-brand-rose text-brand-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Featured Concept
              </div>

              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-brand-rose font-bold block">
                  Private Collective
                </span>
                <h3 className="font-serif text-3xl font-semibold text-brand-charcoal">
                  Table Pass Member
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  An elevated private tier offering early reservation windows, member-only supper clubs, and curated cultural access.
                </p>

                <div className="py-2 border-y border-brand-gold/20 flex items-baseline gap-1">
                  <span className="font-serif text-4xl font-bold text-brand-rose">£18</span>
                  <span className="text-xs text-brand-muted">/ month (concept preview)</span>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-brand-charcoal">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-rose shrink-0" />
                    <span>48-hour early booking window for all tables</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-rose shrink-0" />
                    <span>10% member savings on all event tickets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-rose shrink-0" />
                    <span>Exclusive quarterly members-only dinner</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-rose shrink-0" />
                    <span>Private member portal & digital membership card</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/member"
                className="w-full py-3 bg-brand-rose hover:bg-[#b04f6f] text-brand-white text-xs font-semibold rounded-xl transition-colors text-center inline-flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Preview Member Experience</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

        <div className="mt-20">
          <CTASection />
        </div>
      </main>

      <Footer />

      <JoinModal isOpen={isJoinOpen} onClose={() => setIsJoinOpen(false)} />
    </div>
  );
}
