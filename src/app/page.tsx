import About from "@/components/About";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="container mx-auto px-6 py-10 text-white space-y-16">
      <About />
      <AboutUs />
      <Footer />
    </main>
  );
}

