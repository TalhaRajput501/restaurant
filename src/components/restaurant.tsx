"use client";

import {
  ChevronRight,
  Clock,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Star,
  Utensils,
  X,
} from "lucide-react";
import { useState } from "react";

/* ---------- Business info (confirm with owner) ---------- */
const PHONE_TEL = "+923068655058";
const PHONE_DISPLAY = "0306 8655058";
const WA_NUMBER = "923068655058";
const HOURS = "Daily, 4 PM – 4 AM";
const ADDRESS = "Old Gas Pipeline Rd, near Bagh-e-Hussain Chowk, opposite Hamida Sharif Clinic, Samejabad, Multan";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Burgizza burgers and Pizza's Old Gas Pipeline Rd Samejabad Multan");

const wa = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
const orderLink = (item?: string) =>
  wa(item ? `Hi Burgizza, I'd like to order: ${item}` : "Hi Burgizza, I'd like to place an order.");

/* ---------- Menu data: replace with the owner's real menu ---------- */
type Item = {
  name: string;
  description: string;
  price: string;
  image: string;
  includes?: string[];
};

const pizzas: Item[] = [
  {
    name: "Double Layer Extreme Pizza",
    description: "Two layers of cheese, pepperoni and smoky chicken.",
    price: "Rs. 1,190",
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Special Crown Crust Pizza",
    description: "Chicken, kebab bites, peppers and olives on a stuffed crown crust.",
    price: "Rs. 1,450",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
  },
];

const burgers: Item[] = [
  {
    name: "Spicy Zinger Burger",
    description: "Crispy zinger fillet, lettuce, pickles and chilli sauce.",
    price: "Rs. 290",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
  },
];

const deals: Item[] = [
  {
    name: "Family Feast",
    description: "Enough for the whole table.",
    price: "Rs. 2,000",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
    includes: ["1 large pizza", "2 zinger burgers", "Loaded fries", "4 drinks"],
  },
];

const links = [
  ["Pizzas", "#pizzas"],
  ["Burgers", "#burgers"],
  ["Deals", "#deals"],
  ["Visit", "#visit"],
] as const;

const container = "mx-auto w-full max-w-[1120px] px-4 sm:px-6";

/* ---------- Pieces ---------- */
export function Logo({ size = 40 }: { size?: number }) {
  return (
    <img
      src="/bur.jpeg"
      alt="Burgizza"
      width={size}
      height={size}
      className="rounded-full object-cover"
      style={{ width: size, height: size }}
    />
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur">
      <div className={`${container} flex items-center justify-between py-3`}>
        <a href="#home" aria-label="Burgizza home" className="flex items-center gap-3">
          <Logo />
          <span className="text-lg font-black tracking-tight text-zinc-100">Burgizza</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex" aria-label="Main">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-orange-400">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={orderLink()}
            className="hidden items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-500 sm:inline-flex"
          >
            <MessageCircle size={16} /> Order on WhatsApp
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            aria-label="Call Burgizza"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-200 transition hover:border-orange-500 hover:text-orange-400"
          >
            <Phone size={17} />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-100 md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-zinc-800 bg-zinc-950 px-4 py-3 md:hidden" aria-label="Mobile">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-xl px-3 py-3 text-zinc-300 hover:bg-zinc-900 hover:text-orange-400"
            >
              {label} <ChevronRight size={16} />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Hero() {
  return (
    <section id="home" className={`${container} grid gap-10 py-12 md:grid-cols-2 md:items-center md:py-20`}>
      <div>
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/10 px-3 py-1.5 text-xs font-medium text-orange-300">
          <Clock size={14} /> Open until 4 AM · Samejabad, Multan
        </p>
        <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
          Burgers and pizza, <span className="text-orange-500">late into the night.</span>
        </h1>
        <p className="mt-5 max-w-lg text-base leading-7 text-zinc-400">
          Zinger burgers, loaded pizzas and family deals. Pick what you want and send the order straight to us on WhatsApp.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={orderLink()} className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-500">
            <MessageCircle size={18} /> Order on WhatsApp
          </a>
          <a href="#pizzas" className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3.5 text-sm font-semibold text-zinc-100 transition hover:border-zinc-500">
            <Utensils size={18} /> See the menu
          </a>
        </div>
      </div>

      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
        <img
          src={pizzas[0].image}
          alt="Freshly baked pizza"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/90 to-transparent p-5">
          <p className="text-sm font-semibold text-zinc-100">{pizzas[0].name}</p>
          <p className="text-sm text-orange-400">{pizzas[0].price}</p>
        </div>
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, blurb }: { eyebrow: string; title: string; blurb: string }) {
  return (
    <div className="mb-8">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-zinc-100 sm:text-4xl">{title}</h2>
      <p className="mt-2 max-w-xl text-zinc-500">{blurb}</p>
    </div>
  );
}

export function ItemCard({ item }: { item: Item }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60">
      <div className="aspect-[4/3] overflow-hidden bg-zinc-900">
        <img src={item.image} alt={item.name} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-bold text-zinc-100">{item.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-zinc-500">{item.description}</p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="text-lg font-bold text-orange-400">{item.price}</span>
          <a
            href={orderLink(`${item.name} (${item.price})`)}
            className="inline-flex items-center gap-1.5 rounded-xl bg-orange-600 px-3.5 py-2.5 text-xs font-semibold text-white transition hover:bg-orange-500"
          >
            <MessageCircle size={14} /> Order
          </a>
        </div>
      </div>
    </article>
  );
}

export function PizzaSection() {
  return (
    <section id="pizzas" className={`${container} scroll-mt-20 py-14`}>
      <SectionHead eyebrow="Pizzas" title="Loaded pizzas" blurb="Baked to order, with stuffed crusts and extra cheese." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {pizzas.map((i) => <ItemCard key={i.name} item={i} />)}
      </div>
    </section>
  );
}

export function BurgerSection() {
  return (
    <section id="burgers" className={`${container} scroll-mt-20 py-14`}>
      <SectionHead eyebrow="Burgers" title="Zingers and burgers" blurb="Crispy, stacked and served hot." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {burgers.map((i) => <ItemCard key={i.name} item={i} />)}
      </div>
    </section>
  );
}

export function DealsSection() {
  return (
    <section id="deals" className="scroll-mt-20 bg-zinc-900/40 py-14">
      <div className={container}>
        <SectionHead eyebrow="Deals" title="Made for sharing" blurb="Bundles that cost less than ordering everything separately." />
        <div className="grid gap-5 md:grid-cols-2">
          {deals.map((d) => (
            <article key={d.name} className="grid overflow-hidden rounded-3xl border border-orange-500/25 bg-zinc-950 sm:grid-cols-2">
              <img src={d.image} alt={d.name} loading="lazy" className="h-48 w-full object-cover sm:h-full" />
              <div className="flex flex-col p-5">
                <h3 className="text-xl font-black text-zinc-100">{d.name}</h3>
                <ul className="mt-3 flex-1 space-y-1.5 text-sm text-zinc-400">
                  {d.includes?.map((x) => (
                    <li key={x} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" /> {x}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className="text-2xl font-black text-orange-400">{d.price}</span>
                  <a href={orderLink(`${d.name} (${d.price})`)} className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-500">
                    <MessageCircle size={15} /> Order deal
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VisitSection() {
  return (
    <section id="visit" className={`${container} scroll-mt-20 py-14`}>
      <SectionHead eyebrow="Visit or call" title="Find us in Samejabad" blurb="Order ahead on WhatsApp or walk in." />
      <div className="grid gap-4 md:grid-cols-3">
        <a href={MAPS_URL} target="_blank" rel="noreferrer" className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition hover:border-orange-500/60">
          <MapPin className="text-orange-400" size={20} />
          <p className="mt-3 text-sm font-semibold text-zinc-100">Address</p>
          <p className="mt-1 text-sm leading-6 text-zinc-500">{ADDRESS}</p>
        </a>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
          <Clock className="text-orange-400" size={20} />
          <p className="mt-3 text-sm font-semibold text-zinc-100">Hours</p>
          <p className="mt-1 text-sm text-zinc-500">{HOURS}</p>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
          <Phone className="text-orange-400" size={20} />
          <p className="mt-3 text-sm font-semibold text-zinc-100">Call or message</p>
          <a href={`tel:${PHONE_TEL}`} className="mt-1 block text-sm text-zinc-400 hover:text-orange-400">{PHONE_DISPLAY}</a>
          <a href={orderLink()} className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300">
            <MessageCircle size={15} /> WhatsApp us
          </a>
        </div>
      </div>
      <a href={MAPS_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-orange-400">
        <Star size={15} className="text-orange-400" fill="currentColor" /> Read our reviews on Google Maps
      </a>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/70">
      <div className={`${container} flex flex-col items-center justify-between gap-3 py-6 text-xs text-zinc-600 sm:flex-row`}>
        <span className="flex items-center gap-2"><Logo size={24} /> © 2026 Burgizza, Multan</span>
        <span>{HOURS}</span>
      </div>
    </footer>
  );
}

export function MobileOrderBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-zinc-800 bg-zinc-950/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <a href={orderLink()} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-semibold text-white">
        <MessageCircle size={17} /> WhatsApp order
      </a>
      <a href={`tel:${PHONE_TEL}`} className="flex items-center justify-center gap-2 rounded-xl border border-zinc-700 px-4 py-3 text-sm font-semibold text-zinc-100">
        <Phone size={17} /> Call
      </a>
    </div>
  );
}

 