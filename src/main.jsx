import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Home from "./pages/Home";
import Projectpage from "./pages/Projectpage";
import AllTestimonialpage from "./pages/AllTestimonialpage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/Mrquickfix/",
    element: <Home />,
    
  },
  {
    path: "/projects/all/",
    element: <Projectpage />,
  },
  {
    path: "/testimonials/all/",
    element: <AllTestimonialpage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
