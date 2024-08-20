import React from "react";

const OnProcessCard = ({ project }) => {
  return (
    <div className="max-h-[350px] min-w-[300px] rounded-xl bg-white border border-secondary-100 shadow-sm mr-2 mb-4">
      <div className="p-4 text-sm font-roboto">
        <p className="py-2"><strong>Project ID:</strong> {project.projectId}</p>
        <p className="py-2"><strong>Type of Job:</strong> {project.typeOfJob}</p>
        <p className="py-2"><strong>Name:</strong> {project.name}</p>
        <p className="py-2"><strong>Address:</strong> {project.address}</p>
        <p className="py-2"><strong>Contact Number:</strong> {project.contactNumber}</p>
        <p className="py-2"><strong>Email:</strong> {project.email}</p>
        <p className="py-2"><strong>Category:</strong> {project.category}</p>
        <p className="py-2"><strong>Date:</strong> {project.date}</p>
      </div>
    </div>
  );
};

export default OnProcessCard;
