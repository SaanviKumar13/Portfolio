import Link from "next/link";
import { BiWorld } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { GiTBrick } from "react-icons/gi";

interface CardProps {
  name: string;
  description: string;
  techStack: string[];
  image?: string;
  githubLink?: string;
  link?: string;
}

export default function ProjectCard({
  name,
  image,
  description,
  techStack,
  githubLink,
  link,
}: CardProps) {
  return (
    <div className="md:w-[30vw] flex flex-col justify-between px-5">
      <div>
        {image && (
          <img
            src={image}
            alt={name}
            className="my-3 rounded-lg hover:scale-125 duration-700"
          />
        )}
        <div className="flex flex-row justify-between">
          <h1 className="text-portfolio-sea-blue font-bold text-xl">{name}</h1>
          <div className="flex flex-row gap-2 mx-3">
            {githubLink && (
              <Link href={githubLink} target="_blank">
                <FaGithub className="h-5 w-5 hover:rotate-45 hover:scale-110 duration-500" />
              </Link>
            )}

            {link && (
              <Link href={link} target="_blank">
                <BiWorld className="h-5 w-5 hover:rotate-45 hover:scale-110 duration-500" />
              </Link>
            )}
          </div>
        </div>

        <p className="text-sm md:text-base">{description}</p>
      </div>
      <div className="flex flex-row flex-wrap gap-2 mt-3">
        {techStack.map((tech, index) => (
          <div
            className="bg-portfolio-sea-blue text-xs text-slate-50 rounded-lg py-1 w-fit px-3 cursor-pointer"
            key={index}
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}
