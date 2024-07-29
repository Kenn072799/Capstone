import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Home from "./pages/Home";
import Projectpage from "./pages/Projects/Projectpage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    
  },
  {
    path: "/Projects",
    element: <Projectpage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
