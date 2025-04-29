"use client";
import { useState } from "react";
import Image from "next/image";
import slider from "../../public/assets/slider.png";
import quoteMarkIcon from "../../public/assets/Frame.png";
import SectionHeading from "./Ui/Heading";
import CustomTitle from "./Ui/ComonTitle";
import { testimonials } from "@/utils/testimonialData";

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="w-full bg-[#181819] py-[100px] flex flex-col items-center">
      <div className="flex flex-col items-center gap-[60px] max-w-[1300px] w-full px-4">
        <div className="flex flex-col gap-[12px] items-center text-center">
          <SectionHeading headingText="OUR TESTIMONIALS" />
          <CustomTitle text={"see what our clients say about us"} />
        </div>

        {/* Image and Testimonial */}
        <div className="relative w-full h-[640px] flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-[640px] lg:w-[791px]">
            <Image
              src={slider}
              alt="Slider Image"
              fill
              className="rounded-[30px] object-cover"
            />
          </div>

          {/* Testimonial Card */}
          <div
            className={`bg-white rounded-[30px] border-2 border-[#FEA91F] shadow-md flex flex-col items-center px-[50px] py-[20px] gap-[30px] z-10 
              lg:absolute lg:right-40 lg:mr-[30px] relative mx-auto mt-4
            `}
            style={{
              width: "630px",
              height: "459px",
              boxShadow: "0px 5px 20px 0px #0000001A",
            }}
          >
            <div className="flex flex-col gap-[55px] w-full">
              <div className="w-[88px] h-[80px]">
                <Image
                  src={quoteMarkIcon}
                  alt="Quote Mark"
                  width={88}
                  height={80}
                  className="object-contain"
                />
              </div>

              <span className="text-[#484848] text-[22px] font-[400] leading-[100%] font-[Poppins] capitalize">
                {testimonials[currentTestimonial].text}
              </span>

              {/* Author Info */}
              <div className="flex justify-between items-center w-full">
                <div>
                  <h4 className="text-[#181819] font-[Poppins] font-[700] text-[30px] leading-[100%] capitalize">
                    {testimonials[currentTestimonial].name}
                  </h4>

                  <p className="text-[#484848] font-[Poppins] font-[400] text-[22px] leading-[100%] capitalize">
                    {testimonials[currentTestimonial].designation}
                  </p>
                </div>

                {/* Pagination Dots */}
                <div
                  className="flex gap-[10px]"
                  style={{ width: "64px", height: "24px" }}
                >
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className="cursor-pointer w-[27px] h-[27px] p-[7px] rounded-full border-2 border-[#000000] flex justify-center items-center"
                      aria-label={`Go to testimonial ${index + 1}`}
                      style={{
                        border:
                          index === currentTestimonial
                            ? "2px solid #000000"
                            : "2px solid #FFFFFF",
                      }}
                    >
                      <span
                        className={`w-[25px] h-[10px] rounded-full ${
                          index === currentTestimonial
                            ? "bg-[#000000]"
                            : "bg-[#000000]"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
