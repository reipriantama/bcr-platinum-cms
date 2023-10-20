import { Navigate } from "react-router";
import Base from "../pages/Base";
import LoginPage from "../pages/LoginPage/LoginPage";
import CarsPage from "../pages/CarsPage/CarsPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import EditCarsPage from "../pages/EditCarsPage/EditCarsPage";

const routes = [
  {
    path: "",
    element: <Navigate to="/login" />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "dashboard",
    element: <Base />,
    children: [
      {
        path: "",
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: "cars",
    element: <Base />,
    children: [
      {
        path: "",
        element: <CarsPage />,
      },
    ],
  },
  {
    path: "edit/:carId",
    element: <Base />,
    children: [
      {
        path: "",
        element: <EditCarsPage />,
      },
    ],
  },
];

export { routes };
