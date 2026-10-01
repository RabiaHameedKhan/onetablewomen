"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  Share2,
  ShieldCheck,
  Check
} from "lucide-react";

export default function EventDetailClient({ event }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream">
      <Navbar />

      <main className="flex-1 py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          {/* Breadcrumb / Back button */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-brand-muted hover:text-brand-charcoal transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all events</span>
            </Link>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-xs text-brand-muted hover:text-brand-charcoal px-3 py-1.5 rounded-lg border border-brand-gold/30 bg-brand-white transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedLink ? "Link copied!" : "Share event"}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column (8 cols): Event Details & Story */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Event Header */}
              <div className="space-y-4 text-left">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-white text-brand-charcoal border border-brand-gold/30">
                    {event.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-blush/30 text-brand-rose border border-brand-gold/20">
                    {event.spacesLeft} spaces remaining
                  </span>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-charcoal font-medium leading-[1.15]">
                  {event.name}
                </h1>

                {/* Quick Meta Row */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-brand-muted pt-2 border-b border-brand-gold/20 pb-6">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-rose" />
                    <span className="text-brand-charcoal font-medium">{event.fullDate}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-rose" />
                    <span>{event.duration}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-rose" />
                    <span>{event.location}</span>
                  </span>
                </div>
              </div>

              {/* Large Hero Image */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-card border border-brand-gold/30 bg-brand-cream">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* About the event */}
              <div className="space-y-4 text-left">
                <h3 className="font-serif text-2xl text-brand-charcoal font-semibold">
                  About the event
                </h3>
                <p className="text-brand-charcoal/90 text-base leading-relaxed">
                  {event.fullDescription}
                </p>
                <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
                  ONE TABLE is founded on the simple belief that extraordinary friendships happen around unpretentious tables. Guests usually arrive alone, but leaving with new plans, WhatsApp groups, and real friends is the norm.
                </p>
              </div>

              {/* What to Expect */}
              <div className="space-y-4 text-left p-6 sm:p-8 bg-brand-white border border-brand-gold/30 rounded-2xl shadow-soft">
                <h3 className="font-serif text-2xl text-brand-charcoal font-semibold flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-brand-rose" />
                  <span>What to expect</span>
                </h3>

                <ul className="space-y-3.5 pt-2">
                  {event.whatToExpect.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-brand-charcoal/90 leading-relaxed">
                      <div className="w-5 h-5 rounded-full bg-brand-blush/40 border border-brand-gold/30 flex items-center justify-center shrink-0 mt-0.5 text-brand-rose">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Location & Venue */}
              <div className="space-y-4 text-left">
                <h3 className="font-serif text-2xl text-brand-charcoal font-semibold">
                  Location & Venue
                </h3>
                <div className="p-6 bg-brand-white border border-brand-gold/30 rounded-2xl space-y-2">
                  <p className="font-semibold text-brand-charcoal text-base">
                    {event.venueAddress}
                  </p>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    Centrally situated with convenient access from nearby London Underground and rail stations. Detailed meeting point coordinates and host phone number are shared upon booking.
                  </p>
                </div>
              </div>

              {/* What's Included */}
              {event.included && (
                <div className="space-y-3 text-left">
                  <h4 className="text-xs uppercase font-semibold tracking-wider text-brand-muted">
                    Included with your reservation
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {event.included.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-brand-charcoal bg-brand-cream/80 p-2.5 rounded-lg border border-brand-gold/20">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-rose shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Column (4 cols): Sticky Reservation Box */}
            <div className="lg:col-span-4 sticky top-28 space-y-6">
              <div className="bg-brand-white border border-brand-gold/30 rounded-2xl p-6 sm:p-7 shadow-card space-y-6 text-left">
                
                {/* Price Display */}
                <div className="space-y-1 pb-5 border-b border-brand-gold/20">
                  <span className="text-[11px] uppercase tracking-wider text-brand-muted font-medium">
                    Price per place
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-4xl font-bold text-brand-charcoal">
                      {event.priceFormatted}
                    </span>
                    <span className="text-xs text-brand-muted">
                      / guest inclusive
                    </span>
                  </div>
                </div>

                {/* Key Event Details Summary */}
                <div className="space-y-3 text-xs text-brand-charcoal">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-brand-rose shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block">{event.fullDate}</span>
                      <span className="text-brand-muted">{event.time}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block">{event.location}</span>
                      <span className="text-brand-muted text-[11px]">{event.venueAddress}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-4 h-4 text-brand-rose shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block">
                        {event.spacesLeft} of {event.spacesTotal} spaces left
                      </span>
                      <span className="text-brand-muted text-[11px]">Intimate table seating</span>
                    </div>
                  </div>
                </div>

                {/* Primary CTA: Reserve Your Place */}
                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full py-3.5 bg-brand-rose hover:bg-[#b04f6f] text-brand-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] text-center"
                  >
                    Reserve Your Place ({event.priceFormatted})
                  </button>

                  <p className="text-[11px] text-center text-brand-muted">
                    Prototype demo • No real payment required
                  </p>
                </div>

                {/* Assurance box */}
                <div className="p-3.5 bg-brand-cream/60 rounded-xl border border-brand-gold/25 space-y-1 text-left">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-charcoal">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-rose" />
                    <span>Attending Solo?</span>
                  </div>
                  <p className="text-[11px] text-brand-muted leading-relaxed">
                    Over 85% of our guests book alone. You will be warmly greeted by our host and introduced right away.
                  </p>
                </div>

              </div>

              {/* Host Card */}
              {event.host && (
                <div className="bg-brand-white border border-brand-gold/30 rounded-2xl p-5 text-left flex items-center gap-3.5 shadow-soft">
                  <div className="w-11 h-11 rounded-full bg-brand-cream border border-brand-rose/40 flex items-center justify-center font-serif text-base font-bold text-brand-rose shrink-0">
                    {event.host[0]}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-brand-muted tracking-wider block">
                      Table Host
                    </span>
                    <p className="font-serif font-semibold text-brand-charcoal text-sm">
                      {event.host}
                    </p>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      </main>

      <Footer />

      {/* Simulated Booking Modal */}
      <BookingModal
        event={event}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
