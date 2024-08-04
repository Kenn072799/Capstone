import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaFacebookF,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";
import Container from "./Container";
import ContactData from "../data/ContactData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative border-t bg-secondary-950">
      <Container className="max-w-[900px] pb-8 pt-16">
        <div className="flex flex-col justify-between md:flex-row">
          <div>
            <p className="pb-8 font-outfit text-lg uppercase text-white">
              Navigation
            </p>
            <ul className="grid grid-cols-2 gap-x-16 gap-y-2 font-roboto text-secondary-500 md:gap-y-4">
              <li className="py-1 hover:text-secondary-400">
                <Link to="/">Home</Link>
              </li>
              <li className="py-1 hover:text-secondary-400">
                <Link to="/about">About us</Link>
              </li>
              <li className="py-1 hover:text-secondary-400">
                <Link to="/services">Services</Link>
              </li>
              <li className="py-1 hover:text-secondary-400">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="py-1 hover:text-secondary-400">
                <Link to="/testimonials">Testimonials</Link>
              </li>
              <li className="py-1 hover:text-secondary-400">
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="mt-8 md:mt-0">
            <h3 className="font-outfit text-lg uppercase text-white">
              Contact Information
            </h3>
            <div className="flex items-center">
              <FaLocationDot
                size={20}
                className="text-secondary-500 hover:text-secondary-400"
              />
              <p className="my-1 mt-2 pl-4 font-roboto text-secondary-500">
                Meralco Industrial Engineering Services Corporation
                <br />
                5th Floor, Renaissance Tower 1000
                <br />
                Meralco Avenue, Ortigas Center Pasig City, Philippines 1600
              </p>
            </div>
            <div className="flex">
              <FaPhone
                size={20}
                className="text-secondary-500 hover:text-secondary-400"
              />
              <div className="flex flex-col">
                {ContactData.phoneNumbers.map((number, index) => (
                  <p
                    key={index}
                    className="my-1 pl-4 font-roboto text-secondary-500"
                  >
                    {number}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex items-center font-roboto text-secondary-500">
              <FaEnvelope
                size={20}
                className="text-secondary-500 hover:text-secondary-400"
              />
              <a
                href={`mailto:${ContactData.email}`}
                className="my-1 pl-4 font-roboto text-secondary-500 hover:underline"
              >
                {ContactData.email}
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-outfit text-lg uppercase text-white pt-4 md:pt-0">
              Social link
            </h3>
            <div className="mt-2 flex space-x-4">
              <a
                href={ContactData.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="my-1 text-secondary-500 hover:text-secondary-400"
              >
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-secondary-900/50 py-4">
        <Container>
          <div className="text-center text-sm text-secondary-300 md:text-base">
            Copyright &copy; {currentYear}. Meralco Industrial Engineering
            Services Corporation. All rights reserved.
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
