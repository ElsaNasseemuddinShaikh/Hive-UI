"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import faq from "../../public/assets/FAQ.png";
import SectionHeading from "./Ui/Heading";
import { FAQItem } from "@/utils/types";
import { faqData } from "@/utils/faqData";

const FAQSection = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>(faqData);

  const toggleFAQ = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => ({
        ...faq,
        isOpen: i === index ? !faq.isOpen : false,
      }))
    );
  };

  return (
    <section className="bg-[#272729] text-white px-4 py-16 md:px-12 lg:px-24 xl:px-40">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Image */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[787px] rounded-[20px] overflow-hidden">
          <Image
            src={faq}
            alt="FAQ Illustration"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Column - FAQ Content */}
        <div className="flex flex-col gap-6">
          {/* Heading */}
          <div className="flex flex-col gap-3">
            <SectionHeading headingText="FREQUENT QUERIES" />
            {/* <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold capitalize leading-tight"> */}
            <span className="text-[32px] sm:text-[40px] leading-[32px] sm:leading-[40px] font-[700] capitalize font-[Poppins]">
              Frequent Questions Clients Asking !!
            </span>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="flex flex-col gap-4 mt-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="w-full border-b-2 border-[#FEA91F] rounded-lg p-4 bg-white text-[#272729]"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left font-semibold text-lg sm:text-xl"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      faq.isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {faq.isOpen && (
                  <div className="mt-3 text-sm sm:text-base transition-all duration-300 ease-in-out">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
