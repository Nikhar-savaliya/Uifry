import Advantages from "@/components/Advantages";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <Navbar />
      <Hero />
      <Feature />
      <Advantages />
      <Testimonial />
    </main>
  );
}
