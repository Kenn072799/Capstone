import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Projectpage from "./pages/Projectpage";
import AllTestimonialpage from "./pages/AllTestimonialpage";
import MainNav from "./components/Navigation/Mainnav";

const router = createBrowserRouter([
  {
    path: "/Mrquickfix/",
    element: <Home />,
  },
  {
    path: "/Mrquickfix/projects/",
    element: <Projectpage />,
  },
  {
    path: "/Mrquickfix/testimonials/",
    element: <AllTestimonialpage />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}>
      <MainNav />
      {/* other components if needed */}
    </RouterProvider>
  );
};

export default App;
