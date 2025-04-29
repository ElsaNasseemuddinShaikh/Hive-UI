"use client";

import { useState } from "react";
import Image from "next/image";

import CustomButton from "./Ui/ButtonComponent";
import SectionHeading from "./Ui/Heading";
import CustomTitle from "./Ui/ComonTitle";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import { videos } from "@/utils/sliderData";

const VideoCarousel = ({ title }: { title: string }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  return (
    <section className="bg-[#272729] text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="w-full flex flex-col gap-[12px] justify-center items-center">
          <SectionHeading headingText="OUR VIDEOS" />
          <CustomTitle text={title} />
          <p className="mt-4 sm:text-[18px] text-[22px] font-[400] text-[#FFFFFF] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Video Carousel */}
        <div className="relative mb-10 flex items-center mt-10 ">
          {/* Navigation Arrow - Left */}
          <button
            onClick={prevSlide}
            className="cursor-pointer flex-shrink-0 mr-4 bg-transparent rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300"
            aria-label="Previous slide"
          >
            <ArrowLeftCircle className="text-[#FEA91F] w-10 h-10 " />
          </button>
          {/* Video Slide */}
          <div className="relative rounded-2xl overflow-hidden aspect-video flex-grow ">
            <Image
              src={videos[currentSlide].thumbnail || "/placeholder.svg"}
              alt={videos[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Navigation Arrow - Right */}
          <button
            onClick={nextSlide}
            className="cursor-pointer flex-shrink-0 ml-4 bg-transparent rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300"
            aria-label="Next slide"
          >
            <ArrowRightCircle className="text-[#FEA91F] w-10 h-10 " />
          </button>
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <CustomButton text="View More" />
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;
