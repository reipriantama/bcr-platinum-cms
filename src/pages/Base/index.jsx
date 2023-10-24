import React from "react";
import { Outlet } from "react-router";
import Header from "../../components/Dashboard/Header/Header";
import BreadcrumbsFeature from "../../components/BreadcrumbsFeature/BreadcrumbsFeature";
import Bar from "../../components/Dashboard/Sidebar/Bar";

const Base = () => {
  return (
    <div
      data-testid="base"
      style={{ background: "#F4F5F7", paddingBottom: "52px" }}
    >
      <Bar />
      <Header />
      <BreadcrumbsFeature />
      <Outlet />
    </div>
  );
};

export default Base;
