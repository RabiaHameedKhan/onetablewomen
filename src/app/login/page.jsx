"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JoinModal from "@/components/JoinModal";
import { Sparkles, ArrowRight, ShieldCheck, Lock, Mail, UserCheck, CalendarCog } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("sarah.jenkins@example.com");
  const [password, setPassword] = useState("password123");
  const [isLoading, setIsLoading] = useState(false);
  const [isJoinOpen, setIsJoinOpen] = useState(false);

  const handleMemberLogin = (e) => {
    if (e) e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      login({
        name: "Sarah Jenkins",
        firstName: "Sarah",
        email: email || "sarah.jenkins@example.com",
        role: "member",
        tier: "Founding Privileged Member",
        memberId: "OT-2026-0842",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      });
      router.push("/member");
    }, 300);
  };

  const handleAdminLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      login({
        name: "Elena Rossi",
        firstName: "Elena",
        email: "elena@onetablewomen.co.uk",
        role: "admin",
        tier: "Head of Event Planning",
        memberId: "OT-ADMIN-001",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      });
      router.push("/admin");
    }, 300);
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-12 sm:py-16 px-6">
        <div className="w-full max-w-md bg-brand-white border border-brand-gold/30 rounded-2xl p-7 sm:p-9 shadow-card relative overflow-hidden text-left">
          
          {/* Decorative accent top bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-blush via-brand-rose to-brand-gold" />

          {/* Heading */}
          <div className="space-y-2 mb-6 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cream border border-brand-gold/30 text-brand-rose text-[11px] font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Authentication</span>
            </div>
            
            <h1 className="font-serif text-3xl text-brand-charcoal font-semibold">
              Welcome back to ONE TABLE
            </h1>

            <p className="text-brand-muted text-xs sm:text-sm">
              Sign in to unlock privileged member benefits or manage gatherings.
            </p>
          </div>

          {/* Quick Demo Selector for Client */}
          <div className="mb-6 p-3.5 bg-brand-cream/80 rounded-xl border border-brand-gold/30 space-y-2.5">
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand-rose block">
              Quick Client Demo Logins
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleMemberLogin}
                className="p-2.5 bg-brand-white border border-brand-gold/40 hover:border-brand-rose rounded-lg text-left transition-colors shadow-2xs group"
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-brand-charcoal group-hover:text-brand-rose">
                  <UserCheck className="w-3.5 h-3.5 text-brand-rose" />
                  <span>Member</span>
                </div>
                <p className="text-[10px] text-brand-muted truncate">Sarah (Privileged)</p>
              </button>

              <button
                type="button"
                onClick={handleAdminLogin}
                className="p-2.5 bg-brand-white border border-brand-gold/40 hover:border-brand-rose rounded-lg text-left transition-colors shadow-2xs group"
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-brand-charcoal group-hover:text-brand-rose">
                  <CalendarCog className="w-3.5 h-3.5 text-brand-rose" />
                  <span>Event Planner</span>
                </div>
                <p className="text-[10px] text-brand-muted truncate">Admin Portal</p>
              </button>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleMemberLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1.5">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-brand-cream/40 border border-brand-gold/40 rounded-xl text-brand-charcoal text-sm focus:outline-none focus:border-brand-rose transition-colors"
                />
                <Mail className="w-4 h-4 text-brand-muted absolute left-3.5 top-3.5" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => alert("Password reset link simulated.")}
                  className="text-xs text-brand-rose hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 bg-brand-cream/40 border border-brand-gold/40 rounded-xl text-brand-charcoal text-sm focus:outline-none focus:border-brand-rose transition-colors"
                />
                <Lock className="w-4 h-4 text-brand-muted absolute left-3.5 top-3.5" />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-brand-rose hover:bg-[#b04f6f] disabled:opacity-70 text-brand-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-sm flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <span>Accessing Account...</span>
                ) : (
                  <>
                    <span>Log In</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* New to ONE TABLE Link */}
          <div className="mt-7 pt-5 border-t border-brand-gold/20 text-center">
            <p className="text-xs text-brand-muted">
              New to ONE TABLE?{" "}
              <button
                type="button"
                onClick={() => setIsJoinOpen(true)}
                className="font-semibold text-brand-rose hover:underline inline-flex items-center gap-1"
              >
                <span>Join the community</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </p>
          </div>

        </div>
      </main>

      <Footer />

      <JoinModal isOpen={isJoinOpen} onClose={() => setIsJoinOpen(false)} />
    </div>
  );
}
