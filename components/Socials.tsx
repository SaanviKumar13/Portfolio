import { SocialData } from "@/utils/data";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="fixed left-3 md:left-5 bottom-0 z-30">
      <div className="flex flex-col gap-3 justify-center items-center ">
        {SocialData.map((item, index) => {
          return (
            <Link
              className="text-slate-50 text- hover:text-slate-400 transition-all hover:opacity-40 transform hover:scale-75"
              href={item.href}
              target="_blank"
              key={index}
            >
              {item.icon}
            </Link>
          );
        })}
        <div className="h-28 md:h-36 mt-2 w-1/12 bg-slate-300" />
      </div>
    </div>
  );
};

export default Socials;
