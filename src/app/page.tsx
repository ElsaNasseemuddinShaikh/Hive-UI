import BannerSection from "@/component/Banner";

import AboutSection from "@/component/AboutUs";
import Trusted from "@/component/Trusted";
import ChooseUs from "@/component/ChooseUs";
import TeamSection from "@/component/OurTeam";
import VideoCarousel from "@/component/Slider";
import FAQSection from "@/component/Faq";
import TestimonialSection from "@/component/Testimonial";

import ServiceSection from "./service/component/ServiceSection";

export default function Home() {
  return (
    <div>
      <main>
        <BannerSection />
        <AboutSection />
        <Trusted />
        <ChooseUs />
        <TeamSection />
        <ServiceSection id="home"/>
        <VideoCarousel title={"Exploring The World"} />
        <TestimonialSection />
        <FAQSection />
      </main>
    </div>
  );
}
