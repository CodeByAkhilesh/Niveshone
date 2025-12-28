import React, { useState } from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed z-30 w-full bg-[#00000000] backdrop-blur-xl">
    <nav className="text-white md:max-w-302.5 md:px-10 lg:px-5 px-10 py-4 flex justify-between items-center w-full mx-auto">
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
        <NavLink to="/" className="cursor-pointer hover:text-blue-400 font-bold">Home</NavLink>
        <NavLink to="/Services" className="cursor-pointer hover:text-blue-400 font-bold">
          Services
        </NavLink>
        <NavLink to="/about" className="cursor-pointer hover:text-blue-400 font-bold">About</NavLink>
        <NavLink to="/calculator" className="cursor-pointer hover:text-blue-400 font-bold">
          Calculator
        </NavLink>
        <NavLink to="contact" className="cursor-pointer hover:text-blue-400 font-bold">
          Contact
        </NavLink>
        <Button btnName={"Login"} />
      </nav>

      {/* Mobile Menu Button */}
      <button className="lg:hidden text-3xl" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <ul className="absolute top-16 left-0 w-full bg-[#030202a8] flex flex-col gap-4 py-6 text-center lg:hidden text-lg backdrop-blur-2xl">
          <li className="cursor-pointer hover:text-blue-400">Home</li>
          <li className="cursor-pointer hover:text-blue-400">About</li>
          <li className="cursor-pointer hover:text-blue-400">Services</li>
          <li className="cursor-pointer hover:text-blue-400">Contact</li>
        </ul>
      )}
    </nav>
    </div>
  );
}

export default Navbar;
