"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import JoinModal from "@/components/JoinModal";
import { Sparkles, Heart, Users, Utensils, ArrowRight, CheckCircle2, Star } from "lucide-react";

export default function AboutPage() {
  const [isJoinOpen, setIsJoinOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream">
      <Navbar />

      <main className="flex-1">
        {/* Editorial Header */}
        <section className="py-16 sm:py-24 max-w-5xl mx-auto px-6 sm:px-8 space-y-12 text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-white border border-brand-gold/30 text-brand-rose text-xs font-semibold tracking-wider uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Vision & Collective</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-charcoal font-normal leading-[1.12]">
              Where London's Most <br />
              <span className="italic font-light text-brand-rose">Inspiring Women</span> <br />
              Share A Single Table.
            </h1>

            <p className="text-brand-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              We started ONE TABLE to give women a place where they don't have to network, pitch, or prove anything. Just pull up a chair, enjoy extraordinary food, and let genuine friendship unfold.
            </p>
          </div>

          {/* Large Lifestyle Visual */}
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-card border border-brand-gold/30 bg-brand-cream">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=85"
              alt="Women gathered around a dinner table enjoying heartfelt conversation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-brand-white max-w-md text-left">
              <p className="font-serif italic text-lg sm:text-2xl leading-snug">
                "No business cards. No polite pretences. Just women being real with each other."
              </p>
            </div>
          </div>
        </section>

        {/* CONTRAST SECTION: Rich Blush Pink (#EBC9C9) */}
        <section className="py-20 lg:py-24 bg-[#EBC9C9] border-t border-b border-brand-gold/40 relative">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-12">
            
            <div className="max-w-2xl text-left space-y-3">
              <span className="text-xs uppercase tracking-widest text-brand-rose font-bold block">
                The Why
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal font-semibold">
                An antidote to the loneliness of a bustling city.
              </h2>
              <p className="text-brand-charcoal/80 text-sm sm:text-base leading-relaxed">
                London is dazzling, creative, and fast-paced — but it can also be quietly isolating. You can ride the Tube surrounded by thousands of people and still go weeks without an honest, deep conversation.
              </p>
            </div>

            {/* 3 Elevated Feature Cards on Blush Pink */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-7 bg-brand-white border border-brand-gold/30 rounded-2xl shadow-soft space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#EBC9C9] text-brand-rose flex items-center justify-center font-serif font-bold text-base shadow-xs">
                  1
                </div>
                <h3 className="font-serif text-xl font-semibold text-brand-charcoal">
                  Come Solo, Leave Connected
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Over 85% of our guests arrive alone. Our hosts make introductions easy and warm so you feel right at home within five minutes.
                </p>
              </div>

              <div className="p-7 bg-brand-white border border-brand-gold/30 rounded-2xl shadow-soft space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#EBC9C9] text-brand-rose flex items-center justify-center font-serif font-bold text-base shadow-xs">
                  2
                </div>
                <h3 className="font-serif text-xl font-semibold text-brand-charcoal">
                  Intimate By Design
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  We strictly cap our tables at 12–16 seats. No loud cocktail mixers where you get lost in the noise. Every seat is part of the story.
                </p>
              </div>

              <div className="p-7 bg-brand-white border border-brand-gold/30 rounded-2xl shadow-soft space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#EBC9C9] text-brand-rose flex items-center justify-center font-serif font-bold text-base shadow-xs">
                  3
                </div>
                <h3 className="font-serif text-xl font-semibold text-brand-charcoal">
                  Thoughtfully Curated
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  From sunlit secret gardens to historic wine cellars and boutique galleries, every location is chosen to spark joy and connection.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA to Join */}
        <CTASection />
      </main>

      <Footer />

      <JoinModal isOpen={isJoinOpen} onClose={() => setIsJoinOpen(false)} />
    </div>
  );
}
