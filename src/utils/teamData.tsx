import { TeamMember } from "./types";
import huzaifa from "../../public/assets/huzaifa.png";
import amir from "../../public/assets/amir.png";
import zuhaib from "../../public/assets/zuhaib.png";
import sameer from "../../public/assets/sameer.png";
import rizwan from "../../public/assets/rizwan.png";

export const teamMembers: TeamMember[] = [
  {
    name: "HUZAIFA SHEIKH",
    position: "CEO",
    imageUrl: huzaifa,
  },
  {
    name: "RIZWAN SHEIKH",
    position: "COO",
    imageUrl: rizwan,
  },
  {
    name: "AMIR SHEIKH",
    position: "President",
    imageUrl: amir,
  },
  {
    name: "SAMEER ALI",
    position: "Chief Product Officer",
    imageUrl: sameer,
  },
  {
    name: "MALIK ZOHAIB MUSTAFA",
    position: "Managing Director",
    imageUrl: zuhaib,
  },
];
