'use client";'
import SectionHeading from "@/component/Ui/Heading";
import Image from "next/image";
import React from "react";
import first from "../../../../public/assets/first.jpg";
import second from "../../../../public/assets/second.jpg";
import third from "../../../../public/assets/third.jpg";

const AboutSection = () => {
  return (
    <section className="w-full pt-[50px] pb-[50px] px-5 sm:px-10 md:px-[50px] lg:px-[110px] xl:px-[110px] bg-[#181819] flex justify-center">
      <div className="w-full max-w-[1300px] flex flex-col gap-[60px]">
        {/* Heading Section */}
        <div className="w-full flex flex-col gap-[24px] justify-center items-center">
          <div className="w-full flex flex-col gap-[10px] sm:gap-[16px] justify-center items-center">
            <SectionHeading headingText="About Us" />
            <span className="text-[28px] xs:text-[32px] sm:text-[36px] md:text-[40px] leading-[28px] xs:leading-[32px] sm:leading-[36px] md:leading-[40px] font-[700] text-center capitalize font-[Poppins] text-white">
              explore more about ahive
            </span>
            <p className="mt-4 w-full lg:text-[22px] md:text-[16px] font-[400] text-[#FFFFFF] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full flex flex-col gap-[95px]">
          {/* First Div */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Text Card */}
            <div className="w-full md:w-[594px] flex flex-col gap-[25px] p-[26px_30px] rounded-[6px] border border-[#FEA91F]">
              <span className="font-[Poppins] font-[700] text-[24px] sm:text-[26px] md:text-[30px] leading-[100%] capitalize">
                Build the right team to scale
              </span>
              <span className="font-[Poppins] font-[400] text-[16px] sm:text-[17px] md:text-[18px] leading-[100%]">
                Finding the right talent is not easy. We help you find the
                talent that suits your needs, follows your processes, and sticks
                with you long term (not the case with freelancers)
              </span>
              <span className="font-[Poppins] font-[400] text-[16px] sm:text-[17px] md:text-[18px] leading-[100%]">
                Our <span className="text-[#FEA91F]">delivery model</span> helps
                you cut costs and deliver within budget.
              </span>
            </div>

            {/* Image */}
            <div className="w-full md:w-[575px] h-[300px] md:h-[473px] rounded-[10px] bg-[#C4C4C4] overflow-hidden">
              <Image
                src={first}
                alt="About Image"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
          </div>

          {/* Second div */}
          <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center gap-8">
            {/* Image */}
            <div className="w-full md:w-[575px] h-[300px] md:h-[473px] rounded-[10px] bg-[#C4C4C4] overflow-hidden">
              <Image
                src={second}
                alt="About Image"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>

            {/* Text Card */}
            <div className="w-full md:w-[594px] flex flex-col gap-[25px] p-[26px_30px] rounded-[6px] border border-[#FEA91F]">
              <span className="font-[Poppins] font-[700] text-[24px] sm:text-[26px] md:text-[30px] leading-[100%] capitalize">
                Build the right team to scale
              </span>
              <span className="font-[Poppins] font-[400] text-[16px] sm:text-[17px] md:text-[18px] leading-[100%]">
                Finding the right talent is not easy. We help you find the
                talent that suits your needs, follows your processes, and sticks
                with you long term (not the case with freelancers)
              </span>
              <span className="font-[Poppins] font-[400] text-[16px] sm:text-[17px] md:text-[18px] leading-[100%]">
                Our <span className="text-[#FEA91F]">delivery model</span> helps
                you cut costs and deliver within budget.
              </span>
            </div>
          </div>

          {/* Third Div */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Text Card */}
            <div className="w-full md:w-[594px] flex flex-col gap-[25px] p-[26px_30px] rounded-[6px] border border-[#FEA91F]">
              <span className="font-[Poppins] font-[700] text-[24px] sm:text-[26px] md:text-[30px] leading-[100%] capitalize">
                Build the right team to scale
              </span>
              <span className="font-[Poppins] font-[400] text-[16px] sm:text-[17px] md:text-[18px] leading-[100%]">
                Finding the right talent is not easy. We help you find the
                talent that suits your needs, follows your processes, and sticks
                with you long term (not the case with freelancers)
              </span>
              <span className="font-[Poppins] font-[400] text-[16px] sm:text-[17px] md:text-[18px] leading-[100%]">
                Our <span className="text-[#FEA91F]">delivery model</span> helps
                you cut costs and deliver within budget.
              </span>
            </div>

            {/* Image */}
            <div className="w-full md:w-[575px] h-[300px] md:h-[473px] rounded-[10px] bg-[#C4C4C4] overflow-hidden">
              <Image
                src={third}
                alt="About Image"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
