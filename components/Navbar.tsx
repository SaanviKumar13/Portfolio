import { NavLink } from "@/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const pathname = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNav = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="sticky top-0 pt-5 pb-2 font-mono z-30 bg-portfolio-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
      <div className="flex flex-col px-4 md:px-10 mx-auto">
        <div className="flex md:flex-row items-center justify-between">
          <span className="text-lg md:text-3xl font-semibold font-title text-portfolio-navy-blue bg-portfolio-white px-2 md:px-5 md:py-2 rounded-full shadow-md shadow-portfolio-sea-blue cursor-pointer hover:scale-110 duration-700">
            <Link href="/">saanvikumar.dev </Link>
          </span>

          <div className="hidden md:flex flex-row gap-5 font-medium text-lg text-portfolio-navy-blue">
            {NavLink.map(({ name, link }) => (
              <Link
                key={link}
                href={link}
                className={`hover:text-portfolio-sea-blue ${
                  pathname === link ? "text-gray-100" : ""
                }`}
              >
                {name}
              </Link>
            ))}
          </div>
          <button
            onClick={toggleNav}
            className="md:hidden transition-all duration-100"
          >
            {!navbarOpen ? (
              <BiMenu className="w-8 h-8 text-gray-900" />
            ) : (
              <RxCross1 className="w-8 h-8 text-gray-900" />
            )}
          </button>
        </div>
        <div>
          {navbarOpen && (
            <div className="text-center bg-portfolio-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 md:hidden transition-all duration-75 ease-in-out">
              {NavLink.map(({ name, link }) => (
                <Link
                  key={link}
                  href={link}
                  className={`block py-2 px-4 ${
                    pathname === link ? "text-black" : "text-black"
                  }`}
                >
                  {name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
