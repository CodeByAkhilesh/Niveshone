import React, { useState } from "react";
import Button from "../ui/Button";
import { NavLink } from "react-router-dom";
import { RiCloseLargeLine, RiMenuLine } from "@remixicon/react";
import brandLogo from "../../assets/brand-logo-web.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed z-30 w-full">
      <nav className="text-white md:max-w-302.5 lg:max-w-screen xl:px-35 md:px-10 lg:px-5 px-6 py-4 flex justify-between items-center w-full mx-auto bg-[#00000080] backdrop-blur-xl">
        {/*Brand Logo */}
        <NavLink to="/" className="text-2xl font-bold w-20">
          <img
            className="object-cover h-full w-full "
            src={brandLogo}
            alt="Nivesh One Financial Services – mutual fund and financial advisory brand logo"
          />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex">
          <li className="lg:flex md:gap-6 lg:gap-8 text-lg items-center">
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
          </li>
        </ul>

        {/* Toggle Menu Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="lg:hidden text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <RiCloseLargeLine /> : <RiMenuLine />}
        </button>
      </nav>

      {/* Toggle Menu  */}
      {isMenuOpen && (
        <nav
          id="mobile-menu"
          className="absolute top-20 left-0 h-screen w-full bg-[#00000080] text-center lg:hidden backdrop-blur-xl text-white font-bold text-2xl"
        >
          <ul>
            <li className="flex flex-col gap-6 py-6 w-fit mx-auto">
              <NavLink to={"/"} className="cursor-pointer focus:text-blue-400">
                Home
              </NavLink>
              <NavLink
                to={"/products"}
                className="cursor-pointer focus:text-blue-400"
              >
                Products
              </NavLink>
              <NavLink
                to={"/about"}
                className="cursor-pointer focus:text-blue-400"
              >
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
              <Button btnName={"Login"} to={"https://client.assetplus.in/"} />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
