import React, { useState, useEffect } from "react";
import Container from "../Container";
import { HiMenu, HiX } from "react-icons/hi";
import Mainlogo from "../../assets/Mr.QuickFixLogo.png";
import { Link } from "react-router-dom";

const MainNav = () => {
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

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="sticky top-0 z-10 w-full border-b border-secondary-100 bg-white shadow-sm">
      <Container className="flex items-center justify-between py-4">
        <Link to="/Mrquickfix/" onClick={handleScrollToTop}>
          <img
            className="h-9 cursor-pointer md:h-12"
            src={Mainlogo}
            alt="Mr. QuickFix"
          />
        </Link>
        <ul className="hidden cursor-pointer items-center font-roboto text-secondary-800 lg:flex">
          <li
            className="ml-8 inline-block hover:text-primary-500"
            onClick={handleScrollToTop}
          >
            <Link to="/Mrquickfix/">Home</Link>
          </li>
          <li className="ml-8 inline-block hover:text-primary-500">
            <Link to="/about">About us</Link>
          </li>
          <li className="ml-8 inline-block hover:text-primary-500">
            <Link to="/services">Services</Link>
          </li>
          <li className="ml-8 inline-block hover:text-primary-500">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="ml-8 inline-block hover:text-primary-500">
            <Link to="/testimonials">Testimonials</Link>
          </li>
          <li className="ml-8 inline-block hover:text-secondary-100">
            <Link to="/contact">
              <button className="rounded-3xl bg-primary-500 px-6 py-2 text-white hover:bg-primary-400">
                Contact us
              </button>
            </Link>
          </li>
        </ul>
        <div className="lg:hidden" onClick={handleClick}>
          {open ? (
            <HiX className="size-[28px] rounded-full border border-solid border-white text-secondary-600 active:bg-secondary-50 active:text-secondary-500" />
          ) : (
            <HiMenu className="size-[28px] rounded-full border border-solid border-white text-secondary-600 active:bg-secondary-50 active:text-secondary-500" />
          )}
        </div>
      </Container>

      {/* Mobile Menu */}
      <ul
        className={`${
          open ? "block" : "hidden"
        } bg-tertiary absolute flex w-full cursor-pointer flex-col border-b border-secondary-100 bg-white font-roboto text-secondary-950 shadow-sm`}
      >
        <li className="mx-8 flex justify-center border-b border-secondary-200 py-2 active:bg-secondary-50 active:text-primary-500">
          <Link to="/" onClick={handleScrollToTop}>
            Home
          </Link>
        </li>
        <li className="mx-8 flex justify-center border-b border-secondary-200 py-2 active:bg-secondary-50 active:text-primary-500">
          <Link to="/about">About us</Link>
        </li>
        <li className="mx-8 flex justify-center border-b border-secondary-200 py-2 active:bg-secondary-50 active:text-primary-500">
          <Link to="/services">Services</Link>
        </li>
        <li className="mx-8 flex justify-center border-b border-secondary-200 py-2 active:bg-secondary-50 active:text-primary-500">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="mx-8 flex justify-center border-b border-secondary-200 py-2 active:bg-secondary-50 active:text-primary-500">
          <Link to="/testimonials">Testimonials</Link>
        </li>
        <li className="mx-auto py-4">
          <Link to="/contact">
            <button className="rounded-3xl bg-primary-500 px-6 py-2 text-white hover:bg-primary-400">
              Contact us
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MainNav;
