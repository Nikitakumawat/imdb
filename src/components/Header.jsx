import React from "react";
import MenuItem from "./MenuItem";
import { BiSolidHome } from "react-icons/bi";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={BiSolidHome} />
        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
          IMDb
        </span>
        <span>Clone</span>
      </div>
    </div>
  );
}
