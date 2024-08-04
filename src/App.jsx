import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Projectpage from './pages/Projectpage';
import AllTestimonialpage from './pages/AllTestimonialpage';

const router = createBrowserRouter([
  {
    path: "/Mrquickfix/",
    element: <Home />,
  },
  {
    path: "/Mrquickfix/projects/all/",
    element: <Projectpage />,
  },
  {
    path: "/Mrquickfix/testimonials/all/",
    element: <AllTestimonialpage />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;