"use client";
import CommonBanner from "@/component/Ui/CommonBanner";
import React from "react";
import CareerSection from "./component/CareerSection";

const CareerPage = () => {
  return (
    <>
      <CommonBanner
        title="Careers"
        description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing"
        buttonText="Apply Now"
        id="career"
      />
      <CareerSection />
    </>
  );
};

export default CareerPage;
