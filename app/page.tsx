import Hero from "./components/Hero";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import Fleet from "./components/Fleets";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Services />
      <Benefits />
      <Fleet />
      <CTA />
      <Footer />
    </main>
  );
}
