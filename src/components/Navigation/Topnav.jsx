import React from "react";
import Container from "../Container";
import { FaEnvelope, FaFacebookF } from "react-icons/fa6";

const topNav = () => {
  return (
    // To show some social link and contact us link
    <div className="relative z-10 w-full bg-secondary-50 md:py-2">
      <Container className="pt-1 font-roboto flex justify-between items-center">
        <div className="items-center text-secondary-800 text-sm md:flex font-light">
          <p>Powered by</p>
          {/* Miescor website link */}
          <a
            target="_blank"
            href="https://www.miescor.ph/home"
            className="font-semibold
            hover:underline hover:text-secondary-900 md:pl-1"
          >
            MIESCOR LOGISTIC, INC.
          </a>
        </div>
        <div>
          <ul className="flex items-center">
            <li className="px-2 md:px-8 font-light">
              {/* Email link */}
              <a
                href="mailto:mrquickfix@miescor.ph"
                className="text-secondary-800 hover:text-secondary-900 text-sm md:flex items-center"
              >
                <FaEnvelope className="text-primary-500 mr-2 text-lg md:px-0" />
                <p className="hidden md:flex">mrquickfix@miescor.ph</p>
              </a>
            </li>
            {/* FB link */}
            <li>
              <a target="_blank" href="https://www.facebook.com/MLIMrQuickFix">
                <FaFacebookF className="text-secondary-800 text-xl hover:text-secondary-900" />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default topNav;
