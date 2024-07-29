import React, { useEffect } from "react";
import Container from "./Container";
import Aos from "aos";
import "aos/dist/aos.css";
import Background from "../assets/Background.png";
import { HiArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    // This is the landing page where the tagline and background img is shown
    <div className="relative w-full h-screen flex justify-center items-center">
      <div
        className="fixed inset-0 bg-fixed bg-cover bg-center bg-no-repeat -z-10"
        data-aos="zoom-out"
        data-aos-easing="ease-out-sine"
        data-aos-duration="800"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <Container className="fixed h-[50vh] font-outfit">
        <div
          className="flex flex-col items-center"
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <h1
            className="text-white text-4xl
                md:text-6xl lg:text-7xl uppercase font-semibold"
          >
            Leave the Repairs to Us
          </h1>
          <h2
            className=" text-white text-lg
            md:text-xl lg:text-2xl pt-1 font-outfit"
          >
            Professional Care for Your Home
          </h2>
          <h2
            className=" text-white pb-2
                 md:text-lg lg:text-xl lg:pb-4 font-outfit font-light"
          >
            When it comes to home repairs, you deserve a service that is both
            reliable and professional.
          </h2>
          <div className="flex items-center mx-auto my-6">
            <button
              className="font-roboto text-white bg-primary-500 rounded-3xl
            px-4 py-2 md:px-6 md:py-4 hover:bg-primary-400 flex items-center"
            >
              Schedule your free consultation
              <HiArrowNarrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
