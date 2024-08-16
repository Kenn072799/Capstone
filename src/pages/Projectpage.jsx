import React, { useEffect } from "react";
import AllProject from "../components/AllProject";
import { Layout } from "../components/Layout";
import DividerServices from "../components/Services/DividerServices";

const Projectpage = () => {
  useEffect(() => {
    document.title = "Mr. Quick Fix | Projects";
  }, []);

  return (
    <Layout>
      <AllProject />
      <DividerServices />
    </Layout>
  );
};

export default Projectpage;
