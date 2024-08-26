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
          Consult us to discuss how we can help.
        </h2>
        <p className="font-roboto text-secondary-500 md:text-xl">
          If you have any questions, please feel free to contact us.
        </p>
        <div className="mt-4 text-sm md:text-base">
          <div className="my-4 flex">
            <FaPhone size={20} className="text-primary-500" />
            <div className="flex flex-col">
              {ContactData.phoneNumbers.map((number, index) => (
                <a
                  key={index}
                  href={`tel:${number.replace(/\s+/g, "")}`}
                  className="my-1 pl-4 font-roboto text-secondary-500 hover:underline"
                >
                  {number}
                </a>
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
          <div className="my-4 flex min-w-fit">
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
              Meralco Industrial Engineering Services Corporation
              <br /> 5th Floor,
              Renaissance Tower 1000 Meralco Avenue, Ortigas Center Pasig City,
              Philippines 1605
            </p>
          </div>
        </div>
        <div className="my-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.3095543908985!2d121.0614150758966!3d14.581428777544206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c813bb21467f%3A0x2aadaba9de44e01a!2sMeralco%20Industrial%20Engineering%20Services%20Corporation!5e0!3m2!1sen!2sph!4v1724694942406!5m2!1sen!2sph"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
