import React, { useState } from "react";
import Container from "./Container";
import Card from "./Card";
import { Servicedata } from "../data/Servicesdata";

const Services = () => {
  return (
    <div className="bg-white relative pb-24 py-2">
      <Container>
        <h1
          className="font-outfit font-semibold text-3xl md:text-4xl
          text-primary-500 mt-5 md:mt-0 text-left uppercase border-l-8 pl-4 my-4 py-1 border-primary-500"
        >
          We Offer High-Quality Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Render the ServiceCard component for each item in the Servicedata array */}
          {Servicedata.map((Servicedata, index) => (
            <ServiceCard key={index} Servicedata={Servicedata} />
          ))}
        </div>
      </Container>
    </div>
  );
};

const ServiceCard = ({ Servicedata }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the expanded state
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Maximum length to display before truncating
  const maxLength = 150;

  // Determine if the description should be truncated
  const shouldTruncate = Servicedata.description.length > maxLength;

  // Truncate the description if it exceeds the maximum length
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    // Card service rendered here
    <Card>
      <img
        src={Servicedata.image}
        alt={Servicedata.title}
        className="w-full h-auto rounded-t-2xl"
      />
      <h1 className="font-outfit font-semibold text-2xl text-secondary-700 px-4 pt-4 pb-2">
        {Servicedata.title}
      </h1>
      <p className="font-roboto text-secondary-500 text-sm px-4 pb-4">
        {isExpanded
          ? Servicedata.description
          : truncateText(Servicedata.description, maxLength)}
      </p>
      {shouldTruncate && (
        <button
          className="text-primary-500 font-roboto text-sm hover:underline px-4 pb-4 focus:outline-none"
          onClick={toggleExpanded}
        >
          {isExpanded ? "Hide" : "See more..."}
        </button>
      )}
    </Card>
  );
};

export default Services;
