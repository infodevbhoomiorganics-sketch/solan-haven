import { MessageCircle, Phone, MapPin, CalendarCheck } from "lucide-react";
import { CALL_LINK, DIRECTIONS_LINK, WHATSAPP_LINK } from "@/lib/site";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0";

export function WhatsAppButton({
  label = "Enquire on WhatsApp",
  variant = "primary",
}: {
  label?: string;
  variant?: "primary" | "green" | "outline" | "light";
}) {
  const styles = {
    primary: "bg-primary text-primary-foreground shadow-[var(--shadow-card)] hover:shadow-lg",
    green: "bg-whatsapp text-white shadow-[var(--shadow-card)]",
    outline: "border border-border bg-card text-foreground hover:bg-secondary",
    light: "glass-panel text-white hover:bg-white/20",
  }[variant];
  return (
    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={`${base} ${styles}`}>
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  );
}

export function HeroCtas() {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} bg-primary text-primary-foreground shadow-[var(--shadow-lift)]`}
      >
        <CalendarCheck className="h-4 w-4" />
        Book Your Stay
      </a>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} bg-whatsapp text-white`}
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp Us
      </a>
      <a href={CALL_LINK} className={`${base} glass-panel text-white`}>
        <Phone className="h-4 w-4" />
        Call Now
      </a>
      <a
        href={DIRECTIONS_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} glass-panel text-white`}
      >
        <MapPin className="h-4 w-4" />
        Get Directions
      </a>
    </div>
  );
}

export function ContactCtas({ light = false }: { light?: boolean }) {
  const ghost = light
    ? "glass-panel text-white"
    : "border border-border bg-card text-foreground hover:bg-secondary";
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={DIRECTIONS_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${ghost}`}
      >
        <MapPin className="h-4 w-4" />
        Get Directions
      </a>
      <a href={CALL_LINK} className={`${base} ${ghost}`}>
        <Phone className="h-4 w-4" />
        Call Now
      </a>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} bg-whatsapp text-white`}
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp Booking
      </a>
    </div>
  );
}
