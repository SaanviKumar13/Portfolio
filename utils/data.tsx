import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export const NavLink = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Explore",
    link: "#explore",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Contact Me",
    link: "#contact-me",
  },
];

export const SocialData = [
  {
    name: "Instagram",
    icon: <FaInstagram className="w-6 h-6 md:w-8 md:h-8 mb-2 md:my-2" />,
    href: "https://www.instagram.com/saanviii.13/",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="w-6 h-6 md:w-8 md:h-8 mb-2 md:my-2" />,
    href: "https://github.com/SaanviKumar13",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="w-6 h-6 md:w-8 md:h-8 mb-2 md:my-2" />,
    href: "https://www.linkedin.com/in/saanvi-kumar-71481624b/",
  },
  {
    name: "Gmail",
    icon: <BiLogoGmail className="w-6 h-6 md:w-8 md:h-8 mb-2 md:my-2" />,
    href: "mailto:saanviprashantkumar@gmail.com",
  },
];
