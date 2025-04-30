"use client";
import React from "react";
import CustomButton from "./Ui/ButtonComponent";
import group from "../../public/assets/Group.png";
import ai_logo from "../../public/assets/ai logo.png";
import Image from "next/image";

const BannerSection = () => {
  return (
    <section className="bg-[#181819] text-[#FFFFFF] w-full max-w-full h-auto lg:h-[710px] flex flex-col lg:flex-row items-center justify-between gap-[40px] sm:gap-[30px] px-6 sm:px-10 md:px-20 lg:px-[145px] py-10 sm:py-14 md:py-20 lg:py-[100px] overflow-hidden">
      {/* Content Section */}
      <div className="w-full lg:w-[877px] h-auto lg:h-[347px] flex flex-col gap-6">
        <div className="text-[40px] sm:text-[40px] md:text-[40px] lg:text-[30px] xl:text-[60px] leading-tight font-[Poppins] flex flex-col gap-3">
          <span
            className="bg-clip-text text-transparent font-[700] font-[Poppins] lg:text-[50px]"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #FEA91F 0%, #FFDF59 25%, #FEA91F 50%, #FEA91F 100%)",
            }}
          >
            Artificial Intelligence
          </span>

          <span className="capitalize font-[700] font-[Poppins] lg:text-[50px]">
            for Business Applications
          </span>
        </div>

        <p className="mt-2 text-[16px] sm:text-[18px] md:text-[18px] lg:text-[22px] font-[400] text-[#FFFFFF]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <div className="mt-4">
          <CustomButton text="Learn More" />
        </div>
      </div>

    
     {/* Image Section */}
     <div className="w-full sm:w-[500px] md:w-[600px] lg:w-[716.87px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[710px] flex items-center justify-center relative overflow-hidden">
        <div className="relative w-full h-full">
          {/* Background circuit image */}
          <Image
            src={group || "/placeholder.svg"}
            alt="Circuit Graphic"
            layout="fill"
            objectFit="contain"
            className="pointer-events-none"
          />

          {/* Centered AI logo */}
          <div className="absolute inset-0 flex items-center justify-center z-10 transform translate-y-[-0%] translate-x-[3%]">
            <div className="relative w-[300px] h-[700px] xs:w-[350px] xs:h-[350px] sm:w-[450px] sm:h-[450px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[430px]">
              <Image
                src={ai_logo || "/placeholder.svg"}
                alt="AI Logo"
                layout="fill"
                objectFit="contain"
                className="pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default BannerSection;
