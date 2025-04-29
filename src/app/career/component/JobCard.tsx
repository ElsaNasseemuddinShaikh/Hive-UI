"use client";
import Image from "next/image";
import type React from "react";
import location from "../../../../public/assets/Vector-location.png";
import { JobCardProps } from "@/utils/types";

const JobCard: React.FC<JobCardProps> = ({ title, job, description }) => {
  return (
    <div className="w-full max-w-[1320px] mx-auto h-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-[61px] rounded-[8px] xs:rounded-[10px] border border-[#FEA91F] p-4 xs:p-5 sm:p-6 shadow-[0px_0px_10px_0px_#0A153926]">
      <div className="w-full md:w-[70%] lg:w-[75%] xl:w-[969px] h-auto flex flex-col gap-2 xs:gap-3 sm:gap-4">
        <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 w-full h-auto">
          <Image
            src={location || "/placeholder.svg"}
            alt="Location"
            className="w-[16px] h-[16px] xs:w-[18px] xs:h-[18px] sm:w-[21px] sm:h-[21px]"
          />
          <span className="font-[Palatino] italic text-[12px] xs:text-[13px] sm:text-[14px] leading-[1.2] text-[#FFFFFF]">
            {title}
          </span>
        </div>

        <span className="w-full h-auto font-[Poppins] font-[700] text-[20px] xs:text-[24px] sm:text-[28px] md:text-[30px] leading-[1.2] capitalize text-[#FEA91F]">
          {job}
        </span>

        <span className="w-full font-[Poppins] font-[400] text-[14px] xs:text-[16px] sm:text-[18px] leading-[1.4] text-[#FFFFFF]">
          {description}
        </span>
      </div>

      <div className="w-full md:w-auto flex justify-center md:justify-end items-center mt-4 md:mt-0">
        <button className="cursor-pointer hover:bg-[#FFFFFF] hover:text-[#FEA91F] transition-colors duration-300 uppercase w-full xs:w-[180px] sm:w-[203px] h-[45px] xs:h-[50px] sm:h-[59px] flex items-center justify-center gap-[10px] px-[20px] xs:px-[25px] sm:px-[32px] py-[8px] xs:py-[9px] sm:py-[10px] rounded-full border-2 border-[#FEA91F] bg-[#FEA91F] text-[#FFFFFF] text-[16px] xs:text-[18px] sm:text-[20px] font-[700]">
          APPLY NOW
        </button>
      </div>
    </div>
  );
};

export default JobCard;
