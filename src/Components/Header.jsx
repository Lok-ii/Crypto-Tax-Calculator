import React from "react";
import Logo from "../assets/icon/Logo";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between px-24 bg-white sticky top-0 z-10">
      <div className="w-[10rem] cursor-pointer">
        <Logo />
      </div>
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-6 text-sm font-semibold">
          <p className="cursor-pointer">Features</p>
          <p className="cursor-pointer">Exchanges</p>
          <p className="cursor-pointer">How it Works?</p>
          <p className="cursor-pointer">Blog</p>
          <p className="cursor-pointer">About us</p>
        </div>
        <button className="cursor-pointer px-8 py-1.5 border-2 font-semibold border-primaryBlue text-primaryBlue rounded-[0.3rem]">Sign In</button>
      </div>
    </div>
  );
};

export default Header;
