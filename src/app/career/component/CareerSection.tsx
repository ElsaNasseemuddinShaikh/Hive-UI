"use client";

import React from "react";
import { Search, MapPin, Layers, ChevronDown } from "lucide-react";

import JobCard from "./JobCard";
import CustomButton from "@/component/Ui/ButtonComponent";
import { jobsData } from "@/utils/jobData";

const CareerSection = () => {
  return (
    <section className="w-full min-h-screen gap-[60px] py-[100px] px-4 md:px-[70px] lg:px-[110px] xl:px-[310px] bg-[#272729] flex flex-col">
      <form className="w-full max-w-[1320px] h-auto md:h-[80px] rounded-[8px] border bg-[#000000] shadow-[0px_12px_40px_0px_#002C6D0A] flex flex-col md:flex-row items-center px-4 gap-4 md:gap-1">
        {/* Search Input */}
        <div className="relative w-full md:w-[375px]">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FFFFFF]"
            size={20}
          />
          <input
            type="text"
            placeholder="Software Developer"
            className="w-full h-[56px] pl-10 pr-4 rounded-[5px] border border-[#FEA91F] bg-transparent text-[#FFFFFF] placeholder-[#FFFFFF]"
          />
        </div>

        {/* Divider */}
        <div className="hidden md:block w-[48px] h-[1px] bg-[#FFFFFF] rotate-90"></div>

        {/* Location Input */}
        <div className="relative w-full md:w-[375px]">
          <MapPin
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FFFFFF]"
            size={20}
          />
          <input
            type="text"
            placeholder="Islamabad"
            className="w-full h-[56px] pl-10 pr-4 rounded-[5px] border border-[#FEA91F] bg-transparent text-[#FFFFFF] placeholder-[#FFFFFF]"
          />
        </div>

        {/* Divider */}
        <div className="hidden md:block w-[48px] h-[1px] bg-[#FFFFFF] rotate-90"></div>

        {/* Select Box */}
        <div className="relative w-full md:w-[375px]">
          <Layers
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FFFFFF]"
            size={20}
          />
          <select className="w-full h-[56px] pl-10 pr-10 rounded-[5px] border border-[#FEA91F] bg-[#000000] text-white placeholder-white appearance-none">
            <option value="">Entry Level</option>
            <option value="fresher">Fresher</option>
            <option value="intern">Intern</option>
            <option value="junior">Junior</option>
            <option value="senior">Senior</option>
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#FFFFFF] pointer-events-none"
            size={20}
          />
        </div>

        {/* Find Jobs Button */}
        <button
          type="button"
          className="hover:bg-[#FFFFFF] hover:text-[#FEA91F] cursor-pointer w-full md:w-[258px] h-[56px] md:ml-6 rounded-[4px] bg-[#FEA91F] text-[#FFFFFF] font-semibold"
        >
          Find Jobs
        </button>
      </form>

      <div className="w-full max-w-[1320px] flex flex-col gap-6">
        {jobsData.map((job, index) => (
          <JobCard
            key={index}
            title={job.title}
            job={job.job}
            description={job.description}
          />
        ))}
        <div className="flex justify-center">
          <CustomButton text="View More Jobs" />
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
