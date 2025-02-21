import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeBanner from "../pages/HomeBanner";
import Login from "../pages/Login";
import Home from "../pages/Home";
import AddTask from "../pages/AddTask";
import ManageTask from "../pages/ManageTask";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeBanner></HomeBanner>,
  },
  {
    path: "home",
    element: (
      <PrivateRoute>
        <MainLayout></MainLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "addTask",
        element: <AddTask></AddTask>,
      },
      {
        path: "manageTask",
        element: <ManageTask></ManageTask>,
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
]);

export default router;
