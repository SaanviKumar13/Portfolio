import { SkillList } from "@/utils/data";

interface SkillProps {
  image: string;
  name: string;
}

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-fit md:ml-20">
        <h1 className="text-5xl font-title font-extrabold text-center mb-10 md:mb-0 text-slate-100">
          Skills
        </h1>
        <div className="flex flex-wrap justify-center items-center my-10 mt-0">
          {SkillList.map(({ image, name }: SkillProps) => {
            return (
              <div className="flex flex-col items-center justify-center text-white my-5 mx-16">
                <img
                  src={image}
                  alt={name}
                  key={image}
                  className="p-2 sm:p-6 w-20 md:w-32"
                />
                <h1 className="font-bold">{name}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
