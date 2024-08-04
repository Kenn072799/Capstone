import React from "react";
import { Link } from "react-router-dom";
import { PiArrowRightLight } from "react-icons/pi";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "../../data/ProjectData";

const ProjectList = () => {
  const latestProjects = ProjectData.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {latestProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="mt-8 text-center flex justify-center">
        <Link
          to="/Mrquickfix/projects/all/"
          onClick={handleScrollToTop}
          className="text-white bg-primary-500 rounded-3xl hover:bg-primary-400 flex items-center"
        >
          <div className="flex items-center px-5 py-3 md:px-6 md:py-4 transition hover:translate-x-2">
            See more projects
            <PiArrowRightLight className="ml-2" size={20} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectList;
