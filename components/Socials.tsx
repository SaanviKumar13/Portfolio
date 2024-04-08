import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
const SocialData = [
  {
    name: "Instagram",
    icon: <FaInstagram className="w-6 h-6 md:w-10 md:h-10 mb-2 md:my-2" />,
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
const Socials = () => {
  return (
    <div className="fixed right-3 md:right-5 bottom-0 z-30">
      <div className="flex flex-col gap-3 justify-center items-center ">
        {SocialData.map((item, index) => {
          return (
            <Link
              className="text-black hover:text-[#527794] transition-all hover:opacity-40 transform hover:scale-75"
              href={item.href}
              target="_blank"
              key={index}
            >
              {item.icon}
            </Link>
          );
        })}
        <div className="h-28 md:h-36 mt-2 w-1/12 bg-black" />
      </div>
    </div>
  );
};

export default Socials;
