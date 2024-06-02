import Advantages from "@/components/Advantages";
import DownloadApp from "@/components/DownloadApp";
import Faqs from "@/components/Faqs";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto md:pt-[40px] max-2xl:overflow-hidden">
      <Navbar />
      <Hero />
      <Feature />
      <Advantages />
      <Testimonial />
      <Faqs />
      <DownloadApp />
      <Footer />
    </main>
  );
}
