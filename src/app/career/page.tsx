'use client';
import CommonBanner from "@/component/Ui/CommonBanner";
import React from "react";
import CareerSection from "./component/CareerSection";

const CareerPage = () => {
  return (
    <>
      <CommonBanner
        title="Careers"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        buttonText="Apply Now"
        id="career"
      />
      <CareerSection />
    </>
  );
};

export default CareerPage;
