import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Project from "../components/Projects/Project";
import Divider from "../components/Dividerservices";
import { Layout } from "../components/Layout";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Divider />
      <Project />
      <Testimonials />
    </Layout>
  );
};

export default Home;
