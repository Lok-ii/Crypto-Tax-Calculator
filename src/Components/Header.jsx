import React from "react";
import Logo from "../assets/icon/Logo";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";


const Header = () => {
  const [navPosition, setNavPosition] = useState("top-[-15rem]")
  return (
    <div className="w-full flex items-center justify-between px-8 tablet:px-24 bg-white sticky top-0 z-10">
      <div className="w-[10rem] cursor-pointer">
        <Logo />
      </div>
      <div className="flex items-center gap-6 tablet:gap-12 relative">
        <div className={`tablet:flex tablet:relative absolute ${navPosition} transition-all duration-300 tablet:left-[-14rem] tablet:top-0 tablet:flex-row flex-col items-center gap-12 tablet:gap-6 text-sm font-semibold rounded-lg bg-white w-[12.8rem]`}>
          <p className="cursor-pointer border tablet:border-0 rounded-lg p-2">Features</p>
          <p className="cursor-pointer border tablet:border-0 rounded-lg p-2">Exchanges</p>
          <p className="cursor-pointer border tablet:border-0 rounded-lg p-2">How it Works?</p>
          <p className="cursor-pointer border tablet:border-0 rounded-lg p-2">Blog</p>
          <p className="cursor-pointer border tablet:border-0 rounded-lg p-2">About us</p>
        </div>
        <button className="cursor-pointer mobile-large:flex hidden px-8 py-1.5 border-2 font-semibold border-primaryBlue text-primaryBlue rounded-[0.3rem]">Sign In</button>
        <IoIosMenu className="text-3xl tablet:hidden flex" onClick={() => {
          if(navPosition === "top-[-15rem]"){
            setNavPosition("top-[3.5rem]")
          }else{
            setNavPosition("top-[-15rem]");
          }
        }} />
      </div>
    </div>
  );
};

export default Header;
