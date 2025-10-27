import Header from "@/react-app/components/Header";
import Hero from "@/react-app/components/Hero";
import Products from "@/react-app/components/Products";
import Farm from "@/react-app/components/Farm";
import Contact from "@/react-app/components/Contact";
import Footer from "@/react-app/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <Farm />
      <Contact />
      <Footer />
    </div>
  );
}
