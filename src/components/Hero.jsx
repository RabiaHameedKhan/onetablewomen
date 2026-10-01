"use client";

import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[88vh] sm:h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background Image: High-end candlelit dining atmosphere with women connecting */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=2200&q=90"
          alt="Atmospheric candlelit dining table with women sharing wine and conversation"
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
        />
        
        {/* Cinematic dark tint with subtle rose glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/75 via-brand-charcoal/60 to-brand-charcoal/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/40 via-transparent to-brand-charcoal/40" />
        
        {/* Soft atmospheric radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C35D7E]/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Hero Text Content: Minimal, Uncluttered, Editorial, Animated */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-6">
        
        {/* Animated Eyebrow Tag */}
        <div className="animate-hero-tag">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#EBC9C9] uppercase">
            London • Women's Collective
          </p>
        </div>

        {/* Minimal Animated Editorial Headline */}
        <h1 className="animate-hero-title font-serif text-4xl sm:text-6xl md:text-7xl text-brand-white font-normal tracking-tight leading-[1.12]">
          Where strangers become friends <br />
          <span className="italic font-light text-[#EBC9C9]">around a shared table.</span>
        </h1>

        {/* Minimal Animated Supporting Text */}
        <p className="animate-hero-sub text-base sm:text-lg text-brand-white/80 font-light max-w-xl mx-auto leading-relaxed">
          Intimate dinners, morning coffee, and genuine sisterhood across London.
        </p>

      </div>

      {/* Gentle Floating Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-brand-white/60 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.2em] font-light">Scroll</span>
        <ChevronDown className="w-4 h-4 text-[#EBC9C9]" />
      </div>
    </section>
  );
}
