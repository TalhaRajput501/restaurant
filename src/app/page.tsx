// import {
//   FeatureStrip,
//   Footer,
//   Header,
//   HeroSection, 
//   PizzasSection,
//   BurgersSection,
//   DealsSection,
//   ReviewsSection,
// } from "@/components/restaurant";

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-orange-500 selection:text-white">
//       <Header />
//       <HeroSection />
//       <FeatureStrip /> 
//       <PizzasSection />
//       <BurgersSection />
//       <DealsSection />
//       <ReviewsSection />
//       <Footer />
//     </main>
//   );
// }


// import {
//   BurgerSection,
//   DealsSection,
//   Footer,
//   Header,
//   Hero,
//   MobileOrderBar,
//   PizzaSection,
//   VisitSection,
// } from "@/components/restaurant";

// export default function Home() {
//   return (
//     <div className="min-h-screen overflow-x-hidden bg-zinc-950 pb-20 text-zinc-100 md:pb-0">
//       <Header />
//       <main>
//         <Hero />
//         <PizzaSection />
//         <BurgerSection />
//         <DealsSection />
//         <VisitSection />
//       </main>
//       <Footer />
//       <MobileOrderBar />
//     </div>
//   );
// }


"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Baby,
  Car,
  ChevronLeft,
  ChevronRight,
  Clock,
  CreditCard,
  Drumstick,
  Flame,
  MapPin,
  MessageCircle,
  Minus,
  Moon,
  Phone,
  Pizza,
  Plus,
  Quote,
  Sandwich,
  ShoppingBag,
  Star,
  Truck,
  Users,
  Utensils,
  X,
} from "lucide-react";
import Card from "@/components/Card";

/* ============ BUSINESS INFO (confirm with the owner) ============ */
const WA_NUMBER = "923068655058";
const TEL = "+923068655058";
const PHONE_DISPLAY = "0306 8655058";
const HOURS = "Daily, 4 PM – 4 AM";
const ADDRESS =
  "Old Gas Pipeline Rd, near Bagh-e-Hussain Chowk, opposite Hamida Sharif Clinic, Samejabad, Multan";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Burgizza burgers and Pizza's Old Gas Pipeline Rd Samejabad Multan");

/* ============ MENU (replace with the owner's real menu + photos) ============ */
type Cat = "pizza" | "burger" | "deal";
export type Item = {
  id: string;
  cat: Cat;
  name: string;
  desc: string;
  price: number;
  image: string;
  includes?: string[];
};

const MENU: Item[] = [
  {
    id: "p1",
    cat: "pizza",
    name: "Double Layer Extreme Pizza",
    desc: "Two layers of cheese, pepperoni and smoky chicken.",
    price: 1190,
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "p2",
    cat: "pizza",
    name: "Special Crown Crust Pizza",
    desc: "Chicken, kebab bites, peppers and olives on a stuffed crown crust.",
    price: 1450,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "b1",
    cat: "burger",
    name: "Spicy Zinger Burger",
    desc: "Crispy zinger fillet, lettuce, pickles and chilli sauce.",
    price: 290,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "d1",
    cat: "deal",
    name: "Family Feast",
    desc: "One bundle for the whole table.",
    price: 2000,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
    includes: ["1 large pizza", "2 zinger burgers", "Loaded fries", "4 drinks"],
  },
];

const rs = (n: number) => `Rs. ${n.toLocaleString("en-US")}`;
const waLink = (text: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
const wrap = "mx-auto w-full max-w-[1120px] px-4 sm:px-6";

/* ============ HELPERS ============ */
function useOpenNow() {
  const [open, setOpen] = useState<boolean | null>(null);
  useEffect(() => {
    const check = () => {
      const h = parseInt(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Karachi",
          hour: "numeric",
          hourCycle: "h23",
        }).format(new Date()),
        10
      );
      setOpen(h >= 16 || h < 4);
    };
    check();
    const t = setInterval(check, 60000);
    return () => clearInterval(t);
  }, []);
  return open;
}

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`rv ${seen ? "rv-in" : ""} ${className}`}>
      {children}
    </div>
  );
}

export function Stepper({ qty, onAdd, onDec, big = false }: { qty: number; onAdd: () => void; onDec: () => void; big?: boolean }) {
  const pad = big ? "px-5 py-3 text-sm" : "px-4 py-2.5 text-xs";
  if (qty === 0) {
    return (
      <button
        type="button"
        onClick={onAdd}
        className={`inline-flex items-center gap-1.5 rounded-xl bg-orange-500 font-bold text-stone-950 transition hover:bg-orange-400 active:scale-95 ${pad}`}
      >
        <Plus size={15} /> Add
      </button>
    );
  }
  return (
    <div className="inline-flex items-center gap-1 rounded-xl bg-stone-800 p-1">
      <button type="button" aria-label="Remove one" onClick={onDec} className="grid h-9 w-9 place-items-center rounded-lg text-stone-200 hover:bg-stone-700">
        <Minus size={16} />
      </button>
      <span className="w-6 text-center text-sm font-bold text-amber-300" aria-live="polite">{qty}</span>
      <button type="button" aria-label="Add one" onClick={onAdd} className="grid h-9 w-9 place-items-center rounded-lg bg-orange-500 text-stone-950 hover:bg-orange-400">
        <Plus size={16} />
      </button>
    </div>
  );
}

function SectionHead({ id, kicker, title, blurb }: { id: string; kicker: string; title: string; blurb: string }) {
  return (
    <Reveal className="mb-8">
      <p id={id} className="mb-2 scroll-mt-24 text-xs font-bold uppercase tracking-[0.25em] text-amber-400">{kicker}</p>
      <h2 className="text-4xl font-black uppercase leading-none tracking-tight text-stone-50 sm:text-5xl">{title}</h2>
      <p className="mt-3 max-w-lg text-stone-400">{blurb}</p>
    </Reveal>
  );
}
/* ============ MENU HIGHLIGHTS ============ */
const HIGHLIGHTS = [
  { name: "Burger", note: "Zingers and more, stacked and served hot.", icon: Sandwich },
  { name: "Double Layer Extreme Pizza", note: "The signature double-layer cheese pizza.", icon: Pizza },
  { name: "Injected Broast", note: "Crispy broast from the fryer.", icon: Drumstick },
  { name: "Special Pasta", note: "Ask for today's price on WhatsApp.", icon: Utensils },
  { name: "Behari Kabab Crust Pizza", note: "Kabab-stuffed crust. Ask for today's price.", icon: Flame },
];

function HighlightsSection() {
  return (
    <section className={`${wrap} pt-16`}>
      <SectionHead id="highlights" kicker="Menu highlights" title="What people come for" blurb="Five things to start with. Tap one to order it on WhatsApp." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {HIGHLIGHTS.map((h, i) => {
          const Icon = h.icon;
          return (
            <Reveal key={h.name} delay={i * 70}>
              <a
                href={waLink(`Hi Burgizza, I'd like to order: ${h.name}`)}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-3xl border border-stone-800 bg-stone-900/60 p-5 transition hover:-translate-y-1 hover:border-orange-500/60"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-500/10 text-orange-400 transition group-hover:bg-orange-500 group-hover:text-stone-950">
                  <Icon size={24} />
                </span>
                <h3 className="mt-4 font-bold leading-snug">{h.name}</h3>
                <p className="mt-1 flex-1 text-sm leading-6 text-stone-400">{h.note}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400">
                  <MessageCircle size={15} /> Order this
                </span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ============ REVIEWS CAROUSEL ============ */
const REVIEWS = [
  { author: "Iqra Rehman", badge: "Local Guide", text: "The best pizza I’ve ever tried in Multan" },
  { author: "talha afzal", badge: "Local Guide", text: "Everything is delicious. Must try double layer extreme pizza if you love soft and creamy pizza. Highly recommended" },
  { author: "Hassaan Safdar", badge: "Dine-in", text: "Excellent taste and reasonable price." },
  { author: "MR Trend", badge: "Local Guide", text: "Everythings amazing like Zinger burger, fries, loaded and pizza fries, also pizza..." },
  { author: "Asif Jut", badge: "Delivery", text: "Taste is so good over All delivered on time best taste" },
  { author: "Hamee Leo", badge: "Delivery", text: "I really like it because it's taste is very delicious" },
];

function ReviewsSection() {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <section className="bg-stone-900/40 py-16">
      <div className={wrap}>
        <SectionHead id="reviews" kicker="Reviews" title="Straight from Google" blurb="Real words from customers, shown as they wrote them." />
        <div className="mb-4 flex justify-end gap-2">
          <button type="button" aria-label="Previous reviews" onClick={() => scroll(-1)} className="grid h-10 w-10 place-items-center rounded-xl border border-stone-700 text-stone-200 transition hover:border-orange-500 hover:text-orange-400">
            <ChevronLeft size={18} />
          </button>
          <button type="button" aria-label="Next reviews" onClick={() => scroll(1)} className="grid h-10 w-10 place-items-center rounded-xl border border-stone-700 text-stone-200 transition hover:border-orange-500 hover:text-orange-400">
            <ChevronRight size={18} />
          </button>
        </div>
        <div ref={track} className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {REVIEWS.map((r) => (
            <article key={r.author} className="flex min-w-[85%] shrink-0 snap-start flex-col rounded-3xl border border-stone-800 bg-stone-950 p-6 sm:min-w-[45%] lg:min-w-[32%]">
              <Quote size={26} className="text-orange-500" />
              <p className="mt-4 flex-1 leading-7 text-stone-200">&ldquo;{r.text}&rdquo;</p>
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-stone-800 pt-4">
                <p className="text-sm font-bold">{r.author}</p>
                <span className="rounded-full bg-stone-800 px-2.5 py-1 text-[11px] font-semibold text-amber-300">{r.badge}</span>
              </div>
            </article>
          ))}
        </div>
        <a href={MAPS_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm text-stone-400 hover:text-amber-300">
          <Star size={15} className="text-amber-400" fill="currentColor" /> Read all reviews on Google Maps
        </a>
      </div>
    </section>
  );
}

/* ============ SERVICES & GOOD TO KNOW ============ */
const SERVICES = [
  { title: "Order your way", icon: Truck, items: ["Delivery", "No-contact delivery", "Takeout", "Drive-through", "Dine-in", "Table service", "Outdoor seating"] },
  { title: "Late-night & quick", icon: Moon, items: ["Late-night food", "Quick bite", "Lunch", "Dinner", "Solo dining"] },
  { title: "Family & groups", icon: Users, items: ["Family-friendly", "Groups", "Casual atmosphere", "Good for kids", "Kids' menu"] },
  { title: "Pay & park", icon: CreditCard, items: ["Credit cards", "Debit cards", "NFC mobile payments", "Free parking lot", "Free street parking"] },
];

function ServicesSection() {
  return (
    <section className={`${wrap} py-16`}>
      <SectionHead id="services" kicker="Good to know" title="Made easy for everyone" blurb="However you like to eat, we've got a way for you." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.title} delay={i * 80}>
              <div className="h-full rounded-3xl border border-stone-800 bg-stone-900/60 p-6">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-orange-500/10 text-orange-400">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {s.items.map((x) => (
                    <li key={x} className="rounded-full border border-stone-700 bg-stone-950 px-3 py-1 text-xs font-medium text-stone-300">
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
/* ============ PAGE ============ */
export default function Home() {
  const open = useOpenNow();
  const [cart, setCart] = useState<Record<string, number>>({});
  const [drawer, setDrawer] = useState(false);
  const [mode, setMode] = useState<"delivery" | "pickup">("delivery");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const add = (id: string) => setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
  const dec = (id: string) =>
    setCart((c) => {
      const next = { ...c };
      if ((next[id] ?? 0) <= 1) delete next[id];
      else next[id] -= 1;
      return next;
    });

  const lines = MENU.filter((i) => cart[i.id]);
  const count = lines.reduce((s, i) => s + cart[i.id], 0);
  const total = lines.reduce((s, i) => s + cart[i.id] * i.price, 0);

  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawer]);

  useEffect(() => {
    if (count === 0) setDrawer(false);
  }, [count]);

  const message = [
    "Hi Burgizza, I'd like to order:",
    ...lines.map((i) => `${cart[i.id]}x ${i.name} - ${rs(i.price * cart[i.id])}`),
    `Items total: ${rs(total)}`,
    `Type: ${mode === "delivery" ? "Delivery" : "Pickup"}`,
    name.trim() ? `Name: ${name.trim()}` : "",
    mode === "delivery" && address.trim() ? `Address: ${address.trim()}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const onSend = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (mode === "delivery" && !address.trim()) {
      e.preventDefault();
      setError("Please add your delivery address.");
      return;
    }
    setError("");
  };

  const pizzas = MENU.filter((i) => i.cat === "pizza");
  const burgers = MENU.filter((i) => i.cat === "burger");
  const deals = MENU.filter((i) => i.cat === "deal");
  const ticker = ["Zinger burgers", "Loaded pizza", "Crown crust", "Family deals", "Open till 4 AM"];

  return (
    <div className="min-h-screen overflow-x-hidden bg-stone-950 pb-24 text-stone-100 md:pb-0">
      <style>{`
        html{scroll-behavior:smooth}
        .rv{opacity:0;transform:translateY(22px);transition:opacity .7s ease,transform .7s ease}
        .rv-in{opacity:1;transform:none}
        @keyframes marquee{to{transform:translateX(-50%)}}
        .marquee{animation:marquee 30s linear infinite}
        @keyframes floaty{50%{transform:translateY(-10px)}}
        .floaty{animation:floaty 5s ease-in-out infinite}
        @media (prefers-reduced-motion:reduce){
          html{scroll-behavior:auto}
          .rv{opacity:1;transform:none;transition:none}
          .marquee,.floaty{animation:none}
        }
      `}</style>

      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-stone-800/70 bg-stone-950/90 backdrop-blur">
        <div className={`${wrap} flex items-center justify-between gap-3 py-3`}>
          <a href="#top" className="flex items-center gap-2.5" aria-label="Burgizza home">
            <img src="/bur.jpeg" alt="" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
            <span className="text-xl font-black uppercase tracking-tight">Burgizza</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-stone-400 md:flex" aria-label="Main">
            <a href="#pizzas" className="hover:text-amber-300">Pizzas</a>
            <a href="#burgers" className="hover:text-amber-300">Burgers</a>
            <a href="#deals" className="hover:text-amber-300">Deals</a>
            <a href="#visit" className="hover:text-amber-300">Visit</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={`tel:${TEL}`} aria-label="Call Burgizza" className="grid h-10 w-10 place-items-center rounded-xl border border-stone-700 text-stone-200 hover:border-orange-500 hover:text-orange-400">
              <Phone size={17} />
            </a>
            <button
              type="button"
              onClick={() => (count > 0 ? setDrawer(true) : document.getElementById("pizzas")?.scrollIntoView({ behavior: "smooth" }))}
              className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-bold text-stone-950 hover:bg-orange-400"
            >
              <ShoppingBag size={16} />
              {count > 0 ? `Order · ${count}` : "Order now"}
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-orange-600/20 blur-[120px]" />
          <div className={`${wrap} relative grid items-center gap-10 py-12 md:grid-cols-[1.1fr_0.9fr] md:py-20`}>
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-stone-700 bg-stone-900 px-3 py-1.5 text-xs font-semibold">
                <span className={`h-2 w-2 rounded-full ${open === null ? "bg-stone-500" : open ? "bg-emerald-400" : "bg-red-500"}`} />
                {open === null ? HOURS : open ? "Open now · until 4 AM" : "Closed now · opens 4 PM"}
              </p>
              <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Hot burgers.
                <br />
                Loaded pizza.
                <br />
                <span className="text-orange-500">Open till 4 AM.</span>
              </h1>
              <p className="mt-6 max-w-md text-lg leading-7 text-stone-400">
                Build your order in a few taps. It lands on our WhatsApp ready to confirm. No app, no sign-up.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#pizzas" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-7 py-4 text-base font-black uppercase tracking-wide text-stone-950 shadow-lg shadow-orange-600/30 transition hover:bg-orange-400 active:scale-95">
                  <Flame size={19} /> Build my order
                </a>
                <a href={`tel:${TEL}`} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-stone-700 px-7 py-4 text-base font-bold transition hover:border-stone-500">
                  <Phone size={18} /> {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-stone-800 bg-stone-900 sm:aspect-[4/3] md:aspect-[4/5]">
                <img src={MENU[0].image} alt={MENU[0].name} className="h-full w-full object-cover" fetchPriority="high" />
              </div>
              <div className="floaty absolute -bottom-4 left-4 rounded-2xl border border-stone-700 bg-stone-900/95 px-4 py-3 shadow-xl backdrop-blur sm:left-[-1.5rem]">
                <p className="text-[11px] font-bold uppercase tracking-widest text-amber-400">Crowd favourite pick</p>
                <p className="text-sm font-bold">{MENU[0].name}</p>
                <p className="text-sm text-orange-400">{rs(MENU[0].price)}</p>
              </div>
            </div>
          </div>
        </section>

        {/* TICKER */}
        <div className="overflow-hidden border-y border-stone-800 bg-orange-500 py-3 text-stone-950" aria-hidden="true">
          <div className="marquee flex w-max gap-10 whitespace-nowrap text-sm font-black uppercase tracking-[0.2em]">
            {[...ticker, ...ticker, ...ticker, ...ticker].map((t, i) => (
              <span key={i} className="flex items-center gap-10">
                {t} <Flame size={14} />
              </span>
            ))}
          </div>
        </div>
        <HighlightsSection />
        {/* HOW IT WORKS */}
        <section className={`${wrap} py-16`}>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["1", "Pick your food", "Add pizzas, burgers or a deal to your order."],
              ["2", "Send on WhatsApp", "One tap sends your full order to us."],
              ["3", "We confirm and cook", "We reply to confirm, then get cooking."],
            ].map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 100}>
                <div className="h-full rounded-3xl border border-stone-800 bg-stone-900/60 p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-orange-500 text-lg font-black text-stone-950">{n}</span>
                  <h3 className="mt-4 text-lg font-bold">{t}</h3>
                  <p className="mt-1 text-sm text-stone-400">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PIZZAS */}
        <section className={`${wrap} py-12`}>
          <SectionHead id="pizzas" kicker="Pizzas" title="Loaded pizza" blurb="Stuffed crusts, double cheese, baked to order." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pizzas.map((it, i) => (
              // <Reveal key={it.id} delay={i * 80}>
              //   <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-stone-800 bg-stone-900/60">
              //     <div className="aspect-[4/3] overflow-hidden">
              //       <img src={it.image} alt={it.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              //     </div>
              //     <div className="flex flex-1 flex-col p-5">
              //       <h3 className="text-lg font-bold">{it.name}</h3>
              //       <p className="mt-1.5 flex-1 text-sm leading-6 text-stone-400">{it.desc}</p>
              //       <div className="mt-5 flex items-center justify-between gap-3">
              //         <span className="text-xl font-black text-amber-300">{rs(it.price)}</span>
              //         <Stepper qty={cart[it.id] ?? 0} onAdd={() => add(it.id)} onDec={() => dec(it.id)} />
              //       </div>
              //     </div>
              //   </article>
              // </Reveal>
              
                <Card key={it.id} delay={i * 80} item={it} qty={cart[it.id] ?? 0} onAdd={() => add(it.id)} onDec={() => dec(it.id)} />
            ))}
          </div>
        </section>

        {/* BURGERS: horizontal rows, a different layout from pizzas */}
        <section className="bg-stone-900/40 py-16">
          <div className={wrap}>
            <SectionHead id="burgers" kicker="Burgers" title="Zingers & burgers" blurb="Crispy, stacked and served hot." />
            <div className=" ">
              {burgers.map((it, i) => (
                <Reveal key={it.id} delay={i * 80}>
                  <div className="flex overflow-hidden rounded-3xl border border-stone-800 bg-stone-950 flex-col max-w-[300px] mx-auto  ">
                    <img src={it.image} alt={it.name} loading="lazy" className="h-auto  object-cover" />
                    <div className="flex flex-1 flex-col p-5 z-30">
                      <h3 className="text-lg font-bold">{it.name}</h3>
                      <p className="mt-1.5 flex-1 text-sm leading-6 text-stone-400">{it.desc}</p>
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                        <span className="text-xl font-black text-amber-300">{rs(it.price)}</span>
                        <Stepper qty={cart[it.id] ?? 0} onAdd={() => add(it.id)} onDec={() => dec(it.id)} />
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* DEALS */}
        <section className={`${wrap} py-16`}>
          <SectionHead id="deals" kicker="Deals" title="Made for sharing" blurb="One bundle, one price, everyone fed." />
          <div className="grid gap-5">
            {deals.map((it) => (
              <Reveal key={it.id}>
                <article className="grid overflow-hidden rounded-[2rem] border border-orange-500/40 bg-gradient-to-br from-stone-900 to-stone-950 md:grid-cols-2">
                  <img src={it.image} alt={it.name} loading="lazy" className="h-60 w-full object-cover md:h-full" />
                  <div className="flex flex-col p-6 sm:p-8">
                    <span className="mb-3 w-fit rounded-full bg-amber-400 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-stone-950">Best for sharing</span>
                    <h3 className="text-3xl font-black uppercase tracking-tight">{it.name}</h3>
                    <ul className="mt-4 flex-1 space-y-2 text-stone-300">
                      {it.includes?.map((x) => (
                        <li key={x} className="flex items-center gap-2">
                          <Flame size={15} className="text-orange-500" /> {x}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                      <span className="text-3xl font-black text-amber-300">{rs(it.price)}</span>
                      <Stepper big qty={cart[it.id] ?? 0} onAdd={() => add(it.id)} onDec={() => dec(it.id)} />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <ReviewsSection />
        <ServicesSection />
        {/* VISIT */}
        <section className="border-t border-stone-800 py-16">
          <div className={wrap}>
            <SectionHead id="visit" kicker="Visit or call" title="Find us in Samejabad" blurb="Walk in, call ahead, or order from your couch." />
            <div className="grid gap-4 md:grid-cols-3">
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className="rounded-3xl border border-stone-800 bg-stone-900/60 p-6 transition hover:border-orange-500/60">
                <MapPin className="text-orange-500" />
                <p className="mt-3 font-bold">Address</p>
                <p className="mt-1 text-sm leading-6 text-stone-400">{ADDRESS}</p>
                <p className="mt-3 text-sm font-semibold text-orange-400">Open in Google Maps →</p>
              </a>
              <div className="rounded-3xl border border-stone-800 bg-stone-900/60 p-6">
                <Clock className="text-orange-500" />
                <p className="mt-3 font-bold">Hours</p>
                <p className="mt-1 text-sm text-stone-400">{HOURS}</p>
              </div>
              <div className="rounded-3xl border border-stone-800 bg-stone-900/60 p-6">
                <Phone className="text-orange-500" />
                <p className="mt-3 font-bold">Call or message</p>
                <a href={`tel:${TEL}`} className="mt-1 block text-sm text-stone-300 hover:text-orange-400">{PHONE_DISPLAY}</a>
                <a href={waLink("Hi Burgizza, I have a question.")} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300">
                  <MessageCircle size={16} /> Chat on WhatsApp
                </a>
              </div>
            </div>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm text-stone-400 hover:text-amber-300">
              <Star size={15} className="text-amber-400" fill="currentColor" /> See what customers say on Google Maps
            </a>
          </div>
        </section>


      </main>

      <footer className="border-t border-stone-800">
        <div className={`${wrap} flex flex-col items-center justify-between gap-2 py-6 text-xs text-stone-500 sm:flex-row`}>
          <span>© 2026 Burgizza · Samejabad, Multan</span>
          <span>{HOURS}</span>
        </div>
      </footer>

      {/* MOBILE STICKY BAR */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-stone-800 bg-stone-950/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
        {count > 0 ? (
          <button type="button" onClick={() => setDrawer(true)} className="flex w-full items-center justify-between rounded-2xl bg-orange-500 px-5 py-3.5 text-sm font-black uppercase text-stone-950">
            <span className="flex items-center gap-2"><ShoppingBag size={18} /> View order · {count}</span>
            <span>{rs(total)}</span>
          </button>
        ) : (
          <div className="flex gap-2">
            <a href="#pizzas" className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-orange-500 py-3.5 text-sm font-black uppercase text-stone-950">
              <Flame size={17} /> Build my order
            </a>
            <a href={`tel:${TEL}`} className="flex items-center justify-center gap-2 rounded-2xl border border-stone-700 px-5 py-3.5 text-sm font-bold">
              <Phone size={17} /> Call
            </a>
          </div>
        )}
      </div>

      {/* CART DRAWER */}
      {drawer && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Your order">
          <button type="button" aria-label="Close order" onClick={() => setDrawer(false)} className="absolute inset-0 bg-black/70" />
          <div className="absolute bottom-0 right-0 flex max-h-[92vh] w-full flex-col rounded-t-3xl border border-stone-800 bg-stone-950 sm:top-0 sm:max-h-none sm:max-w-md sm:rounded-none sm:rounded-l-3xl">
            <div className="flex items-center justify-between border-b border-stone-800 p-5">
              <h2 className="text-xl font-black uppercase">Your order</h2>
              <button type="button" aria-label="Close" onClick={() => setDrawer(false)} className="grid h-10 w-10 place-items-center rounded-xl border border-stone-700">
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 space-y-5 overflow-y-auto p-5">
              <ul className="space-y-3">
                {lines.map((it) => (
                  <li key={it.id} className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate font-semibold">{it.name}</p>
                      <p className="text-sm text-stone-400">{rs(it.price * cart[it.id])}</p>
                    </div>
                    <Stepper qty={cart[it.id]} onAdd={() => add(it.id)} onDec={() => dec(it.id)} />
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-2 gap-2 rounded-2xl bg-stone-900 p-1">
                {(["delivery", "pickup"] as const).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => {
                      setMode(m);
                      setError("");
                    }}
                    className={`rounded-xl py-2.5 text-sm font-bold capitalize transition ${mode === m ? "bg-orange-500 text-stone-950" : "text-stone-400"}`}
                  >
                    {m}
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name (optional)"
                  autoComplete="name"
                  className="w-full rounded-xl border border-stone-700 bg-stone-900 px-4 py-3 text-base outline-none focus:border-orange-500"
                />
                {mode === "delivery" && (
                  <textarea
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                      setError("");
                    }}
                    placeholder="Delivery address"
                    rows={2}
                    autoComplete="street-address"
                    className="w-full resize-none rounded-xl border border-stone-700 bg-stone-900 px-4 py-3 text-base outline-none focus:border-orange-500"
                  />
                )}
                {error && <p className="text-sm text-red-400" role="alert">{error}</p>}
              </div>
            </div>

            <div className="border-t border-stone-800 p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
              <div className="mb-1 flex items-center justify-between text-lg font-black">
                <span>Items total</span>
                <span className="text-amber-300">{rs(total)}</span>
              </div>
              <p className="mb-4 text-xs text-stone-500">Delivery fee, if any, is confirmed with you on WhatsApp.</p>
              <a
                href={waLink(message)}
                target="_blank"
                rel="noreferrer"
                onClick={onSend}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 py-4 text-base font-black uppercase tracking-wide text-white transition hover:bg-emerald-500 active:scale-95"
              >
                <MessageCircle size={20} /> Send order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}