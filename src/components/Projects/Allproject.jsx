import React, { useState } from "react";
import { Projectdata } from "../../data/Projectdata";
import Projectcard from "./Projectcard";
import Container from "../Container";

const Allproject = () => {
  const [selectedCategory, setSelectedCategory] = useState("Latest");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    "Latest",
    "Fits-out",
    "Electrical Works",
    "Kitchen and Bath Renovation",
    "Aircon Services",
    "Door and Window Repairs",
    "Outdoor and Landscaping",
    "Household Cleaning Services",
  ];

  // Sort projects by date and filter by selected category
  const sortedProjects = Projectdata.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const filteredProjects =
    selectedCategory === "Latest"
      ? sortedProjects
      : sortedProjects.filter((project) =>
          project.category.includes(selectedCategory)
        );

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-white h-auto py-24">
      <Container>
        <h1 className="font-outfit font-semibold text-3xl md:text-4xl text-primary-500 mb-2">
          All Projects
        </h1>
        {/* Dropdown filter */}
        <div className="relative inline-block text-left z-10">
          <div>
            <button
              type="button"
              onClick={toggleDropdown}
              className="font-roboto inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              Filter: {selectedCategory}
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.98l3.71-3.75a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div
              className="font-roboto origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100 ${
                      selectedCategory === category ? "bg-gray-100" : ""
                    }`}
                    role="menuitem"
                    tabIndex="-1"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Projects list */}
        <div className="h-[1px] w-full bg-gray-200 my-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project) => (
            <Projectcard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Allproject;
