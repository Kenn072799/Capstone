import React from "react";
import { Layout } from "../components/Layout";
import AllTestimonials from "../components/Testimonials/AllTestimonials";
import DividerServices from "../components/Services/DividerServices";

const AllTestimonialpage = () => {
  return (
    <Layout>
      <AllTestimonials />
      <DividerServices />
    </Layout>
  );
};

export default AllTestimonialpage;
