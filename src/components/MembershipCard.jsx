import { Sparkles, ShieldCheck, QrCode } from "lucide-react";

export default function MembershipCard({ member }) {
  return (
    <div className="relative rounded-2xl bg-gradient-to-br from-brand-white via-brand-cream/80 to-[#f3eae3] border border-brand-gold/40 p-6 sm:p-7 shadow-card overflow-hidden">
      {/* Decorative subtle watermark */}
      <div className="absolute -right-6 -bottom-6 font-serif text-8xl font-bold text-brand-gold/10 select-none pointer-events-none">
        OT
      </div>

      {/* Top Header */}
      <div className="flex items-start justify-between relative z-10 mb-8">
        <div>
          <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-brand-rose">
            Official Pass
          </span>
          <h3 className="font-serif text-2xl font-bold tracking-[0.15em] text-brand-charcoal uppercase mt-0.5">
            ONE TABLE
          </h3>
          <p className="text-xs text-brand-muted tracking-widest uppercase">
            Women's Collective
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-white/90 border border-brand-gold/30 shadow-sm text-xs text-brand-rose font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Active Member</span>
        </div>
      </div>

      {/* Member Details */}
      <div className="relative z-10 space-y-4">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-brand-muted font-medium">
            Member Name
          </span>
          <p className="font-serif text-xl sm:text-2xl font-semibold text-brand-charcoal">
            {member.name}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 border-t border-brand-gold/20 text-xs">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-brand-muted block">
              Status
            </span>
            <span className="font-semibold text-brand-charcoal">{member.status}</span>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-wider text-brand-muted block">
              Member Since
            </span>
            <span className="font-semibold text-brand-charcoal">{member.memberSince}</span>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-wider text-brand-muted block">
              Member ID
            </span>
            <span className="font-mono text-xs font-semibold text-brand-rose">
              {member.memberId || "OT-2026-0842"}
            </span>
          </div>
        </div>
      </div>

      {/* Card Footer Bar */}
      <div className="mt-6 pt-4 border-t border-brand-gold/20 flex items-center justify-between text-[11px] text-brand-muted relative z-10">
        <span className="italic font-serif">"Different stories. One table."</span>
        <span className="tracking-widest uppercase text-[10px] font-semibold text-brand-gold">
          London Collective
        </span>
      </div>
    </div>
  );
}
