import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout () {
    return (
        <div className="">
            <div className="md:h-16 z-30 relative">
                <Navbar />
            </div>
            <div className="w-full z-20 top-[24px] absolute">
                <Outlet />
                <div className="relative bottom-0">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Layout;
