import { Link } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle, Star } from "lucide-react";
import {
  ADDRESS_LINES,
  BUSINESS_NAME,
  CALL_LINK,
  PHONE_DISPLAY,
  RATING,
  REVIEW_COUNT,
  WHATSAPP_LINK,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-bark text-bark-foreground">
      <div className="shell grid gap-12 py-16 md:grid-cols-3 md:py-20">
        <div>
          <h2 className="font-display text-2xl">{BUSINESS_NAME}</h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-bark-foreground/70">
            A cozy guest house and multi-cuisine cafe on Mall Road, Solan — comfortable rooms,
            mountain air and warm food, all in one place.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm">
            <Star className="h-4 w-4 fill-gold text-gold" />
            {RATING}/5 · {REVIEW_COUNT}+ reviews
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-bark-foreground/60">
            Explore
          </h3>
          <ul className="mt-5 grid grid-cols-2 gap-y-3 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/rooms", label: "Rooms" },
              { to: "/cafe", label: "Cafe & Dining" },
              { to: "/about", label: "About" },
              { to: "/amenities", label: "Amenities" },
              { to: "/gallery", label: "Gallery" },
              { to: "/location", label: "Location" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-bark-foreground/75 transition-colors hover:text-bark-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-bark-foreground/60">
            Reach us
          </h3>
          <address className="mt-5 space-y-4 text-sm not-italic text-bark-foreground/80">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                {ADDRESS_LINES.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </p>
            <p className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={CALL_LINK} className="hover:text-bark-foreground">
                {PHONE_DISPLAY}
              </a>
            </p>
            <p className="flex gap-3">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bark-foreground"
              >
                WhatsApp booking &amp; enquiries
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-bark-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </p>
          <p>Guest house &amp; cafe near Mall Road, Solan, Himachal Pradesh.</p>
        </div>
      </div>
    </footer>
  );
}
