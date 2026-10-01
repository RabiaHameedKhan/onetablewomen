"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CarouselSection from "@/components/CarouselSection";
import EventCard from "@/components/EventCard";
import CTASection from "@/components/CTASection";
import JoinModal from "@/components/JoinModal";
import { EVENTS } from "@/data/mockData";
import { ArrowRight, Sparkles, Heart, Utensils, Users, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  const [isJoinOpen, setIsJoinOpen] = useState(false);

  // 3 featured events
  const upcomingEvents = EVENTS.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream">
      <Navbar />

      <main className="flex-1">
        {/* 1. HERO: Minimal, Breathtaking, No Buttons, Animated Typography */}
        <Hero />

        {/* 2. THE THREE PILLARS (Concise, Viewport-Friendly) */}
        <section className="py-12 sm:py-16 bg-brand-white border-b border-brand-gold/25">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            
            <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
              <span className="text-[11px] font-bold tracking-widest text-brand-rose uppercase">
                The Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal font-medium">
                More than an event. A chance to connect.
              </h2>
            </div>

            {/* 3 Concise Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              
              <div className="p-6 bg-brand-cream/60 border border-brand-gold/30 rounded-2xl space-y-3 hover:shadow-soft transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#EBC9C9] flex items-center justify-center text-brand-rose font-serif font-bold text-sm">
                  01
                </div>
                <h3 className="font-serif text-xl font-semibold text-brand-charcoal">
                  Curated Tables
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Intimate gatherings of 12–16 women in handpicked London restaurants, cafes, and private rooms.
                </p>
              </div>

              <div className="p-6 bg-brand-cream/60 border border-brand-gold/30 rounded-2xl space-y-3 hover:shadow-soft transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#EBC9C9] flex items-center justify-center text-brand-rose font-serif font-bold text-sm">
                  02
                </div>
                <h3 className="font-serif text-xl font-semibold text-brand-charcoal">
                  Arrive Solo
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Over 85% of our guests attend alone. Dedicated hosts ensure everyone is welcomed and introduced right away.
                </p>
              </div>

              <div className="p-6 bg-brand-cream/60 border border-brand-gold/30 rounded-2xl space-y-3 hover:shadow-soft transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#EBC9C9] flex items-center justify-center text-brand-rose font-serif font-bold text-sm">
                  03
                </div>
                <h3 className="font-serif text-xl font-semibold text-brand-charcoal">
                  Real Friendships
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  No transactional networking. Purely authentic connections and new social circles beyond your routine.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* 3. ATMOSPHERE CAROUSEL (Fits in One Viewport) */}
        <CarouselSection />

        {/* 4. UPCOMING GATHERINGS (Compact 3-Card Grid) */}
        <section className="py-12 sm:py-16 bg-brand-cream">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div className="space-y-1 text-left">
                <span className="text-[11px] font-bold tracking-widest text-brand-rose uppercase">
                  Reserve Your Place
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal font-medium">
                  What's happening at ONE TABLE
                </h2>
              </div>

              <Link
                href="/events"
                className="text-xs font-semibold text-brand-rose hover:text-[#a84464] inline-flex items-center gap-1 self-start sm:self-auto"
              >
                <span>View all gatherings</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Event Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} showFullDetails={true} />
              ))}
            </div>

          </div>
        </section>

        {/* 5. DARKER PINK COMMUNITY SECTION (#C35D7E) WITH MOVING ANIMATED BACKGROUND */}
        <section className="py-12 sm:py-16 bg-[#C35D7E] text-brand-white border-t border-b border-[#B88B80]/40 relative overflow-hidden">
          
          {/* Moving Animated Background Layer */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {/* Moving Glow Orb 1 */}
            <div className="absolute -top-24 -right-16 w-80 sm:w-[450px] h-80 sm:h-[450px] rounded-full bg-[#EBC9C9]/25 blur-3xl animate-float-1" />
            
            {/* Moving Glow Orb 2 */}
            <div className="absolute -bottom-24 -left-20 w-96 sm:w-[500px] h-96 sm:h-[500px] rounded-full bg-white/20 blur-3xl animate-float-2" />
            
            {/* Moving Glow Orb 3 */}
            <div className="absolute top-1/3 left-1/3 w-64 sm:w-[350px] h-64 sm:h-[350px] rounded-full bg-[#B88B80]/30 blur-2xl animate-float-3" />
            
            {/* Pulsing Center Ambience */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[400px] h-72 sm:h-[400px] bg-[#EBC9C9]/20 rounded-full blur-3xl animate-pulse-glow" />

            {/* Floating Bokeh Sparkle Particles */}
            <div className="absolute top-6 left-1/4 w-2 h-2 rounded-full bg-[#FFFCF9]/60 animate-pulse-glow" />
            <div className="absolute bottom-10 right-1/4 w-2.5 h-2.5 rounded-full bg-[#EBC9C9]/70 animate-float-1" />
            <div className="absolute top-1/2 right-12 w-1.5 h-1.5 rounded-full bg-white/80 animate-float-2" />
            <div className="absolute bottom-6 left-12 w-2 h-2 rounded-full bg-[#EBC9C9]/60 animate-float-3" />
          </div>

          <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
              
              {/* Text Side (7 cols) - Concise, Low Text */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-[#FFFCF9] text-[11px] font-bold tracking-wider uppercase">
                  <Heart className="w-3.5 h-3.5 fill-current text-[#EBC9C9]" />
                  <span>The Community</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl text-[#FFFCF9] font-medium leading-tight">
                  Sometimes, you just want to meet someone new.
                </h2>

                <p className="text-[#F7F1EC]/90 text-sm sm:text-base leading-relaxed font-light">
                  Making friends as an adult isn't always easy. ONE TABLE creates relaxed, intimate gatherings where women can connect without pressure or awkward networking.
                </p>

                {/* 3 Quick Bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-[#FFFCF9]">
                  <div className="flex items-center gap-2 bg-white/10 p-2.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#EBC9C9] shrink-0" />
                    <span>Solo Friendly</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 p-2.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#EBC9C9] shrink-0" />
                    <span>16 Guests Max</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 p-2.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#EBC9C9] shrink-0" />
                    <span>London Venues</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setIsJoinOpen(true)}
                    className="bg-[#FFFCF9] hover:bg-[#F7F1EC] text-[#292426] text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition-all shadow-card inline-flex items-center gap-2"
                  >
                    <span>Join ONE TABLE</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C35D7E]" />
                  </button>
                </div>
              </div>

              {/* Photo Frame (5 cols) */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card border-2 border-white/20 bg-brand-cream">
                  <img
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80"
                    alt="Women toasting at an intimate supper club"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 6. HOW IT WORKS (3 Simple Steps, Minimalist) */}
        <section id="how-it-works" className="py-12 sm:py-16 bg-brand-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
            
            <div className="max-w-md mx-auto mb-10 space-y-1">
              <span className="text-[11px] font-bold tracking-widest text-brand-rose uppercase">
                Simple & Welcoming
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal font-medium">
                How It Works
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              
              <div className="p-6 rounded-2xl bg-brand-cream/60 border border-brand-gold/30 space-y-2">
                <span className="font-serif text-2xl font-bold text-brand-rose">01</span>
                <h3 className="font-serif text-lg font-bold text-brand-charcoal uppercase tracking-wider">
                  Join
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Become part of the community list to receive early drops of newly released tables.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-brand-cream/60 border border-brand-gold/30 space-y-2">
                <span className="font-serif text-2xl font-bold text-brand-rose">02</span>
                <h3 className="font-serif text-lg font-bold text-brand-charcoal uppercase tracking-wider">
                  Discover
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Choose a brunch, supper club, or coffee gathering in your favourite London neighbourhood.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-brand-cream/60 border border-brand-gold/30 space-y-2">
                <span className="font-serif text-2xl font-bold text-brand-rose">03</span>
                <h3 className="font-serif text-lg font-bold text-brand-charcoal uppercase tracking-wider">
                  Connect
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Arrive solo, be greeted by your host, and leave with new plans and genuine friends.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* 7. FINAL CALL TO ACTION */}
        <CTASection />
      </main>

      <Footer />

      <JoinModal isOpen={isJoinOpen} onClose={() => setIsJoinOpen(false)} />
    </div>
  );
}
