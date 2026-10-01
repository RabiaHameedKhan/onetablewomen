"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ArrowUpRight, Sparkles, LogOut, LayoutDashboard, CalendarCog, User } from "lucide-react";
import JoinModal from "./JoinModal";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const rawPathname = usePathname();
  const pathname = rawPathname || "";
  const router = useRouter();
  const { isLoggedIn, user, logout } = useAuth();

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Membership", href: "/membership" },
    { label: "How It Works", href: "/#how-it-works" },
  ];

  const isActive = (href) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-brand-cream/90 backdrop-blur-md border-b border-brand-gold/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="group flex flex-col items-start transition-opacity hover:opacity-80"
          >
            <span className="font-serif text-2xl tracking-[0.2em] font-semibold text-brand-charcoal uppercase">
              ONE TABLE
            </span>
            <span className="text-[10px] tracking-[0.25em] text-brand-muted uppercase font-sans -mt-1 group-hover:text-brand-rose transition-colors">
              Women's Collective
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors font-medium relative py-1 ${
                    active 
                      ? "text-brand-rose font-semibold" 
                      : "text-brand-charcoal/80 hover:text-brand-rose"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-brand-rose rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4 lg:gap-5">
            {isLoggedIn ? (
              /* LOGGED IN USER BAR */
              <div className="flex items-center gap-3">
                {/* Admin Quick Switch (demo helper) */}
                <Link
                  href="/admin"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-brand-charcoal/80 hover:text-brand-rose hover:bg-brand-blush/20 border border-brand-gold/30 transition-colors"
                >
                  <CalendarCog className="w-3.5 h-3.5 text-brand-rose" />
                  <span>Planner Admin</span>
                </Link>

                {/* Member Dashboard Link */}
                <Link
                  href="/member"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-brand-white border border-brand-gold/40 text-brand-charcoal hover:border-brand-rose transition-colors shadow-xs"
                >
                  <img
                    src={user?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"}
                    alt={user?.name || "Member"}
                    className="w-6 h-6 rounded-full object-cover border border-brand-rose"
                  />
                  <span className="text-xs font-semibold">{user?.firstName || "Sarah"}</span>
                  <span className="text-[10px] uppercase font-bold text-brand-rose bg-brand-blush/30 px-1.5 py-0.5 rounded">
                    Privileged
                  </span>
                </Link>

                {/* Dashboard Button */}
                <Link
                  href="/member"
                  className="text-xs font-semibold text-brand-charcoal hover:text-brand-rose px-2 py-1.5"
                >
                  Dashboard
                </Link>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center gap-1.5 text-xs text-brand-muted hover:text-brand-rose px-2.5 py-1.5 rounded-lg hover:bg-brand-cream transition-colors"
                  title="Log out"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Log Out</span>
                </button>
              </div>
            ) : (
              /* LOGGED OUT ACTIONS */
              <>
                <Link
                  href="/login"
                  className="text-sm font-medium text-brand-charcoal/90 hover:text-brand-rose transition-colors px-3 py-2 rounded-lg hover:bg-brand-blush/20"
                >
                  Log In
                </Link>

                <button
                  onClick={() => setIsJoinOpen(true)}
                  className="inline-flex items-center gap-2 bg-brand-rose hover:bg-[#b04f6f] text-brand-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98]"
                >
                  <span>Join ONE TABLE</span>
                  <ArrowUpRight className="w-4 h-4 opacity-80" />
                </button>
              </>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 text-brand-charcoal hover:text-brand-rose focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileOpen && (
          <div className="md:hidden bg-brand-cream border-b border-brand-gold/20 px-6 pt-3 pb-8 space-y-4 animate-fade-in shadow-lg">
            
            {/* If logged in mobile indicator */}
            {isLoggedIn && (
              <div className="flex items-center justify-between pb-3 border-b border-brand-gold/20">
                <div className="flex items-center gap-2.5">
                  <img
                    src={user?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"}
                    alt="Member"
                    className="w-8 h-8 rounded-full object-cover border border-brand-rose"
                  />
                  <div>
                    <p className="text-xs font-semibold text-brand-charcoal">{user?.name || "Sarah Jenkins"}</p>
                    <p className="text-[10px] text-brand-rose font-medium">Privileged Member</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileOpen(false);
                  }}
                  className="text-xs text-brand-rose hover:underline flex items-center gap-1 font-semibold"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Log Out</span>
                </button>
              </div>
            )}

            <nav className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-base text-brand-charcoal hover:text-brand-rose font-medium py-2 border-b border-brand-gold/10"
                >
                  {link.label}
                </Link>
              ))}

              {isLoggedIn && (
                <>
                  <Link
                    href="/member"
                    onClick={() => setIsMobileOpen(false)}
                    className="text-base text-brand-rose font-semibold py-2 border-b border-brand-gold/10 flex items-center justify-between"
                  >
                    <span>Member Dashboard</span>
                    <LayoutDashboard className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/admin"
                    onClick={() => setIsMobileOpen(false)}
                    className="text-base text-brand-charcoal font-medium py-2 border-b border-brand-gold/10 flex items-center justify-between"
                  >
                    <span>Event Planner Admin</span>
                    <CalendarCog className="w-4 h-4 text-brand-rose" />
                  </Link>
                </>
              )}
            </nav>

            <div className="pt-4 flex flex-col gap-3">
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileOpen(false);
                  }}
                  className="w-full py-2.5 text-sm font-semibold text-brand-charcoal border border-brand-gold/40 rounded-lg hover:bg-brand-blush/20 transition-colors flex items-center justify-center gap-2"
                >
                  <LogOut className="w-4 h-4 text-brand-rose" />
                  <span>Log Out of Account</span>
                </button>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setIsMobileOpen(false)}
                    className="w-full text-center py-2.5 text-sm font-medium text-brand-charcoal border border-brand-gold/40 rounded-lg hover:bg-brand-blush/20 transition-colors"
                  >
                    Log In
                  </Link>
                  <button
                    onClick={() => {
                      setIsMobileOpen(false);
                      setIsJoinOpen(true);
                    }}
                    className="w-full py-2.5 text-sm font-medium text-brand-white bg-brand-rose hover:bg-[#b04f6f] rounded-lg transition-colors shadow-sm"
                  >
                    Join ONE TABLE
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Global Join Community Modal */}
      <JoinModal isOpen={isJoinOpen} onClose={() => setIsJoinOpen(false)} />
    </>
  );
}
