import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout () {
    return (
        <div className="">
            <div className="md:h-16 z-30 relative">
                <Navbar />
            </div>
            <div className="w-full z-20 top-[24px] absolute">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
