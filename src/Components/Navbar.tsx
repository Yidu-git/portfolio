// import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const Links: {
    name: string;
    path: string;
    hide: boolean;
  }[] = [
    { name: "Contact", path: "#contact", hide: false },
    { name: "About", path: "#about", hide: true },
    { name: "Projects", path: "#projects", hide: true },
    // { link: "Home", path: "#hero" },
  ];
  return (
    <div className="sticky top-0 left-0 z-1000 flex h-fit w-screen flex-row justify-between overflow-hidden border-b border-[#ffffff50] bg-[#ffffff10] px-10 py-3 shadow-[0px_10px_15px_-15px_#00000034] backdrop-blur-lg transition-all duration-250 ease-in-out hover:bg-[#ffffff90] hover:backdrop-blur-2xl md:w-[calc(100vw-14px)] md:px-20">
      {/* <a href="#"> */}
      <Link to="/">
        <h1 className="contrast text-[32px] font-bold text-black">Yididiya</h1>
      </Link>
      {/* </a> */}
      <div className="flex w-fit flex-row items-center justify-center gap-0 text-neutral-700 md:gap-10">
        {Links.map(({ name, path, hide }) => (
          <p>
            {path.includes("#") ? (
              <a
                href={path}
                className={"hover:text-blue-500 " + (hide && "hidden md:block")}
              >
                {name}
              </a>
            ) : (
              <Link
                className={"hover:text-blue-500 " + (hide && "hidden md:block")}
                to={path}
              >
                {name}
              </Link>
            )}
          </p>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
