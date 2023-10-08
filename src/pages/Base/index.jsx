import React from "react";
import { Outlet } from "react-router";
import Header from "../../components/Dashboard/Header/Header";

const Base = () => {
  return (
    <div data-testid="base">
      <Header />
      <Outlet />
    </div>
  );
};

export default Base;
