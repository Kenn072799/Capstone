import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="animate-pulse flex flex-col h-full bg-gray-100 rounded-2xl border border-secondary-100">
      <div className="bg-gray-300 h-48 rounded-t-2xl mb-4"></div>
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
      <div className="flex-1"></div>
    </div>
  );
};

export default SkeletonCard;