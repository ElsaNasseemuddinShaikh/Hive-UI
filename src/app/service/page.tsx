"use client";
import CommonBanner from "@/component/Ui/CommonBanner";
import React from "react";
import ServiceSection from "./component/ServiceSection";

const ServicePage = () => {
  return (
    <>
      <CommonBanner
        title="Explore our services"
        description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing"
        buttonText="Schedule A Consultation"
        id="service"
      />
      <ServiceSection id="service" />
    </>
  );
};

export default ServicePage;
