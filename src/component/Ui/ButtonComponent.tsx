"use client";
import React from "react";

interface CustomButtonProps {
  text: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer h-[53px] px-[32px] py-[10px] gap-[10px] border-2 border-[#FEA91F] hover:text-[#FEA91F] hover:font-[700] rounded-[40px] text-white font-semibold text-[18px] uppercase transition-all"
    >
      {text}
    </button>
  );
};

export default CustomButton;
