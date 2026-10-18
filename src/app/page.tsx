import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}