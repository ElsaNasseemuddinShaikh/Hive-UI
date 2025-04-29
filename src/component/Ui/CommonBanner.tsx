"use client";

import Image from "next/image";
import type React from "react";
import aboutus from "../../../public/assets/aboutUs.png";
import service from "../../../public/assets/services2.png";
import contact from "../../../public/assets/contact-us.png";
import career from "../../../public/assets/career.png";
import CustomButton from "./ButtonComponent";
import { CommonBannerProps } from "@/utils/types";

const CommonBanner: React.FC<CommonBannerProps> = ({
  title,
  description,
  buttonText,
  id,
}) => {
  const getImage = () => {
    switch (id) {
      case "about":
        return aboutus;
      case "career":
        return career;
      case "contact":
        return contact;
      case "service":
        return service;
      default:
        return "/placeholder.svg";
    }
  };

  return (
    <section className="w-full h-auto bg-[#181819] pt-[40px] xs:pt-[50px] sm:pt-[60px] md:pt-[100px] lg:pt-[160px] px-4 sm:px-6 md:px-8 lg:px-10 xl:pr-[310px] xl:pl-[152px] pb-[40px] xs:pb-[50px] sm:pb-[60px] md:pb-[100px] lg:pb-[160px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-[20px] xs:gap-[25px] sm:gap-[30px] md:gap-[40px] lg:gap-[60px] w-full max-w-[1458px] h-full mx-auto">
        {/* Left Text Section */}
        {/* <div className="flex flex-col gap-[16px] xs:gap-[20px] sm:gap-[24px] w-full lg:w-[60%] xl:w-[839px] h-auto"> */}
        <div className="flex flex-col justify-center gap-[16px] xs:gap-[20px] sm:gap-[24px] w-full lg:w-[60%] xl:w-[839px] h-auto">
          <div className="w-full flex flex-col gap-[8px] xs:gap-[10px] sm:gap-[12px] h-auto">
            <span className="text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[1.2] font-[700] capitalize font-[Poppins] text-white">
              {title}
            </span>
            <p className="mt-2 xs:mt-3 sm:mt-4 w-full text-[16px] xs:text-[17px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-[400] text-[#FFFFFF]">
              {description}
            </p>
            <div className="mt-2 xs:mt-3 sm:mt-4 md:mt-6">
              <CustomButton text={buttonText} />
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-[40%] xl:w-[559px] h-auto mt-4 lg:mt-0 flex items-center justify-center">
          <Image
            src={getImage() || "/placeholder.svg"}
            alt={`${id} banner image`}
            width={559}
            height={522}
            className="object-contain w-full max-w-full xs:max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[559px] h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default CommonBanner;
