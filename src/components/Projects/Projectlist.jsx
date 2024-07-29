import React from "react";
import { Projectdata } from "../../data/Projectdata";
import Projectcard from "./Projectcard";
import { Link } from "react-router-dom";

const Projectlist = () => {
  // Sort projects by date in descending order and slice the first 6 projects
  const latestProjects = Projectdata.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  ).slice(0, 6);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    // Project cards are rendered here using the latestProjects array
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {latestProjects.map((project) => (
          <Projectcard key={project.id} project={project} />
        ))}
      </div>
      <div className="mt-8 text-center flex justify-center">
        <button
          onClick={handleScrollToTop}
          className="text-white bg-primary-500 rounded-3xl px-6 py-2 hover:bg-primary-400"
        >
          <Link to="/Projects">See more</Link>
        </button>
      </div>
    </div>
  );
};

export default Projectlist;
