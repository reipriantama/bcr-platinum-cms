import { Navigate } from "react-router";
import Base from "../pages/Base";
import LoginPage from "../pages/LoginPage/LoginPage";
import CarsPage from "../pages/CarsPage/CarsPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import Base from "../pages/Base";

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
<<<<<<< HEAD
    path: "dashboard",
=======
    path: "dashboard-page",
>>>>>>> f2a435545c7782c4ae4d9ad66563a1256829c75a
    element: <Base />,
    children: [
      {
        path: "",
        element: <DashboardPage />,
      },
    ],
<<<<<<< HEAD
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
=======
>>>>>>> f2a435545c7782c4ae4d9ad66563a1256829c75a
  },
];

export { routes };
