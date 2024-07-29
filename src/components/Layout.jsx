import React from "react";
import Topnav from "./Navigation/Topnav";
import Mainnav from "./Navigation/Mainnav";
import Topline from "./Navigation/Topline";

export const Layout = ({ children }) => {
  return (
    // This layout use for all pages to render Navbar automatically
    <>
      <Topline></Topline>
      <Topnav></Topnav>
      <Mainnav></Mainnav>
      <div>{children}</div>
    </>
  );
};
