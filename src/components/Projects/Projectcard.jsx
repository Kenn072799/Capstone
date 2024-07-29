import React, { useState } from "react";
import ImageModal from "./ImageModal"; // Import the ImageModal component

const Projectcard = ({ project, onFilterByDate, onFilterByCategory }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md border border-secondary-100">
      <div className="relative cursor-pointer group">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-48 object-cover rounded-t-2xl"
        />
        <p
          className="absolute inset-0 flex justify-center items-center text-white font-roboto text-sm
        bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl ease-in-out duration-300"
          onClick={openModal} // Call the openModal function
        >
          Click to view
        </p>
      </div>
      <div className="p-4">
        <h1 className="font-outfit font-semibold text-lg text-primary-500 pb-2">
          {project.name}
        </h1>
        <div className="flex flex-col">
          <p className="font-roboto text-sm text-secondary-500">Date:</p>
          <p
            className="font-roboto text-sm text-indigo-500"
            onClick={onFilterByDate} // Call filter by date
          >
            {project.date}
          </p>
          <p className="font-roboto text-sm text-secondary-500">Category:</p>
          <div>
            {project.category.map((cat, index) => (
              <span
                key={index}
                className="font-roboto text-sm text-indigo-500"
                onClick={() => onFilterByCategory(cat)} // Call filter by category
              >
                {cat}
                {index < project.category.length - 1 && ", "}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={project.images} // Pass array of images to modal
      />
    </div>
  );
};

export default Projectcard;
