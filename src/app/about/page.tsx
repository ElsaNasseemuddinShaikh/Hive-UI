'use client';
import CommonBanner from "@/component/Ui/CommonBanner";
import TeamSection from "@/component/OurTeam";
import VideoCarousel from "@/component/Slider";
import React from "react";
import AboutSection from "./component/AboutSection";

const AboutPage = () => {
  return (
    <>
      <CommonBanner
        title="About Us"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus"
        buttonText="Schedule A Consultation"
        id="about"
      />
      <TeamSection />
      <AboutSection />
      <VideoCarousel title={"Company History"} />
    </>
  );
};

export default AboutPage;
