"use client";

import CustomButton from "@/component/Ui/ButtonComponent";

const ContactForm = () => {
  return (
    <section className="w-full bg-[#272729] pt-[50px] xs:pt-[60px] sm:pt-[80px] md:pt-[100px] px-4 xs:px-5 sm:px-8 md:px-10 lg:px-[100px] xl:px-[310px] flex justify-center pb-[50px] xs:pb-[60px] sm:pb-[80px] md:pb-[100px]">
      <div className="w-full max-w-6xl bg-[#272729] rounded-[15px] xs:rounded-[20px] sm:rounded-[30px] shadow-[0px_4px_4px_0px_#00000040] flex flex-col items-center gap-8 xs:gap-10 sm:gap-12 md:gap-16 px-4 xs:px-6 sm:px-8 py-10">
        {/* Heading */}
        <div className="w-full text-center flex flex-col gap-2 xs:gap-3 sm:gap-4">
          <span className="text-[#FEA91F] font-[Poppins] font-bold text-[16px] xs:text-[18px] sm:text-[20px] leading-tight capitalize">
            Contact Us
          </span>
          <span className="text-white font-[Poppins] font-bold text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-tight capitalize">
            We are here to help you
          </span>
          <p className="text-white text-[16px] xs:text-[17px] sm:text-[18px] md:text-[20px] lg:text-[18px] xl:text-[22px] font-normal mt-2">
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without Lorem ipsum is a
            placeholder text commonly used to demonstrate the visual
          </p>
        </div>

        {/* Form */}
        <div className="w-full max-w-4xl flex flex-col gap-4">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="First Name*"
              className="w-full md:w-1/2 h-[50px] sm:h-[60px] md:h-[65px] px-4 sm:px-6 rounded-md border border-white bg-transparent text-white placeholder-white text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#FEA91F]"
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="w-full md:w-1/2 h-[50px] sm:h-[60px] md:h-[65px] px-4 sm:px-6 rounded-md border border-white bg-transparent text-white placeholder-white text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#FEA91F]"
            />
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Email Address*"
              className="w-full md:w-1/2 h-[50px] sm:h-[60px] md:h-[65px] px-4 sm:px-6 rounded-md border border-white bg-transparent text-white placeholder-white text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#FEA91F]"
            />
            <input
              type="text"
              placeholder="Phone Number*"
              className="w-full md:w-1/2 h-[50px] sm:h-[60px] md:h-[65px] px-4 sm:px-6 rounded-md border border-white bg-transparent text-white placeholder-white text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#FEA91F]"
            />
          </div>

          {/* Message */}
          <textarea
            placeholder="Type Your Message*"
            className="w-full h-[150px] sm:h-[200px] md:h-[230px] px-4 sm:px-6 py-3 sm:py-4 rounded-md border border-white bg-transparent text-white placeholder-white text-sm sm:text-base resize-none outline-none focus:ring-2 focus:ring-[#FEA91F]"
          />

          {/* Button */}

          <CustomButton text="Submit" />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
