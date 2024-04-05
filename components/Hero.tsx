import Button from "./Button";
import { Player } from "@lottiefiles/react-lottie-player";
const Hero = () => {
  return (
    <div className="min-h-screen bg-page-gradient">
      <div className="z-10 flex flex-col h-[70vh] items-start justify-between gap-9 p-10 ml-20">
        <div className="mt-10 flex flex-row justify-evenly h-full">
          <div>
            <div className="flex flex-row gap-2 items-center">
              <Player
                autoplay={true}
                loop={true}
                controls={true}
                src="https://lottie.host/e6a00561-f555-4193-9731-ad04ecb23bfc/A6qjkGdqQr.json"
                style={{ height: "50px", width: "50px" }}
              ></Player>{" "}
              <h1 className="text-lg mt-1 font-extrabold text-slate-100">
                Hey, I&apos;m Saanvi.
              </h1>
            </div>
            <h2 className="text-2xl md:text-7xl font-mono font-extrabold text-slate-100 mt-2">
              I love <span className="text-[#BCD3E7] font-title">building</span>{" "}
              and <br />
              <span className="text-[#BCD3E7] font-title"> creating </span>
              projects.
            </h2>
          </div>

          <Player
            autoplay={true}
            loop={true}
            controls={true}
            src="https://lottie.host/aa4889d8-9b3c-45c4-afbe-0d1c1aa7b382/qJ57tG47HL.json"
            style={{ height: "600px", width: "600px" }}
          ></Player>
        </div>
        <div className="flex gap-5 md:gap-12">
          <Button variant="secondary"> Resume </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
