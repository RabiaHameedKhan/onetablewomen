"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EVENTS } from "@/data/mockData";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Plus,
  Edit3,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Download,
  Filter,
  Eye,
  ArrowRight,
  X,
  CalendarCog,
  TableProperties,
  ArrowLeft,
  Coffee,
  Check
} from "lucide-react";

export default function AdminPlannerPage() {
  const [eventsList, setEventsList] = useState(EVENTS);
  const [activeTab, setActiveTab] = useState("events"); // 'events' | 'guests' | 'plan'
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [notification, setNotification] = useState("");

  // New Event Form State
  const [newEvent, setNewEvent] = useState({
    name: "",
    category: "Dining",
    date: "12 December 2026",
    time: "7:00 PM",
    location: "Mayfair, London",
    venueAddress: "Mount Street, Mayfair, London W1K 2RQ",
    priceFormatted: "£45",
    price: 45,
    spacesTotal: 16,
    spacesLeft: 16,
    host: "Elena Rossi, Event Planner",
    shortDescription: "An intimate festive candlelit supper club in a private Mayfair salon.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80"
  });

  // Sample guest roster for Sunday Brunch
  const [guestRoster, setGuestRoster] = useState([
    { id: 1, name: "Sarah Jenkins", email: "sarah.jenkins@example.com", dietary: "Vegetarian", notes: "Solo • First time guest", status: "Confirmed", ref: "OT-BRUNCH-8492" },
    { id: 2, name: "Jessica Taylor", email: "jessica.t@example.com", dietary: "No restrictions", notes: "Solo • Returning member", status: "Confirmed", ref: "OT-BRUNCH-8493" },
    { id: 3, name: "Amira Khan", email: "amira.k@example.com", dietary: "Halal / Pescatarian", notes: "Solo • Creative director", status: "Confirmed", ref: "OT-BRUNCH-8494" },
    { id: 4, name: "Hannah Moore", email: "hannah.m@example.com", dietary: "Gluten-Free", notes: "Solo • Celebrating birthday", status: "Confirmed", ref: "OT-BRUNCH-8495" },
  ]);

  const showNotify = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(""), 3500);
  };

  const handleCreateEvent = (e) => {
    e.preventDefault();
    const created = {
      ...newEvent,
      id: "event-" + Date.now(),
      spacesLeft: Number(newEvent.spacesTotal),
    };
    setEventsList([created, ...eventsList]);
    setIsPlanModalOpen(false);
    showNotify(`"${created.name}" published to the live gathering list!`);
  };

  const handleOpenEdit = (evt) => {
    setSelectedEvent({ ...evt });
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    setEventsList(
      eventsList.map((item) =>
        item.id === selectedEvent.id ? selectedEvent : item
      )
    );
    setIsEditModalOpen(false);
    showNotify(`"${selectedEvent.name}" details updated successfully!`);
  };

  const toggleSoldOut = (id) => {
    setEventsList(
      eventsList.map((item) => {
        if (item.id === id) {
          const isCurrentlyZero = item.spacesLeft === 0;
          return {
            ...item,
            spacesLeft: isCurrentlyZero ? 4 : 0,
          };
        }
        return item;
      })
    );
    showNotify("Event availability status updated!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream">
      <Navbar />

      {/* Admin Notice Bar */}
      <div className="bg-[#292426] text-brand-white px-6 py-2.5 border-b border-brand-gold/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-rose animate-ping" />
            <span className="font-semibold text-[#EBC9C9]">Event Planner Operations Dashboard</span>
            <span className="text-brand-white/60 hidden sm:inline">• Replacing Google Forms & Sheets with custom tools</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <Link href="/member" className="text-brand-white/80 hover:text-[#EBC9C9] transition-colors">
              Switch to Member View
            </Link>
            <span className="text-brand-gold">•</span>
            <Link href="/" className="text-brand-white/80 hover:text-[#EBC9C9] transition-colors">
              Public Website
            </Link>
          </div>
        </div>
      </div>

      {/* Main Admin Viewport */}
      <main className="flex-1 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-8">
          
          {/* Header Banner */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 bg-brand-white border border-brand-gold/30 rounded-2xl p-6 sm:p-8 shadow-soft text-left">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBC9C9] text-brand-rose text-[11px] font-bold uppercase tracking-wider">
                <CalendarCog className="w-3.5 h-3.5" />
                <span>Planner Administration</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl text-brand-charcoal font-semibold">
                Event Management & Planning
              </h1>
              <p className="text-brand-muted text-xs sm:text-sm max-w-xl">
                Plan new tables, adjust capacity, update venue logistics, and manage guest seating rosters in one place.
              </p>
            </div>

            {/* Top Action */}
            <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
              <button
                onClick={() => setIsPlanModalOpen(true)}
                className="inline-flex items-center gap-2 bg-brand-rose hover:bg-[#b04f6f] text-brand-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl transition-all shadow-card active:scale-[0.98]"
              >
                <Plus className="w-4 h-4" />
                <span>Plan New Gathering</span>
              </button>
            </div>
          </div>

          {/* Success Notification Alert */}
          {notification && (
            <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-800 text-xs sm:text-sm flex items-center justify-between shadow-xs animate-fade-in text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{notification}</span>
              </div>
              <button onClick={() => setNotification("")} className="text-emerald-700 hover:text-emerald-900">
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Key Planner Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <div className="p-5 bg-brand-white border border-brand-gold/30 rounded-2xl shadow-2xs space-y-1">
              <span className="text-[11px] text-brand-muted uppercase font-semibold">Active Gatherings</span>
              <p className="font-serif text-3xl font-bold text-brand-charcoal">{eventsList.length}</p>
              <span className="text-[10px] text-emerald-700 font-medium">All live on public website</span>
            </div>

            <div className="p-5 bg-brand-white border border-brand-gold/30 rounded-2xl shadow-2xs space-y-1">
              <span className="text-[11px] text-brand-muted uppercase font-semibold">Confirmed Guests</span>
              <p className="font-serif text-3xl font-bold text-brand-rose">51</p>
              <span className="text-[10px] text-brand-muted">Across October & November</span>
            </div>

            <div className="p-5 bg-brand-white border border-brand-gold/30 rounded-2xl shadow-2xs space-y-1">
              <span className="text-[11px] text-brand-muted uppercase font-semibold">Available Seats</span>
              <p className="font-serif text-3xl font-bold text-brand-charcoal">
                {eventsList.reduce((acc, curr) => acc + curr.spacesLeft, 0)}
              </p>
              <span className="text-[10px] text-amber-700 font-medium">Booking open</span>
            </div>

            <div className="p-5 bg-brand-white border border-brand-gold/30 rounded-2xl shadow-2xs space-y-1">
              <span className="text-[11px] text-brand-muted uppercase font-semibold">Table Revenue (Sim.)</span>
              <p className="font-serif text-3xl font-bold text-brand-charcoal">£2,140</p>
              <span className="text-[10px] text-emerald-700 font-medium">100% simulated prototype</span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-brand-gold/20 pb-2">
            <button
              onClick={() => setActiveTab("events")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                activeTab === "events"
                  ? "bg-brand-rose text-brand-white shadow-xs"
                  : "bg-brand-white text-brand-charcoal border border-brand-gold/30 hover:bg-brand-cream"
              }`}
            >
              Manage & Update Events ({eventsList.length})
            </button>
            <button
              onClick={() => setActiveTab("guests")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                activeTab === "guests"
                  ? "bg-brand-rose text-brand-white shadow-xs"
                  : "bg-brand-white text-brand-charcoal border border-brand-gold/30 hover:bg-brand-cream"
              }`}
            >
              Guest Seating Roster & Dietaries
            </button>
          </div>

          {/* TAB 1: MANAGE & UPDATE EVENTS */}
          {activeTab === "events" && (
            <div className="space-y-4 text-left animate-fade-in">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl text-brand-charcoal font-semibold">
                  Scheduled Table Gatherings
                </h3>
                <span className="text-xs text-brand-muted">
                  Click 'Update' to modify spaces, dates, or prices
                </span>
              </div>

              <div className="space-y-3.5">
                {eventsList.map((evt) => {
                  const isSoldOut = evt.spacesLeft === 0;
                  return (
                    <div
                      key={evt.id}
                      className="bg-brand-white border border-brand-gold/30 rounded-2xl p-5 shadow-soft flex flex-col md:flex-row gap-5 items-start md:items-center justify-between hover:border-brand-rose/60 transition-all"
                    >
                      {/* Left: Info */}
                      <div className="flex gap-4 items-start min-w-0 flex-1">
                        <img
                          src={evt.image}
                          alt={evt.name}
                          className="w-20 h-20 rounded-xl object-cover border border-brand-gold/30 shrink-0"
                        />
                        <div className="space-y-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-cream border border-brand-gold/30 text-brand-charcoal">
                              {evt.category}
                            </span>
                            <span
                              className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                                isSoldOut
                                  ? "bg-rose-100 text-rose-800"
                                  : evt.spacesLeft <= 4
                                  ? "bg-amber-100 text-amber-800"
                                  : "bg-emerald-100 text-emerald-800"
                              }`}
                            >
                              {isSoldOut ? "Sold Out" : `${evt.spacesLeft} spaces left`}
                            </span>
                            <span className="text-xs font-bold text-brand-rose">
                              {evt.priceFormatted}
                            </span>
                          </div>

                          <h4 className="font-serif text-lg font-semibold text-brand-charcoal truncate">
                            {evt.name}
                          </h4>

                          <p className="text-xs text-brand-muted flex flex-wrap items-center gap-x-3 gap-y-1">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5 text-brand-rose" />
                              {evt.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                              {evt.location}
                            </span>
                            <span>• Host: {evt.host || "Elena Rossi"}</span>
                          </p>
                        </div>
                      </div>

                      {/* Right: Actions */}
                      <div className="flex flex-wrap items-center gap-2 self-stretch md:self-auto shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-brand-gold/20">
                        <button
                          onClick={() => toggleSoldOut(evt.id)}
                          className={`px-3 py-2 text-xs font-semibold rounded-xl border transition-colors ${
                            isSoldOut
                              ? "border-emerald-300 text-emerald-700 bg-emerald-50 hover:bg-emerald-100"
                              : "border-amber-300 text-amber-700 bg-amber-50 hover:bg-amber-100"
                          }`}
                        >
                          {isSoldOut ? "Reopen Seats" : "Mark Sold Out"}
                        </button>

                        <button
                          onClick={() => handleOpenEdit(evt)}
                          className="px-3.5 py-2 text-xs font-semibold bg-brand-cream border border-brand-gold/40 text-brand-charcoal hover:border-brand-rose hover:text-brand-rose rounded-xl transition-colors flex items-center gap-1.5"
                        >
                          <Edit3 className="w-3.5 h-3.5 text-brand-rose" />
                          <span>Update Event</span>
                        </button>

                        <Link
                          href={`/events/${evt.id}`}
                          className="p-2 text-brand-muted hover:text-brand-charcoal hover:bg-brand-cream rounded-xl transition-colors"
                          title="View public live event page"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: GUEST SEATING ROSTER & DIETARY (Replaces Google Sheets) */}
          {activeTab === "guests" && (
            <div className="space-y-5 text-left animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-brand-white p-5 rounded-2xl border border-brand-gold/30">
                <div>
                  <h3 className="font-serif text-2xl text-brand-charcoal font-semibold">
                    Guest List: Sunday Brunch & New Connections
                  </h3>
                  <p className="text-xs text-brand-muted">
                    18 October 2026 • St Martins Lane Hotel, Covent Garden • Host: Camilla Wright
                  </p>
                </div>

                <button
                  onClick={() => alert("Simulated export: guest_roster_18oct.csv downloaded.")}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-cream border border-brand-gold/40 rounded-xl text-xs font-semibold text-brand-charcoal hover:bg-brand-blush/30 transition-colors self-start sm:self-auto"
                >
                  <Download className="w-3.5 h-3.5 text-brand-rose" />
                  <span>Export Roster CSV</span>
                </button>
              </div>

              {/* Roster Table */}
              <div className="bg-brand-white border border-brand-gold/30 rounded-2xl overflow-hidden shadow-soft">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-brand-cream/80 border-b border-brand-gold/20 text-brand-charcoal uppercase font-bold tracking-wider text-[10px]">
                      <tr>
                        <th className="py-3 px-4">Guest Name</th>
                        <th className="py-3 px-4">Email</th>
                        <th className="py-3 px-4">Dietary Preference</th>
                        <th className="py-3 px-4">Host Seating Notes</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4">Ref Code</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-gold/15 text-brand-charcoal">
                      {guestRoster.map((guest) => (
                        <tr key={guest.id} className="hover:bg-brand-cream/40 transition-colors">
                          <td className="py-3.5 px-4 font-semibold text-sm">
                            {guest.name}
                          </td>
                          <td className="py-3.5 px-4 text-brand-muted">
                            {guest.email}
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="px-2.5 py-1 rounded-full bg-[#EBC9C9]/50 text-brand-charcoal font-medium text-[11px] border border-brand-gold/20">
                              {guest.dietary}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-brand-charcoal/90">
                            {guest.notes}
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                              <Check className="w-3 h-3" />
                              <span>{guest.status}</span>
                            </span>
                          </td>
                          <td className="py-3.5 px-4 font-mono text-[11px] text-brand-muted">
                            {guest.ref}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-brand-cream/40 border-t border-brand-gold/20 text-[11px] text-brand-muted flex items-center justify-between">
                  <span>Showing 4 of 12 confirmed guests. Real-time updates automatically sync when guests reserve.</span>
                  <span className="font-semibold text-brand-rose">Replaces manual Google Sheet tracking</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* MODAL 1: PLAN NEW GATHERING */}
      {isPlanModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-charcoal/60 backdrop-blur-sm animate-fade-in text-left">
          <div className="bg-brand-white border border-brand-gold/40 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-modal relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsPlanModalOpen(false)}
              className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-brand-cream text-brand-muted hover:text-brand-charcoal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1 mb-6">
              <span className="text-[11px] uppercase font-bold tracking-widest text-brand-rose">
                Planner Module
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-brand-charcoal font-semibold">
                Plan New Table Gathering
              </h3>
              <p className="text-xs text-brand-muted">
                Create and publish a new event directly to the live ONE TABLE website.
              </p>
            </div>

            <form onSubmit={handleCreateEvent} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1">
                  Event Title
                </label>
                <input
                  type="text"
                  required
                  value={newEvent.name}
                  onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
                  placeholder="e.g. Saturday Salon & Tea"
                  className="w-full px-3.5 py-2.5 bg-brand-cream/50 border border-brand-gold/40 rounded-xl text-brand-charcoal text-sm focus:outline-none focus:border-brand-rose"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1">
                    Category
                  </label>
                  <select
                    value={newEvent.category}
                    onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-brand-cream/50 border border-brand-gold/40 rounded-xl text-brand-charcoal text-sm focus:outline-none focus:border-brand-rose"
                  >
                    <option>Dining</option>
                    <option>Coffee</option>
                    <option>Culture</option>
                    <option>Wellness</option>
                    <option>Social</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1">
                    Price per Place
                  </label>
                  <input
                    type="text"
                    required
                    value={newEvent.priceFormatted}
                    onChange={(e) => setNewEvent({ ...newEvent, priceFormatted: e.target.value })}
                    placeholder="e.g. £38"
                    className="w-full px-3.5 py-2.5 bg-brand-cream/50 border border-brand-gold/40 rounded-xl text-brand-charcoal text-sm focus:outline-none focus:border-brand-rose"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1">
                    Date
                  </label>
                  <input
                    type="text"
                    required
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                    placeholder="e.g. 12 December 2026"
                    className="w-full px-3.5 py-2.5 bg-brand-cream/50 border border-brand-gold/40 rounded-xl text-brand-charcoal text-sm focus:outline-none focus:border-brand-rose"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1">
                    Time
                  </label>
                  <input
                    type="text"
                    required
                    value={newEvent.time}
                    onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                    placeholder="e.g. 7:00 PM"
                    className="w-full px-3.5 py-2.5 bg-brand-cream/50 border border-brand-gold/40 rounded-xl text-brand-charcoal text-sm focus:outline-none focus:border-brand-rose"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1">
                    Location Area
                  </label>
                  <input
                    type="text"
                    required
                    value={newEvent.location}
                    onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                    placeholder="e.g. Soho, London"
                    className="w-full px-3.5 py-2.5 bg-brand-cream/50 border border-brand-gold/40 rounded-xl text-brand-charcoal text-sm focus:outline-none focus:border-brand-rose"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1">
                    Max Table Capacity
                  </label>
                  <input
                    type="number"
                    required
                    value={newEvent.spacesTotal}
                    onChange={(e) => setNewEvent({ ...newEvent, spacesTotal: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-brand-cream/50 border border-brand-gold/40 rounded-xl text-brand-charcoal text-sm focus:outline-none focus:border-brand-rose"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1">
                  Full Venue Address
                </label>
                <input
                  type="text"
                  required
                  value={newEvent.venueAddress}
                  onChange={(e) => setNewEvent({ ...newEvent, venueAddress: e.target.value })}
                  placeholder="e.g. Dean Street, Soho, London W1D 3SG"
                  className="w-full px-3.5 py-2.5 bg-brand-cream/50 border border-brand-gold/40 rounded-xl text-brand-charcoal text-sm focus:outline-none focus:border-brand-rose"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1">
                  Short Description
                </label>
                <textarea
                  rows={2}
                  value={newEvent.shortDescription}
                  onChange={(e) => setNewEvent({ ...newEvent, shortDescription: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-brand-cream/50 border border-brand-gold/40 rounded-xl text-brand-charcoal text-sm focus:outline-none focus:border-brand-rose"
                />
              </div>

              <div className="pt-3 flex gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-brand-rose hover:bg-[#b04f6f] text-brand-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-sm"
                >
                  Publish Gathering to Website
                </button>
                <button
                  type="button"
                  onClick={() => setIsPlanModalOpen(false)}
                  className="px-5 py-3 border border-brand-gold/40 text-brand-charcoal text-xs font-semibold rounded-xl hover:bg-brand-cream"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: UPDATE EXISTING EVENT */}
      {isEditModalOpen && selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-charcoal/60 backdrop-blur-sm animate-fade-in text-left">
          <div className="bg-brand-white border border-brand-gold/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-modal relative">
            <button
              onClick={() => setIsEditModalOpen(false)}
              className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-brand-cream text-brand-muted hover:text-brand-charcoal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1 mb-5">
              <span className="text-[11px] uppercase font-bold tracking-widest text-brand-rose">
                Quick Editor
              </span>
              <h3 className="font-serif text-2xl text-brand-charcoal font-semibold">
                Update Gathering Details
              </h3>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1">
                  Event Title
                </label>
                <input
                  type="text"
                  required
                  value={selectedEvent.name}
                  onChange={(e) => setSelectedEvent({ ...selectedEvent, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-brand-cream/50 border border-brand-gold/40 rounded-xl text-brand-charcoal text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1">
                    Available Spaces Left
                  </label>
                  <input
                    type="number"
                    required
                    value={selectedEvent.spacesLeft}
                    onChange={(e) => setSelectedEvent({ ...selectedEvent, spacesLeft: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 bg-brand-cream/50 border border-brand-gold/40 rounded-xl text-brand-charcoal text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1">
                    Price
                  </label>
                  <input
                    type="text"
                    required
                    value={selectedEvent.priceFormatted}
                    onChange={(e) => setSelectedEvent({ ...selectedEvent, priceFormatted: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-brand-cream/50 border border-brand-gold/40 rounded-xl text-brand-charcoal text-sm"
                  />
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-brand-rose hover:bg-[#b04f6f] text-brand-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors"
                >
                  Save Updates
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-5 py-3 border border-brand-gold/40 text-brand-charcoal text-xs font-semibold rounded-xl"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
