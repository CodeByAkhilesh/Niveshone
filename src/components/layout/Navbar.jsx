import React, { useState } from "react";
import Button from "../ui/Button";
import { NavLink } from "react-router-dom";
import { RiCloseLargeLine, RiMenuLine } from "@remixicon/react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed z-30 w-full ">
      <nav className="text-white md:max-w-302.5 md:px-10 lg:px-5 px-6 py-4 flex justify-between items-center w-full mx-auto bg-[#00000080] backdrop-blur-xl">
        {/* Logo */}
        <div className="text-2xl font-bold w-20">
          <img
            className="object-cover h-full w-full "
            src="src\assets\brand-logo-web.png"
            alt="Logo"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex md:gap-6 lg:gap-8 text-lg items-center">
          <NavLink
            to="/"
            className="cursor-pointer hover:text-blue-400 font-bold"
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="cursor-pointer hover:text-blue-400 font-bold"
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className="cursor-pointer hover:text-blue-400 font-bold"
          >
            About
          </NavLink>
          <NavLink
            to="/calculator"
            className="cursor-pointer hover:text-blue-400 font-bold"
          >
            Calculator
          </NavLink>
          <NavLink
            to="/contact"
            className="cursor-pointer hover:text-blue-400 font-bold"
          >
            Contact
          </NavLink>
          <Button btnName={"Login"} to={"https://client.assetplus.in/"} />
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-3xl" onClick={() => setOpen(!open)}>
          {open ? <RiCloseLargeLine /> : <RiMenuLine />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-20 left-0 h-screen w-full bg-[#00000080] text-center lg:hidden backdrop-blur-xl text-white font-bold text-2xl">
        <nav className="flex flex-col gap-6 py-6 w-fit mx-auto">
          <NavLink to={"/"} className="cursor-pointer focus:text-blue-400">
            Home
          </NavLink>
          <NavLink
            to={"/products"}
            className="cursor-pointer focus:text-blue-400"
          >
            Products
          </NavLink>
          <NavLink to={"/about"} className="cursor-pointer focus:text-blue-400">
            About
          </NavLink>
          <NavLink
            to={"/calculator"}
            className="cursor-pointer focus:text-blue-400"
          >
            Calculator
          </NavLink>
          <NavLink
            to={"/contact"}
            className="cursor-pointer focus:text-blue-400"
          >
            Contact
          </NavLink>
          <Button btnName={"Login"} to={"https://client.assetplus.in/"}/>
        </nav>
        </div>
      )}
    </div>
  );
}

export default Navbar;
