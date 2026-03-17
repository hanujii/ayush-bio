import Header from "@/components/Header";
import Projects from "@/components/Projects";
import SocialLinks from "@/components/SocialLinks";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="max-w-[640px] mx-auto px-4">
      <Header />
      <div className="h-[1px] bg-black/10 my-10 fade-up delay-2"></div>
      <Projects />
      <div className="h-[1px] bg-black/10 my-10 fade-up delay-3"></div>
      <SocialLinks />
      <div className="h-[1px] bg-black/10 my-10 fade-up delay-4"></div>
      <Contact />
    </main>
  );
}
