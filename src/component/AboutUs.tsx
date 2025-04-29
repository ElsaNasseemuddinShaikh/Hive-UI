"use client";
import Image from "next/image";
import React from "react";
import about from "../../public/assets/about.png";
import SectionHeading from "./Ui/Heading";

const AboutSection = () => {
  return (
    <section className="w-full px-4 lg:px-[145px] py-[50px] lg:py-[100px] gap-[10px] bg-[#272729] text-[#FFFFFF]">
      <div className="flex flex-col lg:flex-row md:flex-col gap-[30px] lg:gap-[60px]">
        {/* image section */}
        <div className="w-full lg:w-[653px] h-[300px] lg:h-[435px] overflow-hidden rounded-[30px]">
          <Image
            src={about}
            alt="About Us"
            width={653}
            height={435}
            className="object-cover w-full h-full"
          />
        </div>
        {/* content section */}
        <div className="flex flex-col justify-start flex-1 h-auto lg:h-[435px] gap-5">
          <SectionHeading headingText="About Us" />
          <span className="text-[32px] sm:text-[40px] leading-[32px] sm:leading-[40px] font-[700] capitalize font-[Poppins]">
            A Tale of Passion, Purpose, and Excellence
          </span>
          <span className="mt-4 w-full lg:w-[877px] text-[18px] font-[Poppins] lg:text-[22px] font-[400] text-[#FFFFFF]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
            nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo.
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
