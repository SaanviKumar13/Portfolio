import Button from "./Button";

const Hero = () => {
  return (
    <div className="min-h-screen bg-page-gradient">
      <div className="z-10 flex flex-col h-[70vh] items-start justify-between gap-9 p-10 ml-20">
        <div className="mt-10 flex flex-col justify-evenly h-full">
          <h1 className="text-lg mt-1 font-extrabold text-slate-100">
            👋 Hey, I'm Saanvi.
          </h1>
          <h2 className="text-2xl md:text-7xl font-mono font-extrabold text-slate-100 mt-2">
            I love <span className="text-[#BCD3E7] font-title">building</span>{" "}
            and <br />
            <span className="text-[#BCD3E7] font-title"> creating </span>
            projects.
          </h2>
        </div>
        <div className="flex gap-5 md:gap-12">
          <Button variant="secondary" children="Resume" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
