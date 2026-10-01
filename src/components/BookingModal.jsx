"use client";

import { useState } from "react";
import Link from "next/link";
import { X, CheckCircle2, Calendar, MapPin, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export default function BookingModal({ event, isOpen, onClose }) {
  const [name, setName] = useState("Sarah Jenkins");
  const [email, setEmail] = useState("sarah.jenkins@example.com");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen || !event) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsBooked(true);
    }, 400);
  };

  const handleClose = () => {
    setIsBooked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-charcoal/50 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-brand-white border border-brand-gold/30 rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-modal relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-rose" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1.5 text-brand-muted hover:text-brand-charcoal rounded-full hover:bg-brand-cream transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isBooked ? (
          <div>
            {/* Header */}
            <div className="space-y-1 mb-5 text-left">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-brand-rose">
                Prototype Reservation
              </span>
              <h3 className="font-serif text-2xl text-brand-charcoal font-semibold">
                Reserve Your Place
              </h3>
            </div>

            {/* Event Summary Card */}
            <div className="p-3.5 bg-brand-cream/70 rounded-xl border border-brand-gold/30 space-y-1.5 mb-5 text-left">
              <p className="font-serif text-base font-semibold text-brand-charcoal">
                {event.name}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-brand-muted">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-brand-rose" />
                  {event.date}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-rose" />
                  {event.location}
                </span>
              </div>
              <div className="pt-2 border-t border-brand-gold/20 flex items-center justify-between text-xs font-medium">
                <span className="text-brand-muted">Price per place:</span>
                <span className="text-sm font-semibold text-brand-charcoal">{event.priceFormatted}</span>
              </div>
            </div>

            {/* Simulated Booking Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-3.5 py-2.5 bg-brand-cream/40 border border-brand-gold/40 rounded-xl text-brand-charcoal text-sm focus:outline-none focus:border-brand-rose transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-3.5 py-2.5 bg-brand-cream/40 border border-brand-gold/40 rounded-xl text-brand-charcoal text-sm focus:outline-none focus:border-brand-rose transition-colors"
                />
              </div>

              {/* Prototype Note */}
              <div className="flex items-center gap-2 text-[11px] text-brand-muted bg-brand-cream/50 p-2.5 rounded-lg border border-brand-gold/20">
                <ShieldCheck className="w-4 h-4 text-brand-rose shrink-0" />
                <span>Simulated booking flow for demo purposes. No payment is charged.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-brand-rose hover:bg-[#b04f6f] disabled:opacity-60 text-brand-white text-sm font-medium rounded-xl transition-all duration-200 shadow-sm flex items-center justify-center gap-2 mt-2"
              >
                {isSubmitting ? (
                  <span>Reserving your seat...</span>
                ) : (
                  <>
                    <span>Confirm Booking ({event.priceFormatted})</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="py-6 text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 mx-auto bg-brand-cream rounded-full border border-brand-rose/40 flex items-center justify-center text-brand-rose shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="font-serif text-2xl sm:text-3xl text-brand-charcoal font-semibold">
                You're booked!
              </h3>
              <p className="text-brand-rose font-medium text-sm">
                Your place has been reserved.
              </p>
            </div>

            <p className="text-brand-muted text-xs sm:text-sm max-w-xs mx-auto leading-relaxed">
              We look forward to welcoming you at the table. A confirmation email has been simulated to <span className="font-medium text-brand-charcoal">{email}</span>.
            </p>

            {/* Booking Details Card */}
            <div className="p-4 bg-brand-cream/70 rounded-xl border border-brand-gold/30 text-left text-xs space-y-2">
              <div className="flex justify-between items-center pb-2 border-b border-brand-gold/20">
                <span className="text-brand-muted">Booking Reference</span>
                <span className="font-mono font-semibold text-brand-charcoal">#OT-BRUNCH-8492</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-brand-muted">Event</span>
                <span className="font-medium text-brand-charcoal">{event.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-brand-muted">Date & Time</span>
                <span className="text-brand-charcoal">{event.date} at {event.time}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-brand-muted">Guest Name</span>
                <span className="text-brand-charcoal">{name}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <Link
                href="/member"
                onClick={handleClose}
                className="flex-1 py-2.5 text-center text-xs font-semibold bg-brand-rose text-brand-white rounded-xl hover:bg-[#b04f6f] transition-colors"
              >
                View in Member Area
              </Link>
              <button
                type="button"
                onClick={handleClose}
                className="flex-1 py-2.5 text-center text-xs font-semibold text-brand-charcoal bg-brand-white border border-brand-gold/50 rounded-xl hover:bg-brand-cream transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
