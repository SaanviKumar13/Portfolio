import { SkillList } from "@/utils/data";

interface SkillProps {
  category: string;
  list: string[];
}

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-col min-h-[70vh] h-full justify-center items-center mt-32"
    >
      <div className="h-fit">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 md:mb-5 text-black">
          Skills
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center md:items-start my-10 mt-0">
          {SkillList.map(({ category, list }: SkillProps) => {
            return (
              <div
                key={category}
                className="flex flex-col items-center md:items-start justify-start text-black my-5 mx-16"
              >
                <h1 className="font-bold mb-4">{category}</h1>
                <div className="flex flex-wrap justify-center md:justify-start gap-5">
                  {list.map((skill, idx) => (
                    <p
                      className=" bg-[#527794] text-slate-50 rounded-lg py-2 w-fit px-5 hover:scale-110 duration-300 cursor-pointer"
                      key={idx}
                    >
                      {skill}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
