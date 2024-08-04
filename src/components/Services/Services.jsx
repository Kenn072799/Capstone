import React from "react";
import Container from "../Container";
import ServiceCard from "./ServiceCard";
import { Servicedata } from "../../data/ServiceData";

const Services = () => {
  return (
    <div className="bg-white relative pb-24 py-2">
      <Container>
        <div className="flex flex-col justify-center items-center text-center">
          <h1
            className="font-outfit font-semibold text-3xl md:text-4xl
          text-secondary-950 mt-5 md:mt-0 text-left uppercase border-l-8 pl-4 border-primary-500"
          >
            We Offer High-Quality Services
          </h1>
          <p className="font-roboto text-lg md:text-xl text-secondary-500 mt-2 mb-8">
            Exceptional Solutions Tailored to Your Needs
          </p>
          <div className="h-[1px] w-full bg-secondary-100 my-8"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Servicedata.map((service, index) => (
            <ServiceCard key={index} serviceData={service} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;