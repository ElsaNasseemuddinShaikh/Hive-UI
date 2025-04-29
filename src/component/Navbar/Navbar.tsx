"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import logo from "../../../public/assets/AlphaLogo.png";
import { usePathname } from "next/navigation";
import CustomButton from "../Ui/ButtonComponent";
import { menuItems } from "./menu";

const NavigationSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`w-full text-white flex items-center justify-between px-4 md:px-8 bg-[#272729] transition-all duration-300 ${
        scrolled ? "sticky top-0 z-50 shadow-lg py-2" : "py-4 md:h-[152px]"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center justify-center">
        <Image
          src={logo}
          alt="Logo"
          width={150}
          height={66}
          className="object-contain w-auto h-auto max-h-[60px] md:max-h-[92px]"
        />
      </div>

      {/* Desktop Menu - Hidden on mobile */}
      <div className="hidden lg:flex items-center gap-6 xl:gap-[51px] px-[10px]">
        {menuItems.map((item, index) => (
          <Link key={index} href={item.href}>
            <span
              className={`cursor-pointer capitalize text-white text-lg xl:text-[22px] leading-[22px] font-[Poppins] ${
                pathname === item.href
                  ? "font-[700] text-[#FEA91F]"
                  : "font-[400]"
              } hover:text-[#FEA91F] transition-colors`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>

      {/* Contact Button - Hidden on mobile */}
      <button className="hidden lg:block cursor-pointer h-[53px] px-[32px] py-[10px] border-2 border-[#FEA91F] rounded-[40px] text-white font-semibold text-[18px] uppercase hover:text-[#FEA91F] hover:font-[700] transition-all">
        CONTACT US
      </button>

      {/* Mobile Menu Button - Visible only on mobile */}
      <button
        className="lg:hidden text-white p-2 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X size={30} className="hover:bg-[#FEA91F] cursor-pointer" />
        ) : (
          <Menu size={30} className="hover:text-[#FEA91F] cursor-pointer" />
        )}
      </button>

      {/* Mobile Menu - Slide in from right */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-[#272729] z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex flex-col h-full">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-[#FFFFFF] hover:text-[#FEA91F] cursor-pointer focus:outline-none"
              aria-label="Close menu"
            >
              <X size={30} />
            </button>
          </div>

          {/* Mobile menu items */}
          <div className="flex flex-col items-center gap-6 mt-10">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                <span
                  className={`cursor-pointer capitalize text-white text-xl font-[Poppins] ${
                    pathname === item.href
                      ? "font-[700] text-[#FEA91F]"
                      : "font-[400]"
                  } hover:text-[#FEA91F] transition-colors`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile contact button */}
          <div className="mt-auto mb-10 flex justify-center">
            <CustomButton text="Contact Us" />
          </div>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-transparent z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default NavigationSection;
