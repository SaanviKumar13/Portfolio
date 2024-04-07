import Button from "./Button";
import { Player } from "@lottiefiles/react-lottie-player";
const Hero = () => {
  return (
    <div>
      <div className="min-h-screen md:min-h-[85vh] h-full bg-page-gradient">
        <div className="z-10 flex flex-col h-[70vh] items-center justify-between md:justify-evenly md:items-start p-10 md:ml-20">
          <div className="mt-10 flex flex-col md:flex-row h-full">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex flex-row gap-2 md:items-start items-center">
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
              <h2 className="text-4xl text-center md:text-left md:text-7xl font-mono font-extrabold text-slate-100 mt-2">
                I love{" "}
                <span className="text-[#BCD3E7] font-title">building</span> and{" "}
                <br />
                <span className="text-[#BCD3E7] font-title"> creating </span>
                projects.
              </h2>
            </div>

            <Player
              autoplay={true}
              loop={true}
              controls={true}
              src="https://lottie.host/aa4889d8-9b3c-45c4-afbe-0d1c1aa7b382/qJ57tG47HL.json"
              style={{ height: "100%", width: "100%" }}
              className=""
            ></Player>
          </div>
          <div className="mt-20 md:mt-6">
            <Button variant="secondary">
              <a href="/SaanviKumar.pdf" download="SaanviKumar.pdf">
                Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
      <img
        src="/waves-bottom.png"
        alt="waves"
        className="hidden md:block w-full h-32"
      />
      <img
        src="/waves-bottom-sm.png"
        alt="waves"
        className="md:hidden w-full h-64"
      />
    </div>
  );
};

export default Hero;
