"use client"

import type React from "react"
import CustomButton from "./ButtonComponent"
import type { CommonBannerProps } from "@/utils/types"
import about_bg from "../../../public/assets/about-bg.png"
import service_bg from "../../../public/assets/service-bg.png"
import contact_bg from "../../../public/assets/contact-bg.png"
import career_bg from "../../../public/assets/career-bg.png"

const CommonBanner: React.FC<CommonBannerProps> = ({ title, description, buttonText, id }) => {
  const getImage = () => {
    switch (id) {
      case "about":
        return about_bg
      case "career":
        return career_bg
      case "contact":
        return contact_bg
      case "service":
        return service_bg
      default:
        return { src: "/placeholder.svg" }
    }
  }
  return (
    <section
      className="relative w-full min-h-[280px] h-auto py-10 xs:py-12 sm:py-16 md:py-20 lg:py-24 bg-cover bg-center bg-no-repeat flex items-center justify-center px-3 xs:px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[152px]"
      style={{
        backgroundImage: `url(${getImage().src})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-0" style={{ backgroundColor: "#181819F2" }} />
      <div className="relative z-10 text-center w-full max-w-[95%] xs:max-w-[90%] sm:max-w-[85%] md:max-w-2xl lg:max-w-4xl xl:max-w-5xl py-4 md:py-6 lg:py-8">
        <h1 className="text-white text-[22px] xs:text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] xl:text-[60px] font-bold font-[Poppins] mb-3 sm:mb-4 md:mb-5 px-1">
          {title}
        </h1>
        <p className="text-white text-[14px] xs:text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] mb-5 sm:mb-6 md:mb-7 px-1 mx-auto max-w-full">
          {description}
        </p>
        <div className="mt-2">
          <CustomButton text={buttonText} />
        </div>
      </div>
    </section>
  )
}

export default CommonBanner
