'use client';
import React from "react";

const SectionHeading = ({ headingText }: { headingText: string }) => {
  return (
    <div>
      <h2 className="text-[20px] font-[Poppins] font-[700] leading-[100%] tracking-[0%] uppercase text-[#FEA91F]">
        {headingText}
      </h2>
      <div className="w-[109px] h-[5px] bg-[#FEA91F] rounded-[10px] mt-[20px]" />
    </div>
  );
};

export default SectionHeading;
