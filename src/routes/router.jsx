import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeBanner from "../pages/HomeBanner";
import Login from "../pages/Login";
import Home from "../pages/Home";
import AddTask from "../pages/AddTask";
import PrivateRoute from "./PrivateRoute";
import EditTask from "../pages/EditTask";

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
        path: "editTask/:id",
        element: <EditTask></EditTask>
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
]);

export default router;
