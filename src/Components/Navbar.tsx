// import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  // const Links = {
  //   link: "",
  //   path: "",
  // };
  return (
    <div className="sticky top-0 left-0 flex h-fit w-screen flex-row justify-between bg-[#ffffff00] px-10 py-3 shadow-[0px_10px_15px_-15px_#00000034] backdrop-blur-lg md:px-20">
      <Link to="/">
        <h1 className="text-[32px] font-bold">Yididiya</h1>
      </Link>
      <div className="flex w-fit flex-row items-center justify-center gap-0 text-neutral-700 md:gap-10">
        <p>
          <Link className="hover:text-blue-500" to={"/contact"}>
            Contact
          </Link>
        </p>
        <p>
          <Link className="hidden hover:text-blue-500 md:block" to={"/about"}>
            About
          </Link>
        </p>
        <p>
          <Link
            className="hidden hover:text-blue-500 md:block"
            to={"/projects"}
          >
            Projects
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NavBar;
