import React from "react";
import styles from "./BreadcrumbsFeature.module.css";
import { FaChevronRight } from "react-icons/fa";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const BreadcrumbsFeature = () => {
  const location = useLocation();

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const getPathName = () => {
    const path = location.pathname;
    if (path === "/dashboard") {
      return "Dashboard";
    } else if (path === "/cars") {
      return "List Cars";
    } else if (path === "/edit") {
      return "Edit"
    }
    return capitalizeFirstLetter(
      path
        .split("/")
        .filter((crumb) => crumb !== "")
        .pop()
    );
  };

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index, arr) => {
      const capitalizedCrumb =
        index === arr.length - 1 ? getPathName() : capitalizeFirstLetter(crumb);
      return (
        <div key={crumb}>
          <Link
            to={`/${crumb}`}
            style={{
              fontWeight: "300",
              lineHeight: "18px",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            {capitalizedCrumb}
          </Link>
        </div>
      );
    });

  return (
    <div>
      {location.pathname.startsWith("/cars/edit") ? null : (
        <div className={styles.breadcrumbsTitle}>
          <div>{crumbs}</div>
          <div>
            {" "}
            <FaChevronRight />{" "}
          </div>
          {getPathName()}
        </div>
      )}
    </div>
  );
};

export default BreadcrumbsFeature;
