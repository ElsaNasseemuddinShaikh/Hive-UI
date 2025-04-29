"use client";
import SectionHeading from "@/component/Ui/Heading";
import Image from "next/image";

import CustomButton from "@/component/Ui/ButtonComponent";
import CustomTitle from "@/component/Ui/ComonTitle";
import { cardItem } from "@/utils/serviceData";

const ServiceSection = ({ id }: { id: string }) => {
  return (
    <section
      className={`w-full ${
        id === "home" ? `bg-[#181819]` : `bg-[#272729]`
      } py-[50px] xs:py-[60px] sm:py-[80px] md:py-[100px] px-[20px] xs:px-[30px] sm:px-[50px] md:px-[10px] lg:px-[20px] xl:px-[10px] h-auto sm:h-auto md:h-auto lg:h-auto`}
    >
      <div className="w-full  mx-auto flex flex-col gap-[30px] sm:gap-[40px] md:gap-[50px] lg:gap-[60px]">
        {/* Heading */}
        <div className="w-full flex flex-col gap-[10px] sm:gap-[16px] justify-center items-center">
          <SectionHeading headingText="Our Services" />
          <CustomTitle text={"Services we offer"} />
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-[20px] xs:gap-[25px] sm:gap-[30px] md:gap-[35px] lg:gap-[40px]">
          {cardItem.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-center items-center bg-[#000000] rounded-[20px] 
  p-[10px] xs:p-[12px] sm:p-[15px]
  w-[150px] h-[120px]
  xs:w-[160px] xs:h-[130px]
  sm:w-[175px] sm:h-[135px]
  md:w-[185px] md:h-[140px]
  lg:w-[193px] lg:h-[143px]
    transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg
  ${
    index === 2 || index === 4
      ? "mt-[15px] sm:mt-[20px] md:mt-[25px] lg:mt-[30px]"
      : ""
  }
  ${index === 3 ? "shadow-md" : ""}
  `}
              style={{
                ...(index === 3 && {
                  boxShadow: "0px 4px 4px 0px #EFF6FF",
                  height: "200px",
                }),
              }}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={40}
                height={38}
                className="mb-[6px] xs:mb-[8px] sm:mb-[10px] w-[40px] h-[38px] xs:w-[45px] xs:h-[43px] sm:w-[50px] sm:h-[48px] md:w-[52px] md:h-[50px]"
              />
              <span className="font-[700] text-[9px] xs:text-[10px] sm:text-[11px] leading-[100%] tracking-[1px] text-center font-[SF Pro Display] mb-[4px] sm:mb-[6px]">
                {item.title}
              </span>
              <span className="font-[500] text-[7px] xs:text-[8px] sm:text-[9px] leading-[100%] tracking-[1px] text-center font-[SF Pro Display] px-[5px]">
                {item.description}
              </span>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col gap-[10px] sm:gap-[16px] justify-center items-center">
          <div className="mt-2 md:mt-4">
            <CustomButton text={"View More Services"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
