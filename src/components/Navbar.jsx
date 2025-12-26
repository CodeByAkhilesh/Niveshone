import React, { useState } from "react";
import Button from "./Button";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="text-white md:max-w-302.5 mx-auto md:px-10 lg:px-5 px-10 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold w-20">
        <img
          className="object-cover h-full w-full "
          src="src\assets\brand-logo-web.png"
          alt="Logo"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex md:gap-6 lg:gap-8 text-lg items-center">
        <li className="cursor-pointer hover:text-blue-400 font-bold">Home</li>
        <li className="cursor-pointer hover:text-blue-400 font-bold">
          Services
        </li>
        <li className="cursor-pointer hover:text-blue-400 font-bold">About</li>
        <li className="cursor-pointer hover:text-blue-400 font-bold">
          Calculator
        </li>
        <li className="cursor-pointer hover:text-blue-400 font-bold">
          Contact
        </li>
        <Button btnName={"Login"} />
      </ul>

      {/* Mobile Menu Button */}
      <button className="lg:hidden text-3xl" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <ul className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col gap-4 py-6 text-center lg:hidden text-lg">
          <li className="cursor-pointer hover:text-blue-400">Home</li>
          <li className="cursor-pointer hover:text-blue-400">About</li>
          <li className="cursor-pointer hover:text-blue-400">Services</li>
          <li className="cursor-pointer hover:text-blue-400">Contact</li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
