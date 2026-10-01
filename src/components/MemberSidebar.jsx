import Link from "next/link";
import { LayoutDashboard, CalendarCheck, Compass, User, LogOut, ArrowLeft } from "lucide-react";

export default function MemberSidebar({ activeTab, setActiveTab, member }) {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "my-events", label: "My Events", icon: CalendarCheck, badge: member.bookedEvents.length },
    { id: "explore", label: "Explore Events", icon: Compass, isLink: true, href: "/events" },
    { id: "profile", label: "Profile", icon: User },
  ];

  return (
    <aside className="w-full lg:w-64 bg-brand-white border border-brand-gold/30 rounded-2xl p-5 shadow-soft flex flex-col justify-between shrink-0">
      <div className="space-y-6">
        
        {/* User Mini Profile */}
        <div className="flex items-center gap-3.5 pb-5 border-b border-brand-gold/20">
          <img
            src={member.avatar}
            alt={member.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-brand-rose"
          />
          <div className="min-w-0">
            <h4 className="font-serif font-semibold text-brand-charcoal text-base truncate">
              {member.name}
            </h4>
            <p className="text-xs text-brand-rose font-medium">
              {member.tier}
            </p>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex lg:flex-col gap-1.5 overflow-x-auto pb-2 lg:pb-0">
          {navItems.map((item) => {
            const Icon = item.icon;

            if (item.isLink) {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium text-brand-charcoal hover:bg-brand-cream/80 hover:text-brand-rose transition-colors whitespace-nowrap"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-brand-muted" />
                    <span>{item.label}</span>
                  </div>
                  <span className="text-[10px] text-brand-muted font-normal uppercase tracking-wider hidden lg:inline">
                    Directory ↗
                  </span>
                </Link>
              );
            }

            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "bg-brand-cream text-brand-rose font-semibold border border-brand-gold/30 shadow-xs"
                    : "text-brand-charcoal/80 hover:bg-brand-cream/50 hover:text-brand-charcoal"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? "text-brand-rose" : "text-brand-muted"}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge !== undefined && (
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                    isActive ? "bg-brand-rose text-brand-white" : "bg-brand-cream text-brand-muted"
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

      </div>

      {/* Bottom Actions */}
      <div className="pt-6 border-t border-brand-gold/20 mt-6 lg:mt-12 space-y-2">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-xs text-brand-muted hover:text-brand-charcoal px-3 py-2 rounded-lg hover:bg-brand-cream transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Main Website</span>
        </Link>
        <Link
          href="/login"
          className="flex items-center gap-2.5 text-xs text-brand-rose hover:text-[#a84464] px-3 py-2 rounded-lg hover:bg-brand-cream transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Exit Member Preview</span>
        </Link>
      </div>
    </aside>
  );
}
