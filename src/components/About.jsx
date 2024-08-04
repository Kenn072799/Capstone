import React, { useEffect, useState } from "react";
import Container from "./Container";
import {
  FaHouseCrack,
  FaHammer,
  FaHouseCircleCheck,
  FaCheck,
} from "react-icons/fa6";
import aboutImages from "../data/AboutData";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % aboutImages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [aboutImages.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % aboutImages.length);
  };

  return (
    <div className="bg-white relative py-24">
      <Container>
        <div className="flex flex-col justify-center items-center text-center">
          <h1
            className="font-outfit font-semibold text-3xl md:text-4xl
          text-secondary-950 mt-5 md:mt-0 text-left uppercase border-l-8 pl-4 mb-8 border-primary-500"
          >
            About Mr. Quick Fix
          </h1>
          <div className="flex flex-col pt-10 sm:flex-row xs:pt-8">
            <div className="w-full h-auto py-4 px-2 my-3">
              <FaHouseCrack className="text-primary-500 text-5xl sm:text-6xl mx-auto bg-primary-100 border-none rounded-2xl p-3 border mb-4" />
              <h3
                className="text-secondary-700 font-outfit pt-3
            md:text-lg md:mx-0 md:my-0 md:py-2"
              >
                Specializing in Home Repair and Improvements.
              </h3>
            </div>
            <div className="w-full h-auto py-4 px-2 xs:my-3">
              <FaHammer className="text-primary-500 text-5xl sm:text-6xl mx-auto bg-primary-100 border-none rounded-2xl p-3 border mb-4" />
              <h3
                className="text-secondary-700 font-outfit pt-3
            md:text-lg md:mx-0 md:my-0 md:py-2"
              >
                Committed to Excellence and Quality Craftsmanship in Every
                Project.
              </h3>
            </div>
            <div className="w-full h-auto py-4 px-2 xs:my-3">
              <FaHouseCircleCheck className="text-primary-500 text-5xl sm:text-6xl mx-auto bg-primary-100 border-none rounded-2xl p-3 border mb-4" />
              <h3
                className="text-secondary-700 font-outfit pt-3
            md:text-lg md:mx-0 md:my-0 md:py-2"
              >
                Your Trusted Partner for All Home Maintenance and Renovation
                Needs.
              </h3>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-secondary-100 my-8"></div>
        <div className="flex flex-col lg:flex-row md:gap-4 z-10">
          <div className="carousel relative basis-[50%]">
            {aboutImages.map((image, index) => (
              <div
                key={index}
                id={`item${index + 1}`}
                className={`carousel-item w-full h-auto ${
                  index === currentIndex ? "block" : "hidden"
                }`}
              >
                <div className="relative">
                  <img
                    src={image.slideimg}
                    alt={`Slide ${index + 1}`}
                    className="w-full rounded-2xl"
                  />
                  <div
                    className="absolute bottom-4 left-0 right-0 flex justify-center"
                    onClick={handleNext}
                  >
                    {aboutImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-3 w-3 mx-1 rounded-full ${
                          currentIndex === index
                            ? "bg-white/80"
                            : "bg-secondary-100 bg-opacity-50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="basis-[50%] text-center">
            <p className="text-secondary-500 text-justify font-roboto md:[word-spacing:4px] text-sm pt-4 md:pt-0 md:text-base flex">
              <span className="pr-2 text-green-500 mt-1">
                <FaCheck />
              </span>
              At Mr. Quick Fix, we understand the importance of a
              well-maintained home. Our team of skilled professionals is
              dedicated to providing fast, efficient, and reliable repair
              services to ensure your home is safe, comfortable, and looking its
              best.
            </p>
            <p className="text-secondary-500 text-justify font-roboto md:[word-spacing:4px] text-sm pt-4 md:pt-0 md:text-base flex">
              <span className="pr-2 text-green-500 mt-1">
                <FaCheck />
              </span>
              With years of experience in the industry, we pride ourselves on
              our ability to tackle any repair or renovation project, big or
              small. Whether it's a leaky faucet, a complete kitchen makeover,
              or regular maintenance tasks, we have the expertise to get the job
              done right.
            </p>
            <p className="text-secondary-500 text-justify font-roboto md:[word-spacing:4px] text-sm pt-4 md:pt-0 md:text-base flex">
              <span className="pr-2 text-green-500 mt-1">
                <FaCheck />
              </span>
              We believe in transparency and communication, ensuring that our
              clients are informed and involved every step of the way. Our
              commitment to customer satisfaction drives us to go above and
              beyond to meet your needs and exceed your expectations.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
