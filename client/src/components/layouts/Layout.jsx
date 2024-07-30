import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout () {
    return (
        <div className="-mt-4">
            <div className="md:h-16 relative">
                <Navbar />
            </div>
            <div className="w-full z-20 absolute">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
