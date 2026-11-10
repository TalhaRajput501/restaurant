"use client";

import {
  Car,
  ChevronRight,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Phone,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  Utensils,
  X,
} from "lucide-react";
import { useState } from "react";

const whatsappHref =
  "https://wa.me/923068655058?text=Hi%20Burgizza%2C%20I%27d%20like%20to%20place%20an%20order.";

const menuItems = [
  {
    name: "Double Layer Extreme Pizza",
    category: "Pizzas",
    description: "Two layers of cheese, pepperoni, smoky chicken, and a molten finish.",
    price: "Rs. 1,190",
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Spicy Zinger Burger",
    category: "Burgers",
    description: "Crispy zinger fillet, fresh lettuce, pickles, and house chilli sauce.",
    price: "Rs. 290",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Special Crown Crust Pizza",
    category: "Pizzas",
    description: "Tender chicken, kebab bites, peppers, olives, and a stuffed crown crust.",
    price: "Rs. 1,450",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Burgizza Family Feast",
    category: "Exclusive Deals",
    description: "A large pizza, two zingers, loaded fries, and four chilled drinks.",
    price: "Rs. 2,000",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85",
  },
];

const filters = ["All", "Pizzas", "Burgers", "Exclusive Deals"] as const;

const reviews = [
  {
    text: "Best loaded pizza in Samejabad. Molten cheese quality is unmatched!",
    author: "Hamee Leo",
  },
  {
    text: "Crispy zinger burger delivered burning hot late at night. Highly recommended.",
    author: "Local Guide",
  },
  {
    text: "Super fast delivery and great taste. Worth every rupee.",
    author: "Abdullah M.",
  },
];

function Brand() {
  return (
    <span className="text-2xl font-black tracking-[-0.08em] text-zinc-100">
      Burg<span className="text-orange-500">izza</span>
    </span>
  );
}

function IconButton({
  label,
  children,
  onClick,
}: {
  label: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/70 text-zinc-200 transition hover:border-orange-500 hover:text-orange-400"
    >
      {children}
    </button>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ["Menu", "#menu"],
    ["Reviews", "#reviews"],
    ["Location", "#location"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-lg">
      <div className="mx-auto flex w-[min(1120px,calc(100%-2rem))] items-center justify-between gap-4 py-4 md:py-5">
        <a href="#home" aria-label="Burgizza home">
          <Brand />
          <span className="ml-2 hidden text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500 sm:inline">
            Multan&apos;s hot spot
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="transition hover:text-orange-400">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappHref}
            className="hidden items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-500 sm:inline-flex"
          >
            <MessageCircle size={16} />
            WhatsApp Order
          </a>
          <a href="tel:+923068655058" className="hidden md:inline-flex">
            <IconButton label="Call Burgizza">
              <Phone size={17} />
            </IconButton>
          </a>
          <a href="#menu" className="hidden md:inline-flex">
            <IconButton label="Shop menu">
              <ShoppingBag size={17} />
            </IconButton>
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/70 text-zinc-100 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        className={`border-t border-zinc-800/70 bg-zinc-950 px-4 py-5 transition md:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <nav className="mx-auto flex max-w-md flex-col gap-1" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between rounded-xl px-3 py-3 text-zinc-300 hover:bg-zinc-900 hover:text-orange-400"
            >
              {label}
              <ChevronRight size={16} />
            </a>
          ))}
          <a href={whatsappHref} className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white">
            <MessageCircle size={17} />
            Order on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="mx-auto grid w-[min(1120px,calc(100%-2rem))] gap-10 pb-16 pt-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:pb-24 md:pt-24">
      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/10 px-3 py-1.5 text-xs font-medium text-orange-300">
          <Sparkles size={14} />
          Multan&apos;s Favorite Since 2020
        </div>
        <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.06em] text-zinc-100 sm:text-6xl md:text-7xl">
          Taste Crafted to Perfection.{" "}
          <span className="text-orange-500">Delivered Hot.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 md:text-lg">
          Multan&apos;s ultimate spot for loaded pizzas &amp; crispy zinger burgers. Fast delivery,
          incredible flavors, made fresh daily.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={whatsappHref} className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/25 transition hover:bg-emerald-500">
            <MessageCircle size={18} />
            Order on WhatsApp
          </a>
          <a href="#menu" className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800/80 px-5 py-3.5 text-sm font-semibold text-zinc-100 transition hover:border-zinc-500">
            <Utensils size={18} />
            Explore Menu
          </a>
        </div>
      </div>
      <div className="relative min-h-[330px] overflow-hidden rounded-3xl border border-orange-500/20 bg-zinc-900/60 p-4 shadow-2xl shadow-orange-950/20 backdrop-blur-md md:min-h-[440px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(249,115,22,0.28),transparent_48%)]" />
        <div
          className="absolute inset-7 rounded-[2rem] bg-cover bg-center shadow-2xl shadow-black/60"
          style={{
            backgroundImage:
              "linear-gradient(180deg,rgba(9,9,11,0.02),rgba(9,9,11,0.5)),url('https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1100&q=85')",
          }}
        />
        <div className="absolute bottom-8 left-8 rounded-2xl border border-white/10 bg-zinc-950/80 px-4 py-3 backdrop-blur-md">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-orange-400">Fresh from the oven</p>
          <p className="mt-1 text-sm font-semibold text-zinc-100">Made fresh. Served hot.</p>
        </div>
      </div>
    </section>
  );
}

export function FeatureStrip() {
  const features = [
    [Car, "Drive-Through Available", "Pull up, pick up, enjoy."],
    [Moon, "Late Night Cravings", "Opens 4 PM - 4 AM"],
    [Truck, "Fastest Delivery", "Samejabad & Multan"],
  ] as const;

  return (
    <section className="mx-auto grid w-[min(1120px,calc(100%-2rem))] gap-3 pb-20 md:grid-cols-3 md:gap-4" aria-label="Service highlights">
      {features.map(([Icon, title, copy]) => (
        <div key={title} className="flex items-center gap-4 rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-5 backdrop-blur-md">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-orange-500/10 text-orange-400">
            <Icon size={21} />
          </span>
          <div>
            <h2 className="text-sm font-semibold text-zinc-100">{title}</h2>
            <p className="mt-1 text-xs text-zinc-500">{copy}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export function ProductSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const visibleItems = activeFilter === "All" ? menuItems : menuItems.filter((item) => item.category === activeFilter);

  return (
    <section id="menu" className="mx-auto w-[min(1120px,calc(100%-2rem))] pb-24">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">From our kitchen</p>
          <h2 className="text-3xl font-black tracking-[-0.04em] text-zinc-100 sm:text-4xl">Our Signature Collection</h2>
          <p className="mt-3 text-zinc-500">The most loved pizzas and burgers in Multan.</p>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Menu categories">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                activeFilter === filter ? "bg-orange-600 text-white shadow-lg shadow-orange-600/20" : "border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
        {visibleItems.map((item) => (
          <article key={item.name} className="group overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-md">
            <div className="relative h-52 overflow-hidden bg-zinc-900">
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-zinc-950/75 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-orange-300 backdrop-blur">
                {item.category}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-zinc-100">{item.name}</h3>
              <p className="mt-2 min-h-12 text-sm leading-5 text-zinc-500">{item.description}</p>
              <div className="mt-5 flex items-center justify-between gap-3">
                <span className="text-lg font-bold text-orange-400">{item.price}</span>
                <a href={whatsappHref} className="inline-flex items-center gap-1.5 rounded-xl bg-orange-600 px-3 py-2.5 text-xs font-semibold text-white shadow-lg shadow-orange-600/20 transition hover:bg-orange-500">
                  <ShoppingBag size={15} />
                  Order Now
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="mx-auto w-[min(1120px,calc(100%-2rem))] pb-24">
      <div className="mb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">Local love</p>
        <h2 className="text-3xl font-black tracking-[-0.04em] text-zinc-100 sm:text-4xl">Good food travels fast.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3 md:gap-6">
        {reviews.map((review) => (
          <article key={review.author} className="rounded-3xl border border-zinc-800/80 bg-zinc-900/60 p-6 backdrop-blur-md">
            <div className="flex gap-1 text-orange-400" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, index) => <Star key={index} size={16} fill="currentColor" />)}
            </div>
            <p className="mt-5 min-h-20 leading-6 text-zinc-300">&quot;{review.text}&quot;</p>
            <p className="mt-5 text-sm font-semibold text-zinc-100">{review.author}</p>
          </article>
        ))}
      </div>
      <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-zinc-500">
        <Star size={15} className="text-orange-400" fill="currentColor" />
        4.1 Stars based on 170+ Google Reviews in Multan
      </p>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="location" className="border-t border-zinc-800/70 bg-black/20">
      <div className="mx-auto grid w-[min(1120px,calc(100%-2rem))] gap-10 py-12 md:grid-cols-[1.4fr_0.8fr_1.2fr_1fr]">
        <div>
          <Brand />
          <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-500">
            Loaded pizzas, crispy zingers, and late-night comfort food made fresh in Multan.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-zinc-100">Quick Links</h2>
          <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-500">
            <a href="#home" className="hover:text-orange-400">Home</a>
            <a href="#menu" className="hover:text-orange-400">Menu</a>
            <a href="#reviews" className="hover:text-orange-400">Reviews</a>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-zinc-100">Hours &amp; Location</h2>
          <p className="mt-4 flex gap-2 text-sm leading-6 text-zinc-500">
            <MapPin size={17} className="mt-0.5 shrink-0 text-orange-400" />
            Old Gas Pipeline Rd, Samejabad, Multan
          </p>
          <p className="mt-3 flex gap-2 text-sm text-zinc-500">
            <Moon size={17} className="shrink-0 text-orange-400" />
            Daily, 4 PM - 4 AM
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-zinc-100">Direct Contact</h2>
          <a href="tel:+923068655058" className="mt-4 flex items-center gap-2 text-sm text-zinc-500 hover:text-orange-400">
            <Phone size={17} className="text-orange-400" />
            +92 306 8655058
          </a>
          <a href={whatsappHref} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300">
            <MessageCircle size={17} />
            WhatsApp us
          </a>
        </div>
      </div>
      <div className="border-t border-zinc-900 py-5 text-center text-xs text-zinc-600">
        © 2026 Burgizza. Crafted in Multan.
      </div>
    </footer>
  );
}
