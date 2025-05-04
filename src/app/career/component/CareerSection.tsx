"use client";

import React, { useState } from "react";
import { Search, MapPin, Layers, ChevronDown } from "lucide-react";

import JobCard from "./JobCard";
import CustomButton from "@/component/Ui/ButtonComponent";
import { jobsData } from "@/utils/jobData";

const CareerSection = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobsData);

  const handleFilter = () => {
    const filtered = jobsData.filter((job) => {
      const matchTitle = job.job.toLowerCase().includes(search.toLowerCase());
      const matchLocation = location
        ? job.location.toLowerCase().includes(location.toLowerCase())
        : true;
      const matchExperience = experience
        ? job.experience.toLowerCase() === experience.toLowerCase()
        : true;
      return matchTitle && matchLocation && matchExperience;
    });
    setFilteredJobs(filtered);
  };

  return (
    <section className="w-full min-h-screen overflow-x-hidden py-[100px] px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 2xl:px-40 bg-[#272729] flex flex-col gap-[60px]">
      {/* Centered Search Form */}
      <div className="w-full max-w-[1320px] mx-auto">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleFilter();
          }}
          className="w-full bg-[#000000] rounded-[8px] border shadow-[0px_12px_40px_0px_#002C6D0A] flex flex-col md:flex-row items-center gap-4 md:gap-2 px-4 py-4"
        >
          {/* Search Input */}
          <div className="relative w-full md:flex-1">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FFFFFF]"
              size={20}
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Software Developer"
              className="w-full h-[56px] pl-10 pr-4 rounded-[5px] border border-[#FEA91F] bg-transparent text-[#FFFFFF] placeholder-[#FFFFFF]"
            />
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-[40px] bg-[#FFFFFF]"></div>

          {/* Location Input */}
          <div className="relative w-full md:flex-1">
            <MapPin
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FFFFFF]"
              size={20}
            />
            <input
              type="text"
              placeholder="Islamabad"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full h-[56px] pl-10 pr-4 rounded-[5px] border border-[#FEA91F] bg-transparent text-[#FFFFFF] placeholder:text-[#FFFFFF]"
            />
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-[40px] bg-[#FFFFFF]"></div>

          {/* Select Input */}
          <div className="relative w-full md:flex-1">
            <Layers
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FFFFFF]"
              size={20}
            />
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full h-[56px] pl-10 pr-10 rounded-[5px] border border-[#FEA91F] bg-[#000000] text-[#FFFFFF] appearance-none"
            >
              <option value="Entry Level">Entry Level</option>
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

          {/* Button */}
          <button
            type="submit"
            className="cursor-pointer w-full md:w-[200px] h-[56px] rounded-[4px] bg-[#FEA91F] text-[#FFFFFF] font-semibold hover:bg-[#FFFFFF] hover:text-[#FEA91F] transition-colors duration-200"
          >
            Find Jobs
          </button>
        </form>
      </div>

      {/* Centered Job Listings */}
      <div className="w-full max-w-[1320px] mx-auto flex flex-col gap-6">
    
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <JobCard
              key={index}
              title={job.title}
              job={job.job}
              description={job.description}
              level={job.experience}
              nature={job.jobNature}
              type={job.jobType}
              location={job.location}
            />
          ))
        ) : (
          <div className="text-center text-[#FFFFFF] text-xl font-[400] py-10">
            No Job Found!
          </div>
        )}
        {filteredJobs.length > 0 && (
          <div className="flex justify-center">
            <CustomButton text="View More Jobs" />
          </div>
        )}
      </div>
    </section>
  );
};

export default CareerSection;
