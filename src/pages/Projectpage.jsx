import React from "react";
import AllProject from "../components/AllProject";
import { Layout } from "../components/Layout";
import DividerServices from "../components/Services/DividerServices";

const Projectpage = () => {
  return (
    <Layout>
      <AllProject />
      <DividerServices />
    </Layout>
  );
};

export default Projectpage;
