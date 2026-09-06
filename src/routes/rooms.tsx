import { createFileRoute } from "@tanstack/react-router";
import { BedDouble, Mountain, Wind, Users, IndianRupee } from "lucide-react";

import roomDeluxe from "@/assets/room-deluxe.png";
import roomTwin from "@/assets/room-twin.png";
import roomWooden from "@/assets/room-wooden.png";
import balcony from "@/assets/balcony-view.png";
import snowView from "@/assets/snow-view.png";
import corridor from "@/assets/corridor.png";

import { Reveal } from "@/components/site/Reveal";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { WhatsAppButton } from "@/components/site/CtaRow";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms | Budget Hotel in Solan — Havemore Guest House" },
      {
        name: "description",
        content:
          "Comfortable, budget-friendly rooms from approx. ₹900/night at Havemore Guest House near Mall Road, Solan — suitable for couples, families and solo travellers.",
      },
      { property: "og:title", content: "Rooms at Havemore Guest House, Solan" },
      {
        property: "og:description",
        content:
          "Budget-friendly rooms with mountain and valley views from selected rooms, near Mall Road, Solan.",
      },
      { property: "og:url", content: "/rooms" },
    ],
    links: [{ rel: "canonical", href: "/rooms" }],
  }),
  component: RoomsPage,
});

const features = [
  {
    icon: BedDouble,
    title: "Comfortable Accommodation",
    text: "Simple, restful rooms kept clean and ready for a good night's sleep after a day out in Solan.",
    img: roomDeluxe,
    alt: "Comfortable bedroom at Havemore Guest House, Solan",
  },
  {
    icon: Mountain,
    title: "Mountain & Valley Views",
    text: "Selected rooms open toward the hills and valley that surround Solan.",
    img: balcony,
    alt: "Mountain and valley view from Havemore Guest House",
  },
  {
    icon: Wind,
    title: "Functional Windows",
    text: "Rooms have functional windows for natural light and fresh mountain air.",
    img: roomTwin,
    alt: "Room with functional window at Havemore Guest House",
  },
  {
    icon: Users,
    title: "Couples, Families & Solo Travellers",
    text: "The guest house suits couples, families and solo travellers visiting Solan.",
    img: roomWooden,
    alt: "Wooden interior guest room at Havemore Guest House",
  },
];

function RoomsPage() {
  return (
    <>
      <PageHero
        image={roomDeluxe}
        eyebrow="Accommodation"
        title="Rooms at Havemore Guest House"
        subtitle="Budget-friendly comfort a short walk from Mall Road, Solan."
      />

      <section className="py-20 md:py-24">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="The stay"
              title="Restful rooms, honestly priced"
              intro="No frills, no fuss — a comfortable room in a convenient part of Solan, with warm food available downstairs at the cafe."
            />
          </Reveal>

          <div className="mt-14 grid gap-14">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={60}>
                <article
                  className={`grid items-center gap-8 lg:grid-cols-2 ${
                    i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className="zoom-frame overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
                    <img
                      src={f.img}
                      alt={f.alt}
                      className="aspect-[4/3] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary">
                      <f.icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display text-2xl md:text-3xl">{f.title}</h3>
                    <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
                      {f.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand/60 py-20">
        <div className="shell">
          <Reveal>
            <div className="card-soft grid items-center gap-8 overflow-hidden p-9 md:grid-cols-[1.2fr_1fr] md:p-12">
              <div>
                <p className="eyebrow">Budget friendly</p>
                <h2 className="mt-3 flex items-center gap-1 font-display text-3xl md:text-4xl">
                  <IndianRupee className="h-7 w-7 text-primary" />
                  Rooms from approx. ₹900/night
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  Rates vary by season, availability and room. Message us on WhatsApp and we'll
                  share current prices and availability right away.
                </p>
                <div className="mt-7">
                  <WhatsAppButton label="Check Current Price" />
                </div>
              </div>
              <div className="zoom-frame overflow-hidden rounded-xl">
                <img
                  src={snowView}
                  alt="Snowy hillside near Havemore Guest House in Solan"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="shell grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="zoom-frame overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
              <img
                src={corridor}
                alt="Corridor leading to the rooms at Havemore Guest House"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <h2 className="font-display text-3xl">Booking is a message away</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Tell us your dates and number of guests on WhatsApp — we'll confirm what's available
                and help you plan your stay in Solan.
              </p>
              <div className="mt-7">
                <WhatsAppButton label="Room Enquiry on WhatsApp" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
