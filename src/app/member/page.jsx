"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MemberSidebar from "@/components/MemberSidebar";
import MembershipCard from "@/components/MembershipCard";
import EventCard from "@/components/EventCard";
import { DEMO_MEMBER, EVENTS } from "@/data/mockData";
import { useAuth } from "@/context/AuthContext";
import {
  Calendar,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lock,
  Crown,
  Key,
  MessageCircle,
  Wine,
  Download,
  LogOut,
  ChevronRight,
  ShieldCheck,
  Star
} from "lucide-react";

export default function MemberDashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { isLoggedIn, user, logout } = useAuth();
  const router = useRouter();

  // Use authenticated user or fallback to DEMO_MEMBER
  const member = DEMO_MEMBER;

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  // Privileged features unlocked for members only
  const privilegedFeatures = [
    {
      title: "48-Hour Early Table Access",
      desc: "Reserve seats before they are released to the public list.",
      icon: Clock,
      status: "Active",
      badge: "Priority"
    },
    {
      title: "Secret Supper Club Invitations",
      desc: "Monthly candlelit banquets hosted in private chef lofts and secret London cellars.",
      icon: Crown,
      status: "Exclusive",
      badge: "Members Only"
    },
    {
      title: "Private WhatsApp Circle",
      desc: "Connect directly with 500+ inspiring women across London for spontaneous coffee & walks.",
      icon: MessageCircle,
      status: "Connected",
      badge: "Lounge"
    },
    {
      title: "Complimentary Welcome Pairings",
      desc: "Botanical cocktails or sommelier-curated natural wine included at every table.",
      icon: Wine,
      status: "Included",
      badge: "VIP Perk"
    }
  ];

  // 3 suggested events to discover
  const suggestedEvents = EVENTS.filter(
    (e) => !member.bookedEvents.some((b) => b.id === e.id)
  ).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream">
      <Navbar />

      {/* Privileged Top Bar */}
      <div className="bg-brand-charcoal text-brand-white px-6 py-2.5 border-b border-brand-gold/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-[#EBC9C9]">Privileged Member Portal</span>
            <span className="text-brand-white/60 hidden sm:inline">• Logged in as: {user?.name || member.name}</span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/admin"
              className="text-[#EBC9C9] hover:underline flex items-center gap-1"
            >
              <span>Switch to Event Planner View</span>
              <ChevronRight className="w-3 h-3" />
            </Link>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 text-xs text-brand-white/80 hover:text-brand-rose transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>

      <main className="flex-1 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Sidebar Navigation */}
            <MemberSidebar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              member={member}
            />

            {/* Main Content Area */}
            <div className="flex-1 w-full space-y-8">
              
              {/* TAB 1: DASHBOARD */}
              {activeTab === "dashboard" && (
                <div className="space-y-8 animate-fade-in text-left">
                  
                  {/* Privileged Welcome Banner */}
                  <div className="bg-gradient-to-r from-brand-white via-brand-white to-[#fbf2ed] p-6 sm:p-8 rounded-2xl border border-brand-gold/40 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBC9C9] text-brand-rose text-[11px] font-bold uppercase tracking-wider">
                        <Crown className="w-3.5 h-3.5" />
                        <span>Privileged Member • Tier 1</span>
                      </div>
                      <h1 className="font-serif text-3xl sm:text-4xl text-brand-charcoal font-semibold">
                        Welcome back, {member.firstName}.
                      </h1>
                      <p className="text-brand-muted text-xs sm:text-sm">
                        You have unlocked full early reservations, private supper clubs, and community circles.
                      </p>
                    </div>

                    <div className="flex items-center gap-2.5 self-start sm:self-auto shrink-0">
                      <button
                        onClick={handleLogout}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-brand-gold/40 text-brand-charcoal hover:text-brand-rose hover:bg-brand-cream text-xs font-semibold rounded-xl transition-colors"
                      >
                        <LogOut className="w-3.5 h-3.5 text-brand-rose" />
                        <span>Log Out</span>
                      </button>

                      <Link
                        href="/events"
                        className="inline-flex items-center gap-1.5 bg-brand-rose hover:bg-[#b04f6f] text-brand-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-sm"
                      >
                        <span>Book Early Seats</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* 1. PRIVILEGED MEMBER PERKS (MEMBER-ONLY ACCESS) */}
                  <section className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-[11px] font-bold text-brand-rose tracking-wider uppercase">
                          Privileged Features Only
                        </span>
                        <h2 className="font-serif text-2xl text-brand-charcoal font-semibold">
                          Your Exclusive Member Privileges
                        </h2>
                      </div>
                      <span className="text-xs text-brand-muted hidden sm:inline">
                        Included with Founding Status
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {privilegedFeatures.map((perk, i) => {
                        const Icon = perk.icon;
                        return (
                          <div
                            key={i}
                            className="bg-brand-white border border-brand-gold/30 rounded-2xl p-5 shadow-xs space-y-3 hover:border-brand-rose transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <div className="w-10 h-10 rounded-xl bg-[#EBC9C9]/50 flex items-center justify-center text-brand-rose">
                                <Icon className="w-5 h-5" />
                              </div>
                              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                                {perk.badge}
                              </span>
                            </div>
                            <div>
                              <h3 className="font-serif font-semibold text-brand-charcoal text-base">
                                {perk.title}
                              </h3>
                              <p className="text-xs text-brand-muted leading-relaxed mt-1">
                                {perk.desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>

                  {/* 2. UPCOMING CONFIRMED EVENTS */}
                  <section className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h2 className="font-serif text-2xl text-brand-charcoal font-semibold">
                          My Reserved Gatherings
                        </h2>
                        <p className="text-xs text-brand-muted">
                          Your upcoming London tables
                        </p>
                      </div>

                      <button
                        onClick={() => setActiveTab("my-events")}
                        className="text-xs font-semibold text-brand-rose hover:underline"
                      >
                        Manage reservations →
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {member.bookedEvents.map((booking) => (
                        <div
                          key={booking.id}
                          className="bg-brand-white border border-brand-gold/30 rounded-2xl p-5 shadow-soft space-y-4 hover:shadow-card transition-shadow"
                        >
                          <div className="flex gap-4 items-start">
                            <img
                              src={booking.image}
                              alt={booking.name}
                              className="w-20 h-20 rounded-xl object-cover border border-brand-gold/30 shrink-0"
                            />
                            <div className="space-y-1 min-w-0 flex-1">
                              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                <CheckCircle2 className="w-3 h-3" />
                                <span>{booking.status}</span>
                              </span>
                              <h3 className="font-serif font-semibold text-brand-charcoal text-base truncate">
                                {booking.name}
                              </h3>
                              <p className="text-xs text-brand-muted flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5 text-brand-rose" />
                                <span>{booking.date}</span>
                                <span>• {booking.time}</span>
                              </p>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-brand-gold/20 flex items-center justify-between text-xs text-brand-muted">
                            <span className="font-mono text-[11px]">Ref: {booking.bookingRef}</span>
                            <Link
                              href={`/events/${booking.id}`}
                              className="font-semibold text-brand-rose hover:text-[#a84464] inline-flex items-center gap-1"
                            >
                              <span>View details</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 3. DIGITAL MEMBERSHIP CARD */}
                  <section className="space-y-4">
                    <div className="space-y-0.5">
                      <h2 className="font-serif text-2xl text-brand-charcoal font-semibold">
                        My Official Pass
                      </h2>
                      <p className="text-xs text-brand-muted">
                        Verified Privileged Membership ID
                      </p>
                    </div>

                    <div className="max-w-xl">
                      <MembershipCard member={member} />
                    </div>
                  </section>

                  {/* 4. DISCOVER MORE TABLES */}
                  <section className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h2 className="font-serif text-2xl text-brand-charcoal font-semibold">
                          Recommended Gatherings
                        </h2>
                        <p className="text-xs text-brand-muted">
                          Tables curated for your interests
                        </p>
                      </div>

                      <Link
                        href="/events"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-brand-rose hover:text-[#a84464]"
                      >
                        <span>Explore All</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {suggestedEvents.map((event) => (
                        <EventCard key={event.id} event={event} showFullDetails={true} />
                      ))}
                    </div>
                  </section>

                </div>
              )}

              {/* TAB 2: MY EVENTS */}
              {activeTab === "my-events" && (
                <div className="space-y-6 animate-fade-in text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="font-serif text-3xl text-brand-charcoal font-semibold">
                        My Booked Gatherings
                      </h1>
                      <p className="text-brand-muted text-sm">
                        Confirmed reservations and digital entry passes.
                      </p>
                    </div>

                    <button
                      onClick={handleLogout}
                      className="inline-flex items-center gap-1.5 px-3 py-2 border border-brand-gold/40 text-xs font-semibold text-brand-rose rounded-xl hover:bg-brand-cream transition-colors"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Log Out</span>
                    </button>
                  </div>

                  <div className="space-y-4">
                    {member.bookedEvents.map((booking) => (
                      <div
                        key={booking.id}
                        className="bg-brand-white border border-brand-gold/30 rounded-2xl p-6 shadow-soft flex flex-col md:flex-row gap-6 items-start md:items-center justify-between"
                      >
                        <div className="flex gap-4 items-start">
                          <img
                            src={booking.image}
                            alt={booking.name}
                            className="w-24 h-24 rounded-xl object-cover border border-brand-gold/30 shrink-0"
                          />
                          <div className="space-y-1.5">
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                              <CheckCircle2 className="w-3 h-3" />
                              <span>{booking.status}</span>
                            </span>
                            <h3 className="font-serif text-xl font-semibold text-brand-charcoal">
                              {booking.name}
                            </h3>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-brand-muted">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5 text-brand-rose" />
                                {booking.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5 text-brand-rose" />
                                {booking.time}
                              </span>
                            </div>
                            <p className="text-xs font-mono text-brand-muted">
                              Pass Code: <span className="font-semibold text-brand-charcoal">{booking.bookingRef}</span>
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2.5 w-full md:w-auto shrink-0">
                          <Link
                            href={`/events/${booking.id}`}
                            className="text-center px-4 py-2 bg-brand-cream border border-brand-gold/40 text-brand-charcoal hover:bg-brand-blush/20 text-xs font-semibold rounded-xl transition-colors"
                          >
                            View Table
                          </Link>
                          <button
                            onClick={() => alert(`Simulated ticket pass download for ${booking.name}`)}
                            className="text-center px-4 py-2 bg-brand-rose text-brand-white hover:bg-[#b04f6f] text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>Download Pass</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: PROFILE */}
              {activeTab === "profile" && (
                <div className="space-y-6 animate-fade-in text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="font-serif text-3xl text-brand-charcoal font-semibold">
                        Member Profile & Preferences
                      </h1>
                      <p className="text-brand-muted text-sm">
                        Your dietary requirements, connection preferences, and membership details.
                      </p>
                    </div>

                    <button
                      onClick={handleLogout}
                      className="inline-flex items-center gap-1.5 px-3 py-2 border border-brand-gold/40 text-xs font-semibold text-brand-rose rounded-xl hover:bg-brand-cream transition-colors"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Log Out</span>
                    </button>
                  </div>

                  <div className="bg-brand-white border border-brand-gold/30 rounded-2xl p-6 sm:p-8 shadow-soft space-y-6">
                    <div className="flex items-center gap-5 pb-6 border-b border-brand-gold/20">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-brand-rose"
                      />
                      <div>
                        <h3 className="font-serif text-2xl font-semibold text-brand-charcoal">
                          {member.name}
                        </h3>
                        <p className="text-xs text-brand-muted">
                          {member.email} • {member.city}
                        </p>
                        <span className="inline-block mt-1 text-[11px] px-2.5 py-0.5 rounded-full bg-[#EBC9C9] text-brand-rose font-bold border border-brand-gold/20">
                          {member.tier}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1">
                          About Me
                        </h4>
                        <p className="text-sm text-brand-muted leading-relaxed">
                          {member.bio}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-2">
                            Interests & Passions
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {member.interests.map((interest, idx) => (
                              <span
                                key={idx}
                                className="px-2.5 py-1 bg-brand-cream border border-brand-gold/30 rounded-lg text-xs text-brand-charcoal"
                              >
                                {interest}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-2">
                            Dietary & Seating Preferences
                          </h4>
                          <p className="text-sm text-brand-muted bg-brand-cream/60 p-3 rounded-xl border border-brand-gold/20">
                            {member.dietary}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-brand-gold/20 flex justify-end">
                      <button
                        onClick={() => alert("Profile updates simulated in client prototype.")}
                        className="px-5 py-2.5 bg-brand-rose text-brand-white rounded-xl text-xs font-semibold hover:bg-[#b04f6f] transition-colors"
                      >
                        Save Preferences
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
