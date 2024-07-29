import React from "react";
import Container from "./Container";
import DividerIMG from "../assets/DividerIMG.jpg";

const Dividerservices = () => {
  return (
    // Divider section after services section shown to make user contact us more easily
    <div className="relative">
      <div
        className="bg-cover bg-no-repeat -z-10 py-[120px]"
        style={{ backgroundImage: `url(${DividerIMG})` }}
      >
        <div className="absolute inset-0 bg-secondary-500 opacity-50"></div>
        <Container className="relative">
          <h1 className="font-outfit font-semibold text-5xl text-white">
            Ready to transform your vision into reality?
          </h1>
          <p className="text-white text-lg">
            Reach out to us for a free consultation.
          </p>
          <div className="flex justify-center">
            <button
              className="font-roboto text-white bg-primary-500
            rounded-3xl px-6 py-2 hover:bg-primary-400 mt-4"
            >
              Contact us now!
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Dividerservices;
