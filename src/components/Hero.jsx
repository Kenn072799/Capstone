import React, { useEffect, useState } from 'react';
import Container from './Container';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Background from '../assets/Background.png';
import { PiArrowRightLight } from 'react-icons/pi';

const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = Background;
    img.onload = () => {
      setLoading(false);
      Aos.init();
    };
  }, []);

  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      {loading && (
        <div className="absolute inset-0 z-50 flex justify-center items-center bg-gray-200">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
      <div
        className={`fixed inset-0 bg-fixed bg-cover bg-center bg-no-repeat -z-10 ${loading ? 'hidden' : 'block'}`}
        data-aos="zoom-out"
        data-aos-easing="ease-out-sine"
        data-aos-duration="800"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      {!loading && (
        <Container className="fixed h-[50vh] font-outfit">
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl uppercase font-semibold text-center">
              Leave the Repairs to Us
            </h1>
            <h2 className="text-white text-lg md:text-xl lg:text-2xl pt-1 font-outfit text-center">
              Professional Care for Your Home
            </h2>
            <h2 className="text-white pb-2 md:text-lg lg:text-xl lg:pb-4 font-outfit font-light text-center">
              When it comes to home repairs, you deserve a service that is both
              reliable and professional.
            </h2>
            <div className="flex mx-auto my-6">
              <button className="font-roboto text-white bg-primary-500 rounded-3xl hover:bg-primary-400 flex items-center">
                <div className="flex items-center px-5 py-3 md:px-6 md:py-4 transition hover:translate-x-2">
                  Schedule your free consultation
                  <PiArrowRightLight className="ml-2" size={20} />
                </div>
              </button>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Hero;