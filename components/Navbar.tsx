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
    <nav className="sticky top-7 font-mono mt-10">
      <div className="flex flex-col px-4 md:px-10 mx-auto">
        <div className="flex md:flex-row items-center justify-between">
          <span className="text-2xl md:text-5xl font-semibold font-title text-black bg-primary px-9 py-3 rounded-full shadow-md shadow-[#527794] cursor-pointer">
            saanmee.dev
          </span>
          <div className="hidden md:flex flex-row gap-5 font-medium text-lg text-black">
            {NavLink.map(({ name, link }) => (
              <Link
                key={link}
                href={link}
                className={`hover:text- ${
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
            <div className="text-center md:hidden transition-all duration-300">
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
