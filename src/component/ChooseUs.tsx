"use client";
import React from "react";
import Image from "next/image";
import SectionHeading from "./Ui/Heading";
import innovation from "../../public/assets/Vector-bulb.png";
import collaboration from "../../public/assets/Vector-Col.png";
import security from "../../public/assets/Vector-sec.png";
import growth from "../../public/assets/Vector-growth.png";
import CustomButton from "./Ui/ButtonComponent";
import CustomTitle from "./Ui/ComonTitle";

const ChooseUs = () => {
  return (
    <>
      <section className="w-full bg-[#181819] text-[#FFFFFF] pt-[100px] pb-[100px] flex flex-col gap-[10px] overflow-hidden relative px-4 md:px-[50px] lg:px-[100px] xl:px-[110px]">
        {/* Section Heading */}
        <div className="w-full max-w-[1300px] flex flex-col gap-[60px] mx-auto">
          <div className="w-full flex flex-col gap-[40px] mx-auto">
            <div className="flex flex-col gap-[8px] justify-center items-center">
              <SectionHeading headingText="WHY CHOOSE US" />
            </div>
            <div className="flex flex-col gap-[12px] justify-center items-center">
              <CustomTitle text={"Empowering Possibilities"} />
              <CustomTitle text={" What We Can Do for You"} />
            </div>
          </div>

          {/* 4 Cards */}
          <div className="w-full max-w-[1277px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-[40px] md:gap-[60px] pt-[60px] relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute w-0.5 h-full bg-[#617D8B] left-1/2 top-0 transform -translate-x-1/2"></div>

            {/* Horizontal Line */}
            <div className="hidden md:block absolute h-0.5 w-full bg-[#617D8B] top-1/2 left-0 transform -translate-y-1/2"></div>

            {/* Innovation */}
            <div className="w-full max-w-[498px] h-auto p-[33px_24px] flex flex-col gap-[35px] mx-auto">
              <div className="flex items-center gap-[13px] justify-center">
                <div className="w-[56px] h-[56px] p-[10px] rounded-[19px] border-4 border-[#272729] flex items-center justify-center bg-[#272729]">
                  <Image
                    src={innovation}
                    alt="Innovation"
                    width={36}
                    height={36}
                  />
                </div>
                <span className="font-[Poppins] font-[700] text-[24px] md:text-[30px] leading-[100%] capitalize text-[#FEA91F]">
                  Innovation
                </span>
              </div>
              <p className="text-[#FFFFFF] text-[16px] md:text-[18px] leading-[28px] font-[400] text-center">
                We bring cutting-edge solutions that keep you ahead of the
                curve. Our team constantly explores emerging technologies to
                unlock new opportunities for your business.
              </p>
              <div className="flex justify-center items-center">
                <CustomButton text="Get Started" />
              </div>
            </div>

            {/* Collaboration */}
            <div className="w-full max-w-[498px] h-auto p-[33px_24px] flex flex-col gap-[35px] mx-auto">
              <div className="flex items-center gap-[13px] justify-center">
                <div className="w-[56px] h-[56px] p-[10px] rounded-[19px] border-4 border-[#272729] flex items-center justify-center bg-[#272729]">
                  <Image
                    src={collaboration}
                    alt="Collaboration"
                    width={36}
                    height={36}
                  />
                </div>
                <span className="font-[Poppins] font-[700] text-[24px] md:text-[30px] leading-[100%] capitalize text-[#FEA91F]">
                  Collaboration
                </span>
              </div>
              <p className="text-[#FFFFFF] text-[16px] md:text-[18px] leading-[28px] font-[400] text-center">
                We bring cutting-edge solutions that keep you ahead of the
                curve. Our team constantly explores emerging technologies to
                unlock new opportunities for your business.
              </p>
              <div className="flex justify-center items-center">
                <CustomButton text="Get Started" />
              </div>
            </div>

            {/* Security */}
            <div className="w-full max-w-[498px] h-auto p-[33px_24px] flex flex-col gap-[35px] mx-auto">
              <div className="flex items-center gap-[13px] justify-center">
                <div className="w-[56px] h-[56px] p-[10px] rounded-[19px] border-4 border-[#272729] flex items-center justify-center bg-[#272729]">
                  <Image src={security} alt="Security" width={36} height={36} />
                </div>
                <span className="font-[Poppins] font-[700] text-[24px] md:text-[30px] leading-[100%] capitalize text-[#FEA91F]">
                  Security
                </span>
              </div>
              <p className="text-[#FFFFFF] text-[16px] md:text-[18px] leading-[28px] font-[400] text-center">
                We bring cutting-edge solutions that keep you ahead of the
                curve. Our team constantly explores emerging technologies to
                unlock new opportunities for your business.
              </p>
              <div className="flex justify-center items-center">
                <CustomButton text="Get Started" />
              </div>
            </div>

            {/* Growth */}
            <div className="w-full max-w-[498px] h-auto p-[33px_24px] flex flex-col gap-[35px] mx-auto">
              <div className="flex items-center gap-[13px] justify-center">
                <div className="w-[56px] h-[56px] p-[10px] rounded-[19px] border-4 border-[#272729] flex items-center justify-center bg-[#272729]">
                  <Image src={growth} alt="Growth" width={36} height={36} />
                </div>
                <span className="font-[Poppins] font-[700] text-[24px] md:text-[30px] leading-[100%] capitalize text-[#FEA91F]">
                  Growth
                </span>
              </div>
              <p className="text-[#FFFFFF] text-[16px] md:text-[18px] leading-[28px] font-[400] text-center">
                We bring cutting-edge solutions that keep you ahead of the
                curve. Our team constantly explores emerging technologies to
                unlock new opportunities for your business.
              </p>
              <div className="flex justify-center items-center">
                <CustomButton text="Get Started" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseUs;
