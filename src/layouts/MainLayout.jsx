import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;