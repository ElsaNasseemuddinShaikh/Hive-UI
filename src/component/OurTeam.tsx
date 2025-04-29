"use client";

import Image from "next/image";

import SectionHeading from "./Ui/Heading";
import CustomTitle from "./Ui/ComonTitle";
import { teamMembers } from "@/utils/teamData";

const TeamSection = () => {

  return (
    <section className="w-full h-auto text-white pt-[100px] px-4 sm:px-[40px] md:px-[80px] lg:px-[110px] xl:px-[310px] pb-[100px] flex flex-col gap-[60px]">
      <div className="w-full flex flex-col gap-[12px] justify-center items-center">
        <SectionHeading headingText="Our Team" />
        <CustomTitle text={"Meet Our Team"} />
      </div>

      <div className="w-ful">
        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#484E56] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 w-full lg:w-[400px]"
            >
              <div className="h-80 relative">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="bg-[#FFFFFF] text-[#000000] text-center py-4 px-2">
                <h3 className="font-[700] text-[20px] text-[#181819]">
                  {member.name}
                </h3>
                <p className="text-[#272729] text-[18px] font-[Poppins] font-[400]">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
