import { MessageCircle, Phone, MapPin } from "lucide-react";
import { CALL_LINK, DIRECTIONS_LINK, WHATSAPP_LINK } from "@/lib/site";

export function FloatingActions() {
  return (
    <>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed right-4 bottom-24 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-[var(--shadow-lift)] transition-transform duration-300 hover:scale-110 md:bottom-8"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-whatsapp/40" />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-xs font-semibold text-primary"
        >
          <MessageCircle className="h-5 w-5" />
          Book Now
        </a>
        <a
          href={CALL_LINK}
          className="flex flex-col items-center gap-1 border-x border-border py-3 text-xs font-semibold text-foreground"
        >
          <Phone className="h-5 w-5" />
          Call
        </a>
        <a
          href={DIRECTIONS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-xs font-semibold text-foreground"
        >
          <MapPin className="h-5 w-5" />
          Directions
        </a>
      </div>
    </>
  );
}
