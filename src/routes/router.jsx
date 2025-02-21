import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeBanner from "../pages/HomeBanner";
import Login from "../pages/Login";
import AddTask from "../pages/AddTask";
import ManageTask from "../pages/ManageTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeBanner></HomeBanner>,
  },
  {
    path: "home",
    element: <MainLayout></MainLayout>,
    children: [
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
