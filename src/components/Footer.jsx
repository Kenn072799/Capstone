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
    <div className="relative bg-secondary-950 border-t">
      <Container className="max-w-[900px] pt-16 pb-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <p className="font-outfit text-white text-lg pb-8 uppercase">
              Navigation
            </p>
            <ul className="text-secondary-500 font-roboto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
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
            <h3 className="text-white font-outfit text-lg uppercase">
              Contact Information
            </h3>
            <div className="flex items-center">
              <FaLocationDot
                size={20}
                className="text-secondary-500 hover:text-secondary-400"
              />
              <p className="text-secondary-500 font-roboto mt-2 pl-4 my-1">
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
                    className="pl-4 font-roboto text-secondary-500 my-1"
                  >
                    {number}
                  </p>
                ))}
              </div>
            </div>
            <div className="text-secondary-500 font-roboto flex items-center">
              <FaEnvelope
                size={20}
                className="text-secondary-500 hover:text-secondary-400"
              />
              <a
                href={`mailto:${ContactData.email}`}
                className="pl-4 font-roboto text-secondary-500 hover:underline my-1"
              >
                {ContactData.email}
              </a>
            </div>
            <div className="mt-8">
              <h3 className="text-white font-outfit text-lg uppercase">Social link</h3>
              <div className="flex space-x-4 mt-2">
                <a
                  href={ContactData.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-500 hover:text-secondary-400 my-1"
                >
                  <FaFacebookF size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-secondary-900/50 py-4">
        <Container>
          <div className="text-secondary-300 text-center">
            Copyright &copy; {currentYear}. Meralco Industrial Engineering
            Services Corporation. All rights reserved.
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
