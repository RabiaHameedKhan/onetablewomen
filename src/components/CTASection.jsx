"use client";

import { useState } from "react";
import { ArrowRight, Sparkles, Heart, CheckCircle2 } from "lucide-react";
import JoinModal from "./JoinModal";

export default function CTASection() {
  const [isJoinOpen, setIsJoinOpen] = useState(false);

  return (
    <section className="py-10 sm:py-14 bg-brand-cream">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        
        {/* Floating Luxury Invitation Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-card border border-[#B88B80]/40 bg-gradient-to-br from-[#C35D7E] via-[#b85272] to-[#983b58] text-brand-white p-7 sm:p-9 lg:p-10">
          
          {/* Subtle Ambient Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-black/15 rounded-full blur-2xl pointer-events-none" />
          
          {/* Subtle Background Watermark Typography */}
          <div className="absolute -right-4 -bottom-6 font-serif text-8xl sm:text-9xl font-bold text-white/5 select-none pointer-events-none">
            OT
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 lg:gap-10 text-left">
            
            {/* Left Content Side */}
            <div className="space-y-3 max-w-xl">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-[#FFFCF9] text-[10px] sm:text-[11px] font-bold tracking-widest uppercase shadow-xs">
                <Sparkles className="w-3 h-3 text-[#EBC9C9]" />
                <span>The Invitation • London Collective</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#FFFCF9] font-medium leading-snug">
                Your seat is waiting at the next table.
              </h2>

              <p className="text-[#F7F1EC]/90 text-xs sm:text-sm font-light leading-relaxed">
                No waiting lists, no awkward networking. Just wonderful women, curated dining, and conversations that feel like coming home.
              </p>

              {/* Quick Perks Line */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-[11px] text-[#EBC9C9]">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFFCF9]" />
                  <span>Free community access</span>
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFFCF9]" />
                  <span>Solo guests warmly welcomed</span>
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFFCF9]" />
                  <span>Curated London venues</span>
                </span>
              </div>

            </div>

            {/* Right Action Side */}
            <div className="w-full md:w-auto shrink-0 flex flex-col items-start md:items-end gap-3 pt-2 md:pt-0">
              
              {/* Member Proof Pill */}
              <div className="flex items-center gap-2 text-xs text-[#FFFCF9]/90 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/15">
                <div className="flex -space-x-1.5">
                  <img
                    className="w-5 h-5 rounded-full border border-white object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                    alt="Member"
                  />
                  <img
                    className="w-5 h-5 rounded-full border border-white object-cover"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
                    alt="Member"
                  />
                  <img
                    className="w-5 h-5 rounded-full border border-white object-cover"
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80"
                    alt="Member"
                  />
                </div>
                <span className="text-[11px] font-medium">500+ women joined</span>
              </div>

              {/* Compact Sleek Action Button */}
              <button
                onClick={() => setIsJoinOpen(true)}
                className="w-full sm:w-auto bg-[#FFFCF9] hover:bg-[#F7F1EC] text-[#292426] text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all duration-200 shadow-card hover:shadow-lg active:scale-[0.98] inline-flex items-center justify-center gap-2 border border-white/40"
              >
                <span>Join ONE TABLE</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C35D7E]" />
              </button>

              <span className="text-[10px] text-[#F7F1EC]/70 text-center md:text-right w-full">
                Zero commitments • RSVP only to tables you love
              </span>

            </div>

          </div>

        </div>

      </div>

      <JoinModal isOpen={isJoinOpen} onClose={() => setIsJoinOpen(false)} />
    </section>
  );
}
