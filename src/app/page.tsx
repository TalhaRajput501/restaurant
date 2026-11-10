import {
  FeatureStrip,
  Footer,
  Header,
  HeroSection,
  ProductSection,
  ReviewsSection,
} from "@/components/restaurant";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Header />
      <HeroSection />
      <FeatureStrip />
      <ProductSection />
      <ReviewsSection />
      <Footer />
    </main>
  );
}
