import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Benefits } from "@/components/sections/benefits";
import { CaseStudy } from "@/components/sections/case-study";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { Pricing } from "@/components/sections/pricing";
import { Process } from "@/components/sections/process";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full flex-1">
        <Hero />
        <Pricing />
        <Benefits />
        <Process />
        <CaseStudy />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
