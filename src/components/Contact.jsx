import React from "react";
import Container from "./Container";
import ContactData from "../data/ContactData";
import {
  FaPhone,
  FaFacebookF,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="contact" name="contact" className="relative bg-white py-24">
      <Container>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="mt-5 border-l-8 border-primary-500 pl-4 text-left font-outfit text-3xl font-semibold uppercase text-secondary-950 md:mt-0 md:text-4xl">
            Contact us
          </h1>
          <p className="mb-8 mt-2 font-roboto text-secondary-500 md:text-xl">
            Get in Touch With Us
          </p>
          <div className="my-8 h-[1px] w-full bg-secondary-100"></div>
        </div>
        <h2 className="font-roboto text-2xl font-semibold text-secondary-900">
          Have a project in mind?
        </h2>
        <p className="font-roboto text-secondary-500 md:text-xl">
          Contact us to discuss how we can help.
        </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="mt-4">
            <div className="my-4 flex">
              <FaPhone size={20} className="text-primary-500" />
              <div className="flex flex-col">
                {ContactData.phoneNumbers.map((number, index) => (
                  <p
                    key={index}
                    className="pl-4 font-roboto text-secondary-500"
                  >
                    {number}
                  </p>
                ))}
              </div>
            </div>
            <div className="my-4 flex items-center">
              <FaEnvelope size={20} className="text-primary-500" />
              <a
                href={`mailto:${ContactData.email}`}
                className="pl-4 font-roboto text-secondary-500 hover:underline"
              >
                {ContactData.email}
              </a>
            </div>
            <div className="my-4 flex">
              <FaFacebookF size={20} className="text-primary-500" />
              <a
                href={ContactData.facebook}
                className="pl-4 font-roboto text-secondary-500 hover:underline"
                target="_blank"
              >
                {ContactData.facebook}
              </a>
            </div>
            <div className="my-4 flex md:max-w-[50%]">
              <FaLocationDot size={20} className="min-w-fit text-primary-500" />
              <p className="pl-4 font-roboto text-secondary-500">
                Meralco Industrial Engineering Services Corporation 5th Floor,
                Renaissance Tower 1000 Meralco Avenue, Ortigas Center Pasig
                City, Philippines 1600
              </p>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  required="required"
                  placeholder="Name:"
                  className="mt-1 block w-full rounded-xl border border-gray-300 p-3 focus:outline-primary-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  required="required"
                  placeholder="Email:"
                  className="mt-1 block w-full rounded-xl border border-gray-300 p-3 focus:outline-primary-500"
                />
              </div>
              <div>
                <input
                  type="number"
                  name="number"
                  required="required"
                  placeholder="Number: "
                  className="mt-1 block w-full rounded-xl border border-gray-300 p-3 focus:outline-primary-500"
                />
              </div>
              <div>
                <textarea
                  type="text"
                  name="message"
                  required="required"
                  placeholder="Tell me about your needs:"
                  className="mt-1 block w-full rounded-xl border border-gray-300 p-3 focus:outline-primary-500"
                />
              </div>
              <div className="flex max-w-32 justify-center rounded-3xl bg-primary-500 text-white hover:bg-primary-400">
                <button
                  type="submit"
                  className="flex items-center text-sm md:text-base px-5 py-3 md:px-6 md:py-4"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
