"use client";
import type React from "react";

interface CustomButtonProps {
  text: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer min-h-[40px] h-auto px-3 py-2 xs:px-4 xs:py-2 sm:px-5 sm:py-2 md:px-6 md:py-2.5 lg:px-8 lg:py-3 xl:px-[32px] xl:py-[10px] 
      border-2 border-[#FEA91F] hover:text-[#FEA91F] hover:font-[700] rounded-[40px] 
      text-white font-semibold text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] 
      uppercase transition-all whitespace-normal break-words max-w-full w-auto inline-block"
    >
      <span className="block px-1 leading-tight">{text}</span>
    </button>
  );
};

export default CustomButton;
