import { Navigate } from "react-router";
import LoginPage from "../pages/LoginPage/LoginPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import Base from "../pages/Base";

const routes = [
  {
    path: "",
    element: <Navigate to="/login-page" />,
  },
  {
    path: "login-page",
    element: <LoginPage />,
  },
  {
    path: "dashboard-page",
    element: <Base />,
    children: [
      {
        path: "",
        element: <DashboardPage />,
      },
    ],
  },
];

export { routes };
