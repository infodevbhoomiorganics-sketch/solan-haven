import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { CALL_LINK, WHATSAPP_LINK } from "@/lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Rooms" },
  { to: "/cafe", label: "Cafe & Dining" },
  { to: "/about", label: "About" },
  { to: "/amenities", label: "Amenities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/location", label: "Location" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const transparentAllowed = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || !transparentAllowed || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-background/92 border-b border-border backdrop-blur-xl shadow-[0_2px_20px_-12px_rgba(0,0,0,0.45)]"
          : "bg-transparent"
      }`}
    >
      <nav className="shell flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" className="flex items-center gap-3">
          <span
            className={`grid h-10 w-10 shrink-0 place-items-center rounded-full font-display text-lg font-semibold transition-colors ${
              solid ? "bg-primary text-primary-foreground" : "glass-panel text-white"
            }`}
          >
            H
          </span>
          <span className="leading-tight">
            <span
              className={`block font-display text-base font-semibold md:text-lg ${
                solid ? "text-foreground" : "text-white"
              }`}
            >
              Havemore
            </span>
            <span
              className={`block text-[0.6rem] font-semibold tracking-[0.24em] uppercase ${
                solid ? "text-muted-foreground" : "text-white/75"
              }`}
            >
              Guest House &amp; Cafe
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                solid
                  ? "text-muted-foreground hover:text-primary"
                  : "text-white/85 hover:text-white"
              }`}
              activeProps={{
                className: solid ? "!text-primary font-semibold" : "!text-white font-semibold",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={CALL_LINK}
            aria-label="Call Havemore Guest House"
            className={`hidden h-10 w-10 place-items-center rounded-full border transition-colors sm:grid ${
              solid
                ? "border-border text-foreground hover:bg-secondary"
                : "border-white/30 text-white hover:bg-white/15"
            }`}
          >
            <Phone className="h-4 w-4" />
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] sm:inline-flex"
          >
            Book Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className={`grid h-10 w-10 place-items-center rounded-full border transition-colors lg:hidden ${
              solid ? "border-border text-foreground" : "border-white/30 text-white"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="shell grid gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                activeProps={{ className: "!text-primary bg-secondary" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
