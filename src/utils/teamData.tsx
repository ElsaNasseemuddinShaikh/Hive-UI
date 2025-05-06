import { TeamMember } from "./types";
import huzaifa from "../../public/assets/h.png";
import amir from "../../public/assets/a.png";
import zuhaib from "../../public/assets/z.png";
import sameer from "../../public/assets/s.png";
import rizwan from "../../public/assets/r.png";

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
