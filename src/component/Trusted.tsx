'use client";'
import React from "react";
import Image from "next/image";
import logo1 from "../../public/assets/logo1.png";
import logo2 from "../../public/assets/logo2.png";
import logo3 from "../../public/assets/logo3.png";
import logo4 from "../../public/assets/logo4.png";

const Trusted = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-[40px] py-[40px] sm:py-[60px] overflow-hidden">
      {/* Heading */}
      <span className="text-[32px] sm:text-[40px] font-[Poppins] font-[700] leading-[32px] sm:leading-[40px] text-center capitalize text-[#FEA91F]">
        Our Trusted Partners
      </span>

      {/* Marquee container */}
      <div className="relative w-full overflow-hidden h-[50px] sm:h-[60px]">
        <div className="flex w-max animate-marquee whitespace-nowrap gap-[60px] sm:gap-[80px]">
          {/* Logos repeated twice for smooth continuous animation */}
          {[logo1, logo2, logo3, logo4, logo1, logo2, logo3, logo4].map((logo, idx) => (
            <Image
              key={idx}
              src={logo}
              alt={`Logo ${idx + 1}`}
              width={200}
              height={50}
              className="sm:w-[234px] sm:h-[50px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trusted;
