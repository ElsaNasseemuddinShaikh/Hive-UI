"use client";
import CommonBanner from "@/component/Ui/CommonBanner";
import React from "react";
import ContactForm from "./component/ContactForm";

const ContactPage = () => {
  return (
    <>
      <CommonBanner
        title="Contact us"
        description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing"
        buttonText="Contact Us Today"
        id="contact"
      />
      <ContactForm />
    </>
  );
};

export default ContactPage;
