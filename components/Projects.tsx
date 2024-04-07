import { ProjectList } from "@/utils/data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col min-h-[70vh] h-full justify-start items-center mt-32"
    >
      <div className="h-fit">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 md:mb-5 text-black">
          Projects
        </h1>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center md:items-start m-10 gap-16">
          {ProjectList.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
