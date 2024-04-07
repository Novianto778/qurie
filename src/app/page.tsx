import Feature from "@/components/features/landing-page/feature";
import Hero from "@/components/features/landing-page/hero";
import Navbar from "@/components/ui/layout/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Feature />
    </main>
  );
}
