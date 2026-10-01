"use client";

import { useState } from "react";
import Link from "next/link";
import { X, CheckCircle2, ArrowRight, Sparkles, Heart } from "lucide-react";

export default function JoinModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    borough: "Central London",
    interest: "Dining & Supper Clubs",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      borough: "Central London",
      interest: "Dining & Supper Clubs",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-charcoal/50 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-brand-white border border-brand-gold/30 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-modal relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle decorative accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-blush via-brand-rose to-brand-gold" />

        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-1.5 text-brand-muted hover:text-brand-charcoal rounded-full hover:bg-brand-cream transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="space-y-2 mb-6 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cream border border-brand-gold/30 text-brand-rose text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Join the Collective</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-brand-charcoal font-semibold">
                Welcome to ONE TABLE
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                Step into welcoming spaces designed for genuine connection, memorable conversations, and authentic friendships.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-brand-cream/60 border border-brand-gold/40 rounded-xl text-brand-charcoal text-sm focus:outline-none focus:border-brand-rose transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="sarah@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 bg-brand-cream/60 border border-brand-gold/40 rounded-xl text-brand-charcoal text-sm focus:outline-none focus:border-brand-rose transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1.5">
                    Your Location / Borough
                  </label>
                  <select
                    value={formData.borough}
                    onChange={(e) => setFormData({ ...formData, borough: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-brand-cream/60 border border-brand-gold/40 rounded-xl text-brand-charcoal text-sm focus:outline-none focus:border-brand-rose transition-colors"
                  >
                    <option>Central London</option>
                    <option>West London</option>
                    <option>North London</option>
                    <option>South London</option>
                    <option>East London</option>
                    <option>Greater London / Visiting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1.5">
                    Primary Interest
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-brand-cream/60 border border-brand-gold/40 rounded-xl text-brand-charcoal text-sm focus:outline-none focus:border-brand-rose transition-colors"
                  >
                    <option>Dining & Supper Clubs</option>
                    <option>Weekend Brunch & Coffee</option>
                    <option>Culture & Gallery Walks</option>
                    <option>Mindful Morning & Wellness</option>
                    <option>Casual Social Gatherings</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-brand-rose hover:bg-[#b04f6f] text-brand-white text-sm font-medium rounded-xl transition-all duration-200 shadow-sm hover:shadow flex items-center justify-center gap-2"
                >
                  <span>Join the Community</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-center text-brand-muted pt-1">
                By joining, you agree to our respectful community guidelines. No subscription fees for community membership.
              </p>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-5 animate-fade-in">
            <div className="w-16 h-16 mx-auto bg-brand-cream rounded-full border border-brand-rose/40 flex items-center justify-center text-brand-rose">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl text-brand-charcoal font-semibold">
                Welcome to ONE TABLE{formData.name ? `, ${formData.name.split(" ")[0]}` : ""}!
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed max-w-sm mx-auto">
                We're delighted to welcome you. You are now registered on our community list. You can book open tables or preview your private member portal below.
              </p>
            </div>

            <div className="p-4 bg-brand-cream/70 rounded-xl border border-brand-gold/30 text-xs text-brand-charcoal space-y-1">
              <p className="font-semibold text-brand-rose">Confirmation Details</p>
              <p>Email: <span className="text-brand-muted">{formData.email || "sarah@example.com"}</span></p>
              <p>Area: <span className="text-brand-muted">{formData.borough}</span></p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/events"
                onClick={handleReset}
                className="flex-1 py-2.5 text-center text-xs font-semibold bg-brand-rose text-brand-white rounded-xl hover:bg-[#b04f6f] transition-colors"
              >
                Browse Upcoming Events
              </Link>
              <Link
                href="/member"
                onClick={handleReset}
                className="flex-1 py-2.5 text-center text-xs font-semibold text-brand-charcoal bg-brand-white border border-brand-gold/50 rounded-xl hover:bg-brand-cream transition-colors"
              >
                View Member Preview
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
