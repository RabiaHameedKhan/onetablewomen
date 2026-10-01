"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Sparkles, MapPin, ArrowUpRight } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    title: "Sunlit Sunday Brunch",
    location: "Covent Garden",
    category: "Signature Gathering",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80",
    description: "Shared seasonal brunch plates, fresh florals, and easy conversation for 16 guests.",
    quote: "I came alone and left with three true friends.",
    attendee: "Sophie L."
  },
  {
    id: 2,
    title: "Candlelit Wine & Charcuterie",
    location: "Marylebone",
    category: "Evening Social",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    description: "Natural European wines, cheese boards, and relaxed lounge conversation.",
    quote: "No awkward networking. Just wonderful women and good wine.",
    attendee: "Amira K."
  },
  {
    id: 3,
    title: "Botanical Morning Coffee",
    location: "Notting Hill",
    category: "Weekend Ritual",
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1200&q=80",
    description: "Specialty coffee, warm cinnamon buns, and low-key weekend chatter.",
    quote: "The easiest, lowest-pressure way to meet great women.",
    attendee: "Chloe D."
  },
  {
    id: 4,
    title: "The Communal Supper Club",
    location: "Shoreditch",
    category: "Feast & Stories",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    description: "Three-course banquet spotlighting guest female culinary talent.",
    quote: "Pure magic sharing a candlelit meal together.",
    attendee: "Elena R."
  }
];

export default function CarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPaused]);

  const current = SLIDES[currentIndex];

  return (
    <section 
      className="py-10 sm:py-14 bg-[#EBC9C9]/35 border-t border-b border-brand-gold/30 flex items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full">
        
        {/* Compact Header Bar */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-rose" />
            <h2 className="font-serif text-2xl sm:text-3xl text-brand-charcoal font-medium">
              Atmosphere & Gatherings
            </h2>
            <span className="hidden sm:inline text-xs text-brand-muted font-normal">
              • A glimpse into our London tables
            </span>
          </div>

          {/* Quick Nav Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous"
              className="w-9 h-9 rounded-full bg-brand-white border border-brand-gold/30 flex items-center justify-center text-brand-charcoal hover:bg-brand-rose hover:text-brand-white transition-colors shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono font-semibold text-brand-muted px-1">
              0{currentIndex + 1}/0{SLIDES.length}
            </span>
            <button
              onClick={nextSlide}
              aria-label="Next"
              className="w-9 h-9 rounded-full bg-brand-white border border-brand-gold/30 flex items-center justify-center text-brand-charcoal hover:bg-brand-rose hover:text-brand-white transition-colors shadow-xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Compact Single Viewport Card */}
        <div className="bg-brand-white border border-brand-gold/30 rounded-2xl overflow-hidden shadow-card grid grid-cols-1 md:grid-cols-12 max-h-[500px]">
          
          {/* Photo Side (7 cols) */}
          <div className="md:col-span-7 relative h-56 sm:h-72 md:h-[380px] overflow-hidden bg-brand-cream">
            <img
              key={current.id}
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover animate-fade-in"
            />
            <div className="absolute top-3 left-3 bg-brand-white/95 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider text-brand-charcoal shadow-xs">
              {current.category}
            </div>
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-brand-charcoal/80 text-brand-white px-2.5 py-1 rounded-full text-xs backdrop-blur-sm">
              <MapPin className="w-3.5 h-3.5 text-[#EBC9C9]" />
              <span>{current.location}</span>
            </div>
          </div>

          {/* Content Side (5 cols): Concise, Crisp */}
          <div className="md:col-span-5 p-6 sm:p-7 flex flex-col justify-between text-left space-y-4">
            
            <div className="space-y-2.5">
              <h3 className="font-serif text-2xl sm:text-3xl text-brand-charcoal font-semibold leading-tight">
                {current.title}
              </h3>
              <p className="text-brand-muted text-xs sm:text-sm leading-relaxed">
                {current.description}
              </p>
            </div>

            {/* Micro Quote */}
            <div className="p-3.5 bg-[#EBC9C9]/30 rounded-xl border border-brand-gold/30 space-y-1">
              <p className="font-serif italic text-xs sm:text-sm text-brand-charcoal">
                "{current.quote}"
              </p>
              <p className="text-[11px] font-semibold text-brand-rose">
                — {current.attendee}
              </p>
            </div>

            {/* Quick Action Link & Dot indicators */}
            <div className="pt-2 border-t border-brand-gold/20 flex items-center justify-between">
              <Link
                href="/events"
                className="text-xs font-semibold text-brand-rose hover:text-[#a84464] inline-flex items-center gap-1"
              >
                <span>View dates</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              {/* Dots */}
              <div className="flex items-center gap-1.5">
                {SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? "w-6 bg-brand-rose" : "w-1.5 bg-brand-gold/40"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
