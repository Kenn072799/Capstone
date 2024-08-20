import React from "react";
import { FaCircle } from "react-icons/fa6";
import OnProcessCard from "./Card/OnProcessCard";
import ProcessCardData from "../../../data/ProcessCardData";

const Dashboard = () => {
    // Sort data by date
  const sortedData = ProcessCardData.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="h-screen bg-secondary-50 overflow-y-auto">
      <div className="pl-4">
        <div className="mb-4 border-b pb-4">
          <button className="mt-4 rounded-md bg-primary-500 px-6 py-2 font-roboto text-sm text-white hover:bg-primary-400">
            Add Job Order
          </button>
        </div>
        <h1 className="font-outfit text-xl uppercase text-secondary-950">
          Job Order List
        </h1>
        <div className="flex items-center space-x-2 py-4">
          <FaCircle className="text-[7px] text-[#1E90FF]" />
          <h3 className="font-outfit text-secondary-500">On Process</h3>
        </div>
        <div className="flex overflow-x-scroll">
          {sortedData.map((project) => (
            <OnProcessCard key={project.id} project={project} />
          ))}
        </div>
        <div className="flex items-center space-x-2 py-4">
          <FaCircle className="text-[7px] text-[#FFA500]" />
          <h3 className="font-outfit text-secondary-500">On Progress</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
