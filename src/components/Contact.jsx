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
    <div className="relative bg-white py-24">
      <Container>
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="font-outfit font-semibold text-3xl md:text-4xl text-secondary-950 mt-5 md:mt-0 text-left uppercase border-l-8 pl-4 border-primary-500">
            Contact us
          </h1>
          <p className="font-roboto text-lg md:text-xl text-secondary-500 mt-2 mb-8">
            Get in Touch With Us
          </p>
          <div className="h-[1px] w-full bg-secondary-100 my-8"></div>
        </div>
        <h2 className="font-roboto font-semibold text-2xl text-secondary-900">
          Have a project in mind?
        </h2>
        <p className="font-roboto text-xl text-secondary-500">
          Contact us to discuss how we can help.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="mt-4">
            <div className="flex my-4">
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
            <div className="flex items-center my-4">
              <FaEnvelope size={20} className="text-primary-500" />
              <a
                href={`mailto:${ContactData.email}`}
                className="pl-4 font-roboto text-secondary-500 hover:underline"
              >
                {ContactData.email}
              </a>
            </div>
            <div className="flex my-4">
              <FaFacebookF size={20} className="text-primary-500" />
              <a
                href={ContactData.facebook}
                className="pl-4 font-roboto text-secondary-500 hover:underline"
                target="_blank"
              >
                {ContactData.facebook}
              </a>
            </div>
            <div className="flex my-4 md:max-w-[50%]">
              <FaLocationDot size={20} className="text-primary-500 min-w-fit" />
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
                  className="mt-1 block w-full border border-gray-300 rounded-xl p-3 focus:outline-primary-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  required="required"
                  placeholder="Email:"
                  className="mt-1 block w-full border border-gray-300 rounded-xl p-3 focus:outline-primary-500"
                />
              </div>
              <div>
                <input
                  type="number"
                  name="number"
                  required="required"
                  placeholder="Number: "
                  className="mt-1 block w-full border border-gray-300 rounded-xl p-3 focus:outline-primary-500"
                />
              </div>
              <div>
                <textarea
                  type="text"
                  name="message"
                  required="required"
                  placeholder="Tell me about your needs:"
                  className="mt-1 block w-full border border-gray-300 rounded-xl p-3 focus:outline-primary-500"
                />
              </div>
              <div className="text-white bg-primary-500 rounded-3xl hover:bg-primary-400 max-w-32 flex justify-center">
                <button
                  type="submit"
                  className="flex items-center px-5 py-3 md:px-6 md:py-4"
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
