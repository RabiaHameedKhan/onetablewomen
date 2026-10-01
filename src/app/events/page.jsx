"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventGrid from "@/components/EventGrid";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { EVENTS } from "@/data/mockData";
import { Sparkles, Filter, Calendar } from "lucide-react";

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Dining", "Coffee", "Culture", "Wellness", "Social"];

  const filteredEvents = selectedCategory === "All"
    ? EVENTS
    : EVENTS.filter((e) => e.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-white border border-brand-gold/30 text-brand-rose text-xs font-semibold tracking-wider uppercase shadow-xs">
              <Calendar className="w-3.5 h-3.5" />
              <span>Curated London Gatherings</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl text-brand-charcoal font-medium tracking-tight">
              Find Your Next Experience
            </h1>

            <p className="text-brand-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Every table is intentionally capped at 12–16 spaces to foster intimate, meaningful conversation. Reserve your seat below.
            </p>
          </div>

          {/* Filter Controls */}
          <div className="flex items-center justify-center gap-2 sm:gap-2.5 flex-wrap mb-12">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-brand-rose text-brand-white shadow-sm font-semibold"
                      : "bg-brand-white text-brand-charcoal/80 border border-brand-gold/30 hover:border-brand-rose hover:text-brand-rose shadow-xs"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Event Results Count */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-brand-gold/20 text-xs text-brand-muted">
            <span>
              Showing <strong className="text-brand-charcoal font-semibold">{filteredEvents.length}</strong> {filteredEvents.length === 1 ? "gathering" : "gatherings"}
            </span>
            <span>All events hosted in central & neighbourhood London venues</span>
          </div>

          {/* 6 Event Cards Grid */}
          <EventGrid events={filteredEvents} showFullDetails={true} />

          {/* Note on Intimate Tables */}
          <div className="mt-16 p-6 sm:p-8 bg-brand-white border border-brand-gold/30 rounded-2xl text-center max-w-2xl mx-auto space-y-2">
            <h4 className="font-serif text-lg font-semibold text-brand-charcoal">
              Hosting or Private Tables?
            </h4>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              Looking to host a custom private table for your book club, birthday, or creative circle? We organise bespoke ONE TABLE gatherings on request.
            </p>
          </div>

        </div>

        <div className="mt-20">
          <CTASection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
