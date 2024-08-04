import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";

const testimonialCard = ({ testimonial }) => {
  return (
    <div
      className="testimonial-card py-4 px-10 max-w-2xl rounded-2xl text-center shadow-sm md:mx-10
    bg-secondary-50 border border-secondary-200 my-24 relative"
    >
      <div className="flex justify-center">
        <FaQuoteLeft className="text-primary-500 text-7xl xxs:text-6xl -mt-12 bg-transparent mr-3 xxs:mr-7 md:mr-14" />
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="rounded-full mb-4 w-28 h-28 object-cover border-4 border-primary-500 -mt-[68px]"
        />
        <FaQuoteLeft className="text-primary-500 text-7xl xxs:text-6xl -mt-12 bg-transparent scale-x-[-1] ml-3 xs:ml-7 md:ml-14" />
      </div>
      <h2 className="text-xl font-semibold text-secondary-900">
        {testimonial.name}
      </h2>
      <p className="text-secondary-500 mt-2 text-center">
        {testimonial.feedback}
      </p>
    </div>
  );
};

export default testimonialCard;
