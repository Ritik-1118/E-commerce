import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout () {
    return (
        <>
            <div className="md:h-16">
                <Navbar />
            </div>
            <div className="w-full bg-gray-100 items-baseline">
                <Outlet />
            </div>
        </>
    );
}

export default Layout;
