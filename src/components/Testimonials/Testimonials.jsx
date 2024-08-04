import React, { useState, useEffect, useRef, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { PiArrowRightLight } from "react-icons/pi";
import Container from "../Container";
import customerFeedback from "../../data/CustomerFeedbackData";
const TestimonialsCard = lazy(() => import('./testimonialsCard'));

const Testimonials = () => {
  const testimonialsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPages = Math.ceil(customerFeedback.length / testimonialsPerPage);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialsPerPage - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex, currentPage]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getCurrentPageFeedback = () => {
    const startIndex = currentPage * testimonialsPerPage;
    const endIndex = startIndex + testimonialsPerPage;
    return customerFeedback.slice(startIndex, endIndex);
  };

  return (
    <div className="bg-white relative py-4">
      <Container>
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="font-outfit font-semibold text-3xl md:text-4xl text-secondary-950 mt-5 md:mt-0 text-left uppercase border-l-8 pl-4 border-primary-500">
            What our clients say
          </h1>
          <p className="font-roboto text-lg md:text-xl text-secondary-500 mt-2 mb-8">
            Hear Directly from Those We've Served
          </p>
          <div className="h-[1px] w-full bg-secondary-100 my-8"></div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden border-box">
          <div className="relative max-w-2xl mx-auto rounded-2xl py-4">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {getCurrentPageFeedback().map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
                  <TestimonialsCard />
                  </Suspense>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-4">
          {getCurrentPageFeedback().map((_, index) => (
            <div
              onClick={() => setCurrentIndex(index)}
              key={index}
              className={`h-3 w-3 mx-1 rounded-full transition-all duration-300 ease-in-out cursor-pointer ${
                currentIndex === index ? "bg-primary-500" : "bg-secondary-200"
              }`}
            />
          ))}
        </div>

        <div className="mt-8 text-center flex justify-center">
          <Link
            to="/testimonials/all/"
            onClick={handleScrollToTop}
            className="text-white bg-primary-500 rounded-3xl hover:bg-primary-400 flex items-center"
          >
            <div className="flex items-center px-5 py-3 md:px-6 md:py-4 transition hover:translate-x-2">
              See more testimonials
              <PiArrowRightLight className="ml-2" size={20} />
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;