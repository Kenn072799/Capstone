import React, { useState, lazy, Suspense } from "react";
import customerFeedback from "../../data/CustomerFeedbackData";
import Container from "../Container";

const TestimonialCard = lazy(() => import('./testimonialsCard'));

const AllTestimonials = () => {
  const testimonialsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(customerFeedback.length / testimonialsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
    });
  };

  const getCurrentPageFeedback = () => {
    const startIndex = (currentPage - 1) * testimonialsPerPage;
    const endIndex = startIndex + testimonialsPerPage;
    return customerFeedback.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    const groupStart = Math.floor((currentPage - 1) / 3) * 3;
    const groupEnd = Math.min(groupStart + 3, totalPages);
    return Array.from({ length: groupEnd - groupStart }, (_, index) => groupStart + 1 + index);
  };

  return (
    <div className="bg-white py-4">
      <Container className="min-w-fit">
        <div className="flex flex-col justify-center items-center text-center pt-24">
          <h1 className="font-outfit font-semibold text-3xl md:text-4xl text-secondary-950 mt-5 md:mt-0 text-left uppercase border-l-8 pl-4 border-primary-500">
            All Testimonials
          </h1>
          <p className="font-roboto text-lg md:text-xl text-secondary-500 mt-2 mb-8">
            Hear Directly from All Our Clients
          </p>
          <div className="h-[1px] w-full bg-secondary-100 my-8"></div>
        </div>

        <div className="flex items-center justify-center rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {getCurrentPageFeedback().map((testimonial) => (
              <Suspense key={testimonial.id} fallback={<span className="loading loading-spinner loading-lg"></span>}>
                <TestimonialCard testimonial={testimonial} />
              </Suspense>
            ))}
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8 md:text-sm">
          {currentPage > 1 && (
            <>
              <button
                className="mx-[3px] md:mx-1 px-[5px] md:px-3 md:py-1 bg-secondary-200 rounded"
                onClick={() => handleClick(1)}
              >
                First
              </button>
              <button
                className="mx-[3px] md:mx-1 px-[5px] md:px-3 md:py-1 bg-secondary-200 rounded"
                onClick={() => handleClick(currentPage - 1)}
              >
                Prev
              </button>
            </>
          )}
          {getPaginationGroup().map((pageNumber) => (
            <button
              key={pageNumber}
              className={`mx-[3px] md:mx-1 px-[5px] md:px-3 md:py-1 rounded ${
                currentPage === pageNumber ? "bg-primary-500 text-white" : "bg-secondary-200"
              }`}
              onClick={() => handleClick(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
          {currentPage < totalPages && (
            <>
              <button
                className="mx-[3px] md:mx-1 px-[5px] md:px-3 md:py-1 bg-secondary-200 rounded"
                onClick={() => handleClick(currentPage + 1)}
              >
                Next
              </button>
              <button
                className="mx-[3px] md:mx-1 px-[5px] md:px-3 md:py-1 bg-secondary-200 rounded"
                onClick={() => handleClick(totalPages)}
              >
                Last
              </button>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default AllTestimonials;