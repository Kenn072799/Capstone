import React from "react";
import Container from "../Container";
import ProjectList from "./ProjectList";

const Project = () => (
  <div className="bg-white h-auto relative py-24">
    <Container>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="font-outfit font-semibold text-3xl md:text-4xl text-secondary-950 mt-5 md:mt-0 text-left uppercase border-l-8 pl-4 border-primary-500">
          Our Recent Projects
        </h1>
        <p className="font-roboto text-lg md:text-xl text-secondary-500 mt-2 mb-8">
          Explore Our Latest Work and Achievements
        </p>
        <div className="h-[1px] w-full bg-secondary-100 my-8"></div>
      </div>
      <ProjectList />
    </Container>
  </div>
);

export default Project;