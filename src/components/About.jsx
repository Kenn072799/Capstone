import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Container from "./Container";
import { FaHouseCrack, FaHammer, FaHouseCircleCheck } from "react-icons/fa6";
import aboutImages from "../data/Aboutdata";
import BlobBG from "../assets/BlobBG.png";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % aboutImages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [aboutImages.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? aboutImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % aboutImages.length);
  };

  return (
    <div className="bg-white relative">
      <Container className="flex flex-col lg:flex-row md:gap-4 py-24 z-10">
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
                <div className="absolute top-[35%] xs:top-[40%] left-0 right-0 flex justify-between p-4">
                  <button
                    className="btn bg-transparent border-transparent xs:border-secondary-400 px-5 
                    xs:hover:border-secondary-50 hover:bg-opacity-50 text-white rounded-full active:none"
                    onClick={handlePrev}
                  >
                    ❮
                  </button>
                  <button
                    className="btn bg-transparent border-transparent xs:border-secondary-400 px-5
                    xs:hover:border-secondary-50 hover:bg-opacity-50 text-white rounded-full active:none"
                    onClick={handleNext}
                  >
                    ❯
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="basis-[50%] text-center">
          <h1
            className="font-outfit font-semibold text-3xl md:text-4xl
          text-primary-500 mt-5 md:mt-0 text-left uppercase border-l-8 pl-4 py-1 border-primary-500"
          >
            About Mr. Quick Fix
          </h1>
          <div className="flex flex-col pt-10 xs:flex-row xs:pt-8 gap-2">
            <div className="border border-secondary-100 w-full h-auto py-4 px-2 my-2 shadow-md rounded-b-2xl border-t-0">
              <FaHouseCrack className="text-primary-500 text-5xl xxs:text-6xl -mt-12 mx-auto bg-transparent p-3" />
              <h3
                className="text-secondary-600 font-outfit font-light pt-3
            md:text-lg md:mx-0 md:my-0 md:py-2"
              >
                Specializing in Home Repair and Improvements.
              </h3>
            </div>
            <div className="border border-secondary-100 w-full h-auto py-4 px-2 my-5 xs:my-2 shadow-md rounded-b-2xl border-t-0">
              <FaHammer className="text-primary-500 text-5xl xxs:text-6xl -mt-12 mx-auto bg-transparent p-3" />
              <h3
                className="text-secondary-600 font-outfit font-light pt-3
            md:text-lg md:mx-0 md:my-0 md:py-2"
              >
                Committed to Excellence and Quality Craftsmanship in Every
                Project.
              </h3>
            </div>
            <div className="border border-secondary-100 w-full h-auto py-4 px-2 my-5 xs:my-2 shadow-md rounded-b-2xl border-t-0">
              <FaHouseCircleCheck className="text-primary-500 text-5xl xxs:text-6xl -mt-12 mx-auto bg-transparent p-3" />
              <h3
                className="text-secondary-600 font-outfit font-light pt-3
            md:text-lg md:mx-0 md:my-0 md:py-2"
              >
                Your Trusted Partner for All Home Maintenance and Renovation
                Needs.
              </h3>
            </div>
          </div>
          <p className="text-secondary-500 text-justify font-outfit md:[word-spacing:4px] text-sm md:text-base">
            At Mr. Quick Fix, we understand the importance of a well-maintained
            home. Our team of skilled professionals is dedicated to providing
            fast, efficient, and reliable repair services to ensure your home is
            safe, comfortable, and looking its best.
            <br />
            With years of experience in the industry, we pride ourselves on our
            ability to tackle any repair or renovation project, big or small.
            Whether it's a leaky faucet, a complete kitchen makeover, or regular
            maintenance tasks, we have the expertise to get the job done right.
            <br />
            We believe in transparency and communication, ensuring that our
            clients are informed and involved every step of the way. Our
            commitment to customer satisfaction drives us to go above and beyond
            to meet your needs and exceed your expectations.
            <br />
            Mr. Quick Fix is powered by{" "}
            <span className="text-blue-600 hover:underline hover:text-blue-500">
              <a
                target="_blank"
                href="https://www.miescor.ph/page/inner/miescor-logistics_history"
              >
                Miescor Logistic, Inc. (MLI)
              </a>
            </span>
            .
          </p>
        </div>
      </Container>
    </div>
  );
};

export default About;
