import React from "react";
import ChartFeature from "../../components/ChartFeature/ChartFeature";
import TableFeature from "../../components/TableFeature/TableFeature";
import Header from "../../components/Dashboard/Header/Header";

const DashboardPage = () => {
  return (
    <div style={{background: "#F4F5F7"}}>
      <ChartFeature />
      <TableFeature />
    </div>
  );
};

export default DashboardPage;
