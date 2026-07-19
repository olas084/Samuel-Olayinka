import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Stack from "@/components/Stack";
import Markets from "@/components/Markets";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-ink min-h-screen">
      <NavBar />
      <Hero />
      <About />
      <Products />
      <Stack />
      <Markets />
      <Contact />
      <Footer />
    </main>
  );
}
