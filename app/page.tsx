import Hero from "../components/Hero";
import Marquee from "../components/home/Marquee";
import ValueBento from "../components/home/ValueBento";
import Positioning from "../components/home/Positioning";
import SettlementShowcase from "../components/home/SettlementShowcase";
import Industries from "../components/home/Industries";
import CTASection from "../components/home/CTASection";

export default function HomePage(): JSX.Element {
  return (
    <div className="relative z-10">
      <Hero />
      <Marquee />
      <ValueBento />
      <Positioning />
      <SettlementShowcase />
      <Industries />
      <CTASection />
    </div>
  );
}
