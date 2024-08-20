import React from "react";
import { FaXmark } from "react-icons/fa6";

const ConsultationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-[450px] rounded-xl bg-white p-6">
        <button
          className="absolute right-2 top-2 text-2xl text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <FaXmark />
        </button>
        <form className="space-y-4">
          <div>
            <h1 className="text-2xl font-bold">Fill up the form</h1>
            <p className="text-gray-500">
              We will get back to you within 24 hours
            </p>
          </div>
          <div>
            <input
              type="text"
              name="name"
              required
              placeholder="Name:"
              className="mt-1 block w-full rounded-xl border border-secondary-500 p-3 focus:outline-primary-500"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              required
              placeholder="Email:"
              className="mt-1 block w-full rounded-xl border border-secondary-500 p-3 focus:outline-primary-500"
            />
          </div>
          <div>
            <input
              type="number"
              name="number"
              required
              placeholder="Number:"
              className="mt-1 block w-full rounded-xl border border-secondary-500 p-3 focus:outline-primary-500"
            />
          </div>
          <div>
            <textarea
              type="text"
              name="message"
              required
              placeholder="Tell me about your needs:"
              className="mt-1 block w-full rounded-xl border border-secondary-500 p-3 focus:outline-primary-500"
            />
          </div>
          <div className="flex justify-center rounded-3xl bg-primary-500 text-white hover:bg-primary-400">
            <button
              type="submit"
              className="flex items-center px-5 py-3 text-sm md:px-6 md:py-4 md:text-base"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultationModal;
