import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Users, ArrowUpRight } from "lucide-react";

export default function EventCard({ event, showFullDetails = true }) {
  return (
    <div className="group bg-brand-white border border-brand-gold/25 rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      {/* Event Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-cream">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Category Label Pill */}
        <div className="absolute top-3.5 left-3.5">
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-brand-white/95 text-brand-charcoal backdrop-blur-sm shadow-sm border border-brand-gold/20">
            {event.category}
          </span>
        </div>

        {/* Price Tag if full details */}
        {showFullDetails && event.priceFormatted && (
          <div className="absolute top-3.5 right-3.5">
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-brand-rose text-brand-white shadow-sm">
              {event.priceFormatted}
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4 text-left">
        <div className="space-y-2.5">
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-brand-muted">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-brand-rose" />
              <span>{event.date}</span>
              {event.time && <span>• {event.time}</span>}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-gold" />
              <span>{event.location}</span>
            </span>
          </div>

          {/* Event Title */}
          <h3 className="font-serif text-xl sm:text-2xl text-brand-charcoal font-semibold leading-snug group-hover:text-brand-rose transition-colors">
            <Link href={`/events/${event.id}`}>
              {event.name}
            </Link>
          </h3>

          {/* Short description */}
          {event.shortDescription && (
            <p className="text-brand-muted text-xs sm:text-sm line-clamp-2 leading-relaxed">
              {event.shortDescription}
            </p>
          )}
        </div>

        {/* Footer Area */}
        <div className="pt-3 border-t border-brand-gold/20 flex items-center justify-between gap-2 mt-auto">
          {showFullDetails && (
            <div className="flex items-center gap-1.5 text-xs text-brand-muted">
              <Users className="w-3.5 h-3.5 text-brand-rose" />
              <span>
                <strong className="text-brand-charcoal font-semibold">{event.spacesLeft}</strong> spaces left
              </span>
            </div>
          )}

          <Link
            href={`/events/${event.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-rose group-hover:text-[#a84464] transition-colors ml-auto py-1 px-2.5 rounded-lg group-hover:bg-brand-blush/20"
          >
            <span>View Event</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
