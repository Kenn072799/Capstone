import React, { useState, useEffect } from "react";
import Container from "../Container";
import { HiMenu, HiX } from "react-icons/hi";
import Mainlogo from "../../assets/Mr.QuickFixLogo.png";
import { Link } from "react-router-dom";

const Mainnav = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // Main navigation
    <div className="sticky z-10 top-0 bg-white border-b border-secondary-100 shadow-sm w-full">
      <Container className="flex justify-between items-center py-4">
        <Link to="/">
          <img
            className="h-10 w-auto md:h-12 cursor-pointer"
            src={Mainlogo}
            alt="Mr. QuickFix"
          />
        </Link>
        <ul
          className="font-roboto text-secondary-800 hidden
            lg:flex items-center cursor-pointer"
        >
          <li className="inline-block ml-8 hover:text-primary-500">
            <Link to="/">Home</Link>
          </li>
          <li className="inline-block ml-8 hover:text-primary-500">About us</li>
          <li className="inline-block ml-8 hover:text-primary-500">Services</li>
          <li className="inline-block ml-8 hover:text-primary-500">Projects</li>
          <li className="inline-block ml-8 hover:text-primary-500">
            Testimonials
          </li>
          <li className="inline-block ml-8 hover:text-secondary-100">
            <button
              className="text-white bg-primary-500
            rounded-3xl px-6 py-2 hover:bg-primary-400"
            >
              Contact us
            </button>
          </li>
        </ul>
        <div className="lg:hidden" onClick={handleClick}>
          {open ? (
            <HiX
              className="size-[28px] text-secondary-600 border-solid border border-white
            rounded-full active:text-secondary-500 active:bg-secondary-50"
            />
          ) : (
            <HiMenu
              className="size-[28px] text-secondary-600 border-solid border border-white
            rounded-full active:text-secondary-500 active:bg-secondary-50"
            />
          )}
        </div>
      </Container>

      {/* Mobile Menu */}
      <ul
        className={
          open
            ? "absolute bg-tertiary font-roboto w-full flex flex-col shadow-sm text-secondary-950 border-b border-secondary-100 bg-white cursor-pointer"
            : "hidden"
        }
      >
        <li
          className="py-2 border-b border-secondary-200 mx-8 active:text-primary-500
         active:bg-secondary-50 flex justify-center"
        >
          Home
        </li>
        <li
          className="py-2 border-b border-secondary-200 mx-8 active:text-primary-500
         active:bg-secondary-50 flex justify-center"
        >
          About us
        </li>
        <li
          className="py-2 border-b border-secondary-200 mx-8 active:text-primary-500
         active:bg-secondary-50 flex justify-center"
        >
          Services
        </li>
        <li
          className="py-2 border-b border-secondary-200 mx-8 active:text-primary-500
         active:bg-secondary-50 flex justify-center"
        >
          Projects
        </li>
        <li
          className="py-2 border-b border-secondary-200 mx-8 active:text-primary-500
         active:bg-secondary-50 flex justify-center"
        >
          Testimonials
        </li>
        <li className="py-4 mx-auto">
          <button
            className="text-white bg-primary-500
            rounded-3xl px-6 py-2 hover:bg-primary-400"
          >
            Contact us
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Mainnav;