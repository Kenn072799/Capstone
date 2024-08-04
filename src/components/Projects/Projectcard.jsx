import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import ImageModal from "./ImageModal";
import SkeletonCard from "../SkeletonLoading/SkeletonCard";

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
    trackVisibility: true,
    delay : 500,
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div ref={ref} className="flex flex-col h-full">
      {!inView ? (
        <SkeletonCard />
      ) : (
        <div className="bg-white rounded-2xl border border-secondary-100 box-border flex-grow overflow-hidden transition hover:-translate-y-2 hover:shadow-xl relative">
          <div className="relative cursor-pointer group" onClick={openModal}>
            <div className="w-full h-48 bg-gray-200">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover rounded-t-2xl"
                loading="lazy"
              />
            </div>
            <p
              className="absolute inset-0 flex justify-center items-center text-white font-roboto text-sm
              bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl ease-in-out duration-300"
            >
              Click to view
            </p>
          </div>
          <div>
            <h1
              className="font-outfit font-semibold text-xl text-secondary-700 p-4 cursor-pointer"
              onClick={openModal}
            >
              {project.name}
            </h1>
          </div>
          <div
            className="flex flex-col px-4 pb-4 flex-grow cursor-pointer"
            onClick={openModal}
          >
            <p className="font-roboto text-sm text-secondary-500">Date:</p>
            <p className="font-roboto text-sm text-indigo-500">{project.date}</p>
            <p className="font-roboto text-sm text-secondary-500">Category:</p>
            <div>
              {project.category.map((cat, index) => (
                <span key={index} className="font-roboto text-sm text-indigo-500">
                  {cat}
                  {index < project.category.length - 1 && ", "}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
      {isModalOpen && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          images={project.images}
        />
      )}
    </div>
  );
};

export default ProjectCard;
