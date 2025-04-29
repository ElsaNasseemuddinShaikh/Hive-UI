"use client";

import CustomButton from "@/component/Ui/ButtonComponent";

const ContactForm = () => {
  return (
    <section className="w-full h-auto bg-[#272729] pt-[50px] xs:pt-[60px] sm:pt-[80px] md:pt-[100px] px-4 xs:px-5 sm:px-8 md:px-10 lg:px-[100px] xl:px-[310px] flex justify-center pb-[50px] xs:pb-[60px] sm:pb-[80px] md:pb-[100px]">
      <div className="mt-20 w-full h-auto bg-[#272729] rounded-[15px] xs:rounded-[20px] sm:rounded-[30px] shadow-[0px_4px_4px_0px_#00000040] flex flex-col items-center gap-[30px] xs:gap-[40px] sm:gap-[50px] md:gap-[60px]">
        {/* Heading Section */}
        <div className="w-full h-auto flex flex-col gap-[10px] xs:gap-[12px] sm:gap-[14px] justify-center items-center">
          <span className="text-[16px] xs:text-[18px] sm:text-[20px] font-[Poppins] font-[700] leading-[1.2] text-center capitalize text-[#FEA91F]">
            Contact Us
          </span>
          <span className="text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[1.2] font-[700] text-center capitalize font-[Poppins] text-white">
            We are here to help you
          </span>
          <p className="mt-2 xs:mt-3 sm:mt-4 w-full text-[16px] xs:text-[17px] sm:text-[18px] md:text-[20px] lg:text-[18px] xl:text-[22px] font-[400] text-[#FFFFFF] text-center">
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without Lorem ipsum is a
            placeholder text commonly used to demonstrate the visual
          </p>
        </div>

        {/* Form Section */}
        <div className="w-full max-w-[1040px] h-auto flex flex-col gap-[15px] xs:gap-[16px] sm:gap-[17px] mb-20">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-[15px] xs:gap-[16px] sm:gap-[17px] w-full">
            <input
              type="text"
              placeholder="First Name*"
              className="w-full md:w-1/2 h-[50px] xs:h-[55px] sm:h-[60px] md:h-[65px] lg:h-[70px] px-[20px] xs:px-[25px] sm:px-[30px] md:px-[33px] py-[15px] xs:py-[18px] sm:py-[20px] md:py-[22px] rounded-[8px] xs:rounded-[9px] sm:rounded-[10px] border border-[#FFFFFF] bg-transparent text-[#FFFFFF] placeholder-[#FFFFFF] text-[14px] xs:text-[15px] sm:text-[16px]"
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="w-full md:w-1/2 h-[50px] xs:h-[55px] sm:h-[60px] md:h-[65px] lg:h-[70px] px-[20px] xs:px-[25px] sm:px-[30px] md:px-[33px] py-[15px] xs:py-[18px] sm:py-[20px] md:py-[22px] rounded-[8px] xs:rounded-[9px] sm:rounded-[10px] border border-[#FFFFFF] bg-transparent text-[#FFFFFF] placeholder-[#FFFFFF] text-[14px] xs:text-[15px] sm:text-[16px]"
            />
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row gap-[15px] xs:gap-[16px] sm:gap-[17px] w-full">
            <input
              type="email"
              placeholder="Email Address*"
              className="w-full md:w-1/2 h-[50px] xs:h-[55px] sm:h-[60px] md:h-[65px] lg:h-[70px] px-[20px] xs:px-[25px] sm:px-[30px] md:px-[33px] py-[15px] xs:py-[18px] sm:py-[20px] md:py-[22px] rounded-[8px] xs:rounded-[9px] sm:rounded-[10px] border border-[#FFFFFF] bg-transparent text-[#FFFFFF] placeholder-[#FFFFFF] text-[14px] xs:text-[15px] sm:text-[16px]"
            />
            <input
              type="text"
              placeholder="Phone Number*"
              className="w-full md:w-1/2 h-[50px] xs:h-[55px] sm:h-[60px] md:h-[65px] lg:h-[70px] px-[20px] xs:px-[25px] sm:px-[30px] md:px-[33px] py-[15px] xs:py-[18px] sm:py-[20px] md:py-[22px] rounded-[8px] xs:rounded-[9px] sm:rounded-[10px] border border-[#FFFFFF] bg-transparent text-[#FFFFFF] placeholder-[#FFFFFF] text-[14px] xs:text-[15px] sm:text-[16px]"
            />
          </div>

          {/* Message Section */}
          <div className="w-full">
            <textarea
              placeholder="Type Your Message*"
              className="w-full h-[150px] xs:h-[180px] sm:h-[200px] md:h-[230px] lg:h-[261px] px-[20px] xs:px-[25px] sm:px-[30px] md:px-[33px] py-[15px] xs:py-[18px] sm:py-[20px] md:py-[23px] rounded-[8px] xs:rounded-[9px] sm:rounded-[10px] border border-[#FFFFFF] bg-transparent text-[#FFFFFF] placeholder-[#FFFFFF] resize-none text-[14px] xs:text-[15px] sm:text-[16px]"
            />
          </div>

          <CustomButton text="Submit" />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
