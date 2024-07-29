import React from "react";
import Container from "../Container";
import ProjectList from "./Projectlist";

const Project = () => {
  return (
    // Title section of project
    <div className="bg-white h-auto relative py-24">
      <Container>
        <h1
          className="font-outfit font-semibold text-3xl md:text-4xl
          text-primary-500 mt-5 md:mt-0 text-left uppercase border-l-8 pl-4 my-4 py-1 border-primary-500"
        >
          Our Recent Projects
        </h1>
        <ProjectList /> {/* Render the ProjectList component */}
      </Container>
    </div>
  );
};

export default Project;
