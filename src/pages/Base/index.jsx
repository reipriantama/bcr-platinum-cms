import React from "react";
import { Outlet } from "react-router";
import Header from "../../components/Dashboard/Header/Header";
import BreadcrumbsFeature from "../../components/BreadcrumbsFeature/BreadcrumbsFeature";

const Base = () => {
  return (
    <div data-testid="base" style={{ background: "#F4F5F7" }}>
      <Header />
      <BreadcrumbsFeature />
      <Outlet />
    </div>
  );
};

export default Base;
