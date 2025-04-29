"use client";
import Image from "next/image";
import about from "../../public/assets/about.png";
import SectionHeading from "./Ui/Heading";

const AboutSection = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="flex flex-col lg:flex-row md:flex-col gap-[30px] lg:gap-[40px] w-full px-[10px]">
        <div className="w-full lg:w-[653px] h-[300px] lg:h-[435px] overflow-hidden rounded-[30px] flex-shrink-0">
          <Image
            src={about || "/placeholder.svg"}
            alt="About Us"
            width={653}
            height={435}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="flex flex-col justify-start flex-1 h-auto lg:h-[435px] gap-5 lg:max-w-[calc(100%-713px)]">
          <SectionHeading headingText="About Us" />
          <span className="xl:text-[40px] lg:text-[25px] md:text-[30px] sm:text-[40px] text-[28px] leading-[32px] sm:leading-[40px] font-[700] capitalize font-[Poppins]">
            A Tale of Passion, Purpose, and Excellence
          </span>
          <span className="mt-4 text-[18px] xl:text-[22px] font-[Poppins] lg:text-[14px] md:text-[18px] sm:text-[16px] xs:text-[16px] font-[400] text-[#FFFFFF]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore
            minus perspiciatis autem voluptates magni alias reprehenderit,
            eligendi, beatae harum totam doloremque, eaque iure. Maxime in
            necessitatibus, deleniti unde optio, cupiditate pariatur modi neque
            sequi, totam soluta dignissimos fugiat consequatur.
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
