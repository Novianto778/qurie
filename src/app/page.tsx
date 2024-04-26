import Feature from "@/components/features/landing-page/feature";
import Footer from "@/components/features/landing-page/footer";
import Hero from "@/components/features/landing-page/hero";
import How from "@/components/features/landing-page/how";

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <How />
      <Footer />
    </main>
  );
}
