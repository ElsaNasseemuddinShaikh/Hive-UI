"use client";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import bgFooter from "../../../public/assets/footer.png";

const FooterSection = () => {
  return (
    <footer className="relative overflow-hidden bg-[#181819] text-white w-full py-24 px-4 md:px-12 xl:px-[210px] lg:px-[110px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 w-full max-w-[1802px] mx-auto gap-10">
        {/* Company Section */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="font-bold text-2xl md:text-3xl leading-none capitalize">
              Company
            </span>
            <div
              className="w-40 h-[2px]"
              style={{
                background:
                  "linear-gradient(to right, #FEA91F 40%, #FFFFFF 60%)",
              }}
            ></div>
          </div>
          <ul className="flex flex-col gap-4 list-[square] list-inside font-poppins text-lg md:text-xl">
            <li>Service Name 01</li>
            <li>Service Name 02</li>
            <li>Service Name 03</li>
            <li>Service Name 04</li>
          </ul>
        </div>

        {/* Our Services Section */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="font-bold text-2xl md:text-3xl leading-none capitalize">
              Our Services
            </span>
            <div
              className="w-40 h-[2px]"
              style={{
                background:
                  "linear-gradient(to right, #FEA91F 40%, #FFFFFF 60%)",
              }}
            ></div>
          </div>
          <ul className="flex flex-col gap-4 list-[square] list-inside font-poppins text-lg md:text-xl">
            <li>Service Name 01</li>
            <li>Service Name 02</li>
            <li>Service Name 03</li>
            <li>Service Name 04</li>
          </ul>
        </div>

        {/* Ahive Section */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="font-bold text-2xl md:text-3xl leading-none capitalize">
              Ahive Technologies (LLC)
            </span>
            <div
              className="w-40 h-[2px]"
              style={{
                background:
                  "linear-gradient(to right, #FEA91F 40%, #FFFFFF 60%)",
              }}
            ></div>
          </div>
          <p className="font-poppins text-base md:text-lg text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Image Section */}
        <div
          className="relative w-full h-[250px] md:h-[300px] lg:h-[357px] rounded-full overflow-hidden flex items-center justify-center mx-auto"
          style={{
            backgroundImage: `url(${bgFooter.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Image
            src={logo}
            alt="Logo"
            width={134}
            height={59}
            className="object-contain"
          />
        </div>
      </div>

      {/* Subscription Input Field */}

      <div className="w-full max-w-[1802px] mx-auto mt-12 flex flex-col items-center md:flex-row gap-6 md:gap-[30px] lg:gap-[69px]">
        <div className="w-full md:w-[550px] h-[74px] rounded-[8px] border border-[#FFFFFF] flex items-center justify-between px-4">
          <input
            type="text"
            className="w-[70%] md:w-[401px] h-[40px] rounded-full px-4 text-[#FFFFFF] bg-transparent outline-none placeholder:text-[#FFFFFF]"
            placeholder="Enter your email address"
          />
          <button
            className="w-[98px] h-[40px] rounded-[8px] bg-[#FEA91F] text-white text-[16px] font-medium cursor-pointer hover:font-[700]"
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
