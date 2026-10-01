import EventCard from "./EventCard";

export default function EventGrid({ events, showFullDetails = true }) {
  if (!events || events.length === 0) {
    return (
      <div className="py-16 text-center bg-brand-white border border-brand-gold/25 rounded-2xl p-8 max-w-lg mx-auto">
        <p className="font-serif text-xl text-brand-charcoal mb-2">
          No gatherings found in this category
        </p>
        <p className="text-sm text-brand-muted">
          New dates are added weekly. Check back soon or select "All" to view all scheduled tables.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          showFullDetails={showFullDetails}
        />
      ))}
    </div>
  );
}
