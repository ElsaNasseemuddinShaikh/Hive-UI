'use client';
import CommonBanner from "@/component/Ui/CommonBanner";
import React from "react";
import ContactForm from "./component/ContactForm";

const ContactPage = () => {
  return (
    <>
      <CommonBanner
        title="Contact us"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        buttonText="Contact Us Today"
        id="contact"
      />
      <ContactForm />
    </>
  );
};

export default ContactPage;
