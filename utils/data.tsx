import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const NavLink = [
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

export const SkillList = [
  {
    category: "Languages",
    list: ["Python", "TypeScript", "JavaScript", "Java", "C", "C++"],
  },
  {
    category: "Frontend",
    list: ["HTML", "CSS", "TailwindCSS", "SASS", "React", "Next.js", "Remix"],
  },
  {
    category: "Data Science",
    list: ["Matplotlib", "Seaborn", "NumPy", "Pandas", "MatLab"],
  },
  {
    category: "Database",
    list: ["MongoDB", "PostgresSQL"],
  },
  {
    category: "Machine Learning",
    list: ["Tensorflow", "ScikitLearn"],
  },
];

export const CertificatesList = [
  {
    name: "Machine Learning Specialization",
    image: "ml.png",
    description: "Completed a ML course taken by Andrew Ng",
    issuedBy: "Coursera - Standford University",
  },
  {
    name: "Programming in Java",
    image: "java.png",
    description: "Recieved a certificate of elite + silver medal.",
    issuedBy: "NPTEL",
  },
];

export const ProjectList = [
  {
    name: "Color-Gen",
    description:
      "An AI powered color palette generator which allows users to input any text, and then generates a color palette associated with that text. Users can explore different color schemes by typing in various words, phrases, song titles, or even names of people. They can then copy the hex codes of the colors generated for their own projects.",
    techStack: ["NextJs", "React", "TailwindCSS", "OpenAI API"],
    image: "color-gen.png",
    link: "https://color-generator-topaz.vercel.app/",
    githubLink: "https://github.com/SaanviKumar13/ColorGen",
  },
  {
    name: "Fury",
    description: "A recruitments portal made for my campus club SRMKZILLA",
    techStack: ["Remix", "React", "TailwindCSS"],
    image: "color-gen.png",
    githubLink: "https://github.com/SaanviKumar13/fury",
  },
  {
    name: "KZBlogs",
    description: "A blogs website made for my campus club SRMKZILLA.",
    techStack: [
      "NextJS (App directory)",
      "TailwindCSS",
      "React",
      "Python",
      "FastAPI",
    ],
    image: "kzblogs.png",
    // githubLink: "https://github.com/SaanviKumar13/quizzle",
  },
  {
    name: "Quizzle",
    description:
      "The ultimate trivia game where you can challenge yourself on wide range of topics ranging from pop culture to science and nature. With 23 categories and 3 difficulty levels, this game has something for everyone!",
    techStack: ["React", "CSS", "Open Trivia DB API"],
    image: "quizzle.png",
    link: "https://quizzle-one.vercel.app/",
    githubLink: "https://github.com/SaanviKumar13/quizzle",
  },
];
