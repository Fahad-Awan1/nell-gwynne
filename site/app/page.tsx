import MotionRoot from "@/components/motion/MotionRoot";
import Hero from "@/components/home/Hero";
import MenuShowcase from "@/components/home/MenuShowcase";
import Fixtures from "@/components/home/Fixtures";
import SocialPhones from "@/components/home/SocialPhones";
import { AboutTeaser, OffersWall, StatsBand, Testimonials, Visit } from "@/components/home/Sections";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <MenuShowcase />
      <Fixtures />
      <OffersWall />
      <StatsBand />
      <SocialPhones />
      <Testimonials />
      <Visit />
      <MotionRoot />
    </>
  );
}
