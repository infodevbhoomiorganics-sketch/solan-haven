import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  MapPin,
  BedDouble,
  Mountain,
  UtensilsCrossed,
  Soup,
  Coffee,
  Star,
  ArrowRight,
} from "lucide-react";

import balcony from "@/assets/balcony-view.png";
import roomDeluxe from "@/assets/room-deluxe.png";
import snowView from "@/assets/snow-view.png";
import cafeInterior from "@/assets/cafe-interior.png";
import foodPlatter from "@/assets/food-platter.png";
import foodNoodles from "@/assets/food-noodles.png";
import roomWooden from "@/assets/room-wooden.png";

import { Reveal } from "@/components/site/Reveal";
import { HeroCtas, WhatsAppButton } from "@/components/site/CtaRow";
import { SectionHeading } from "@/components/site/PageHero";
import { ADDRESS_ONE_LINE, RATING, REVIEW_COUNT } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Havemore Guest House & Cafe | Guest House in Solan, Mall Road" },
      {
        name: "description",
        content:
          "Havemore Guest House Solan — comfortable, budget-friendly rooms and a multi-cuisine cafe on Mall Road, Solan, Himachal Pradesh. Book on WhatsApp +91 78070 96063.",
      },
      { property: "og:title", content: "Havemore Guest House & Cafe | Mall Road, Solan" },
      {
        property: "og:description",
        content:
          "Stay comfortably, dine deliciously and explore Solan from a cozy guest house and cafe near Mall Road.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const highlights = [
  { icon: MapPin, title: "Mall Road Location", text: "Right in the heart of Solan." },
  { icon: BedDouble, title: "Comfortable Rooms", text: "Simple, clean and restful." },
  { icon: Mountain, title: "Mountain Views", text: "Valley views from select rooms." },
  { icon: UtensilsCrossed, title: "Multi-Cuisine Cafe", text: "On-site dining all day." },
  { icon: Soup, title: "Breakfast, Lunch & Dinner", text: "Freshly prepared meals." },
  { icon: Coffee, title: "Cozy Atmosphere", text: "Homely, warm and unhurried." },
];

function Home() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(Math.min(window.scrollY, 700));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <img
          src={balcony}
          alt="View from Havemore Guest House balcony over the Solan hills"
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
          style={{ transform: `translate3d(0, ${offset * 0.28}px, 0) scale(1.12)` }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-fade)" }}
          aria-hidden="true"
        />
        <div className="shell relative z-10 pt-28 pb-24">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-white/85 backdrop-blur-md">
              <Star className="h-3.5 w-3.5 fill-gold text-gold" />
              {RATING}/5 · {REVIEW_COUNT}+ reviews · Solan
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 max-w-4xl font-display text-[2.6rem] leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Havemore Guest House &amp; Cafe
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-5 max-w-2xl font-display text-xl text-white/90 sm:text-2xl">
              Stay Comfortably. Dine Deliciously. Explore Solan.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-3 max-w-xl text-sm text-white/70 sm:text-base">
              A cozy guest house and cafe located on Mall Road, Solan.
            </p>
          </Reveal>
          <Reveal delay={380}>
            <div className="mt-9">
              <HeroCtas />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand/60 py-16 md:py-20">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Why guests choose us"
              title="Everything you need, a few steps from Mall Road"
              intro="A guest house in Solan built around two simple things — a restful room to come back to and good food waiting downstairs."
              align="center"
            />
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h, i) => (
              <Reveal as="li" key={h.title} delay={i * 80}>
                <div className="card-soft h-full p-7 transition-transform duration-500 hover:-translate-y-1.5">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary">
                    <h.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg">{h.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{h.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Stay + Dine"
              title="One address. Two warm experiences."
              intro="The guest house and the cafe share the same roof on Mall Road — sleep well upstairs, eat well downstairs."
            />
          </Reveal>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {[
              {
                img: roomDeluxe,
                alt: "Comfortable guest room at Havemore Guest House, Solan",
                eyebrow: "The Stay",
                title: "Guest House",
                text: "Comfortable, budget-friendly rooms suitable for couples, families and solo travellers, with mountain and valley views from selected rooms.",
                to: "/rooms" as const,
                cta: "Explore Rooms",
              },
              {
                img: cafeInterior,
                alt: "Cozy indoor seating at Havemore Cafe, Mall Road Solan",
                eyebrow: "The Table",
                title: "Havemore Cafe",
                text: "A multi-cuisine cafe serving breakfast, lunch and dinner in a casual indoor setting — ideal for families, small groups and solo diners.",
                to: "/cafe" as const,
                cta: "See Cafe & Dining",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 140}>
                <article className="group card-soft overflow-hidden">
                  <div className="zoom-frame relative aspect-[4/3]">
                    <img src={c.img} alt={c.alt} className="h-full w-full object-cover" loading="lazy" />
                    <span className="absolute top-5 left-5 rounded-full bg-background/85 px-4 py-1.5 text-[0.65rem] font-bold tracking-[0.2em] uppercase text-primary backdrop-blur">
                      {c.eyebrow}
                    </span>
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-2xl">{c.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                    <Link
                      to={c.to}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                    >
                      {c.cta}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-bark py-20 text-bark-foreground md:py-28">
        <div className="shell grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="eyebrow text-gold">Guest feedback</p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl">
                Rated {RATING} out of 5 by {REVIEW_COUNT}+ guests
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-bark-foreground/70">
                Recurring themes in what guests appreciate most about staying and dining with us.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Hygienic food",
                  "Polite, homely service",
                  "Convenient Mall Road location",
                  "Cozy atmosphere",
                ].map((t) => (
                  <li
                    key={t}
                    className="rounded-xl border border-white/12 bg-white/5 px-4 py-3 text-sm"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <WhatsAppButton label="Book Your Stay" variant="green" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="grid grid-cols-2 gap-4">
              <div className="zoom-frame overflow-hidden rounded-2xl">
                <img src={foodPlatter} alt="Freshly served meal at Havemore Cafe" className="h-56 w-full object-cover md:h-72" loading="lazy" />
              </div>
              <div className="zoom-frame mt-8 overflow-hidden rounded-2xl">
                <img src={snowView} alt="Snow covered surroundings near Havemore Guest House, Solan" className="h-56 w-full object-cover md:h-72" loading="lazy" />
              </div>
              <div className="zoom-frame overflow-hidden rounded-2xl">
                <img src={roomWooden} alt="Wooden interiors of a room at Havemore Guest House" className="h-40 w-full object-cover md:h-52" loading="lazy" />
              </div>
              <div className="zoom-frame -mt-8 overflow-hidden rounded-2xl">
                <img src={foodNoodles} alt="Multi-cuisine dish served at Havemore Cafe" className="h-40 w-full object-cover md:h-52" loading="lazy" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="shell">
          <Reveal>
            <div className="card-soft flex flex-col items-start gap-6 overflow-hidden p-9 md:flex-row md:items-center md:justify-between md:p-12">
              <div>
                <p className="eyebrow">Find us</p>
                <h2 className="mt-3 font-display text-3xl">Near St. Luke's School, Mall Road</h2>
                <p className="mt-3 max-w-lg text-sm text-muted-foreground">{ADDRESS_ONE_LINE}</p>
              </div>
              <Link
                to="/location"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                View Location
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
