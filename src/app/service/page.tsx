'use client';
import CommonBanner from "@/component/Ui/CommonBanner";
import React from "react";
import ServiceSection from "./component/ServiceSection";

const ServicePage = () => {
  return (
    <>
      <CommonBanner
        title="Explore our services"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        buttonText="Schedule A Consultation"
        id="service"
      />
      <ServiceSection id='service'/>
    </>
  );
};

export default ServicePage;
