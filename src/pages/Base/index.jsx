import React from "react";
import { Outlet } from "react-router";
import Header from "../../components/Dashboard/Header/Header";
<<<<<<< HEAD
import BreadcrumbsFeature from "../../components/BreadcrumbsFeature/BreadcrumbsFeature";

const Base = () => {
  return (
    <div data-testid="base" style={{ background: "#F4F5F7" }}>
      <Header />
      <BreadcrumbsFeature />
=======

const Base = () => {
  return (
    <div data-testid="base">
      <Header />
>>>>>>> f2a435545c7782c4ae4d9ad66563a1256829c75a
      <Outlet />
    </div>
  );
};

export default Base;
