import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex flex-col h-[100vh] items-center gap-9 m-10">
      <div className="text-center mt-32">
        <h1 className="text-xl mt-1 font-extrabold inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-100 via-slate-300 to-gray-200 ">
          Hey, I'm Saanvi.
        </h1>
        <h2 className="text-7xl font-title font-extrabold text-center text-slate-100 mt-2">
          I love <span className="text-[#0a2140]">building</span> and <br />
          <span className="text-[#0a2140]"> creating </span>projects.
        </h2>
      </div>
      <div className="flex gap-12">
        <Button variant="primary" children="Know More" />
        <Button variant="secondary" children="Resume" />
      </div>
    </div>
  );
};

export default Hero;
