"use client";
import React from "react";

interface Props {
  text: string;
}

const CustomTitle: React.FC<Props> = ({ text }) => {
  return (
    <span className="text-[32px] sm:text-[40px] leading-[32px] sm:leading-[40px] font-[700] text-center capitalize font-[Poppins]">
      {text}
    </span>
  );
};

export default CustomTitle;
