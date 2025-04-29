import { StaticImageData } from "next/image";

export interface VideoSlide {
  id: number;
  thumbnail: StaticImageData;
  title: string;
}

export interface Testimonial {
  id: number;
  text: string;
  name: string;
  designation: string;
}

export interface TeamMember {
  name: string;
  position: string;
  imageUrl: StaticImageData;
}

export interface FAQItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

export interface CommonBannerProps {
  title: string;
  description: string;
  buttonText: string;
  id: string;
}

export interface JobCardProps {
  title: string;
  job: string;
  description: string;
}
