import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import SkeletonServiceCard from '../SkeletonLoading/SkeletonCard';

const ServiceCard = ({ serviceData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
    trackVisibility: true,
    delay: 500,
  });

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const maxLength = 200;
  const shouldTruncate = serviceData.description.length > maxLength;

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '... ';
  };

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl shadow-md border border-secondary-100"
    >
      {!inView ? (
        <SkeletonServiceCard />
      ) : (
        <>
          <div className="m-w-fit h-48 bg-gray-200 rounded-t-2xl">
            <img
              src={serviceData.image}
              alt={serviceData.title}
              className="w-full h-full object-cover rounded-t-2xl"
              loading="lazy"
            />
          </div>
          <h1 className="font-outfit font-semibold text-xl text-secondary-700 px-4 py-2 text-center">
            {serviceData.title}
          </h1>
          <div className="h-[1px] w-full bg-secondary-100 px-4"></div>
          <p className="font-roboto text-secondary-500 text-sm px-4 pb-4 py-2">
            {isExpanded
              ? serviceData.description
              : truncateText(serviceData.description, maxLength)}
            {shouldTruncate && (
              <button
                className="relative text-primary-500 font-roboto font-semibold text-sm hover:underline focus:outline-none"
                onClick={toggleExpanded}
              >
                {isExpanded ? 'See less' : 'See more'}
              </button>
            )}
          </p>
        </>
      )}
    </div>
  );
};

export default ServiceCard;