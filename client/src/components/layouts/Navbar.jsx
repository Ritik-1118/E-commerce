import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/Slice/authSlice";
import { ArrowRightIcon, Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";


const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "Products", href: "/products", current: false },
    { name: "Cart", href: "/cart", current: false },
    { name: "FAQ", href: "/faq", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
    

export default function Navbar() {
    const location = useLocation();
    const dispatch = useDispatch();
    const { itemcount } = useSelector((state) => state.cart);
    const user = JSON.parse(useSelector((state) => state.auth.user));
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isChildHovered, setIsChildHovered] = useState(false);

    navigation.forEach((currnav) => {
        if (currnav.href==location.pathname) {
            currnav.current=true;
        }else{
            currnav.current=false;
        }
    });

    const handleLogout = async () => {
        dispatch(logout());
        window.location.reload();
    }
    // console.log(isChildHovered);
    return (
        <>
            <div className={` md:min-h-full group`}>
                <nav className={`bg-[#010103] md:bg-transparent md:group-hover:bg-[#010103]/30`}>
                    <div className="h-6 bg-red-600 flex items-center justify-center font-serif italic text-white/90 w-full">
                        <span>Up to 50% off on all Products! </span>
                        <Link to={'/products'} className="text-sm underline underline-offset-2 flex hover:pl-1 items-center transition ease-in duration-300 transform hover:scale-110">
                            <span className="w-[70px] pl-1 flex items-center justify-center">Shop Now</span>
                            <ArrowRightIcon className="text-sm w-4 pt-[3px]" />
                        </Link>
                    </div>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className={`flex h-16 md:h-20 items-center justify-between`}>
                            <div className={`flex items-center text-white -ml-4 md:-ml-0`}>
                                <div className="flex-shrink-0">
                                    <div className="flex justify-center items-center gap-2">
                                        <img
                                            className=" h-28 w-28 md:h-40 md:w-40"
                                            src="/assets/logo.png"
                                            alt="E-commerce logo"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={`hidden md:flex bg-[#010103] rounded-full px-10 py-2 font-serif shadow-2xl`}>
                                {navigation.map((item) => (
                                    <Link to={item.href} key={item.name}>
                                        <button
                                            key={item.name}
                                            className={classNames(
                                                item.current
                                                    ? "underline underline-offset-4 text-[#01bbf9] font-bold uppercase"
                                                    : "text-gray-300 hover:bg-transparent hover:border hover:border-[#01bbf9] hover:text-white",
                                                "block rounded-md px-4 py-2 text-base font-medium transition ease-in-out duration-300 transform hover:scale-110"
                                            )}
                                            aria-current={item.current ? "page" : undefined}
                                        >
                                            {item.name}
                                        </button>
                                    </Link>
                                ))}
                            </div>
                            <div className={`hidden md:block`}>
                                <div className="ml-4 flex items-center md:ml-6">
                                    <div className=" border-2 border-gray-900/80 group-hover:border-white bg-white/30 hover:bg-transparent flex items-center rounded-full py-1 px-1">
                                        <BiSearch className="text-xl text-gray-800/80 group-hover:text-gray-50 mx-1 cursor-pointer hover:shadow-lg transition ease-in-out duration-300 transform hover:scale-110"/>
                                        <input type="search" name="search" id="search" placeholder="What are you looking for?" className="bg-transparent text-black text-[15px] px-2 rounded-full mr-2 border-none focus:outline-none focus:border-transparent hover:text-white" />
                                    </div>
                                    <NavLink
                                        to={'/cart'}
                                        type="button"
                                        className="relative rounded-md hover:border-gray-300 text-2xl pr-4 p-2 text-gray-200 hover:text-white transition ease-in-out duration-300 transform hover:scale-110"
                                    >
                                        <HiOutlineShoppingCart className="font-bold group-hover:text-inherit text-indigo-200"/>
                                        <div className="absolute top-0 right-1 bg-blue-500 text-gray-200 text-[13px] rounded-full h-4 w-4 flex items-center justify-center">{itemcount}</div>
                                    </NavLink>
                                    <button
                                        type="button"
                                        className="rounded-full  p-1 pr-3 text-2xl text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 transition ease-in-out duration-300 transform hover:scale-110"
                                    >
                                        <BellIcon aria-hidden="true" className="h-6 w-6 font-bold group-hover:text-inherit text-indigo-200"/>
                                    </button>

                                    {/* Profile dropdown */}
                                    <div className="relative ml-3 transition ease-in-out duration-300 transform hover:scale-110">
                                        <button
                                            className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                                        >
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src={user.imageUrl || "./assets/profile.jpeg"}
                                                alt="profile"
                                            />
                                        </button>
                                        {isProfileOpen && (
                                            <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-[#010103] py-1 shadow-lg ring-1 ring-white text-white/80 ring-opacity-5 focus:outline-none">
                                                <div className="px-2 flex flex-col gap-2">
                                                    <span className="uppercase flex">Hey! {user.username}</span>
                                                    <span className="py-1">{user.email}</span>
                                                    <div
                                                        className="border w-1/2 flex items-center justify-center bg-red-500 hover:bg-transparent hover:border-red-500 hover:translate-x-1 hover:translate-y-0 rounded-lg text-white/90 cursor-pointer"
                                                        onClick={handleLogout}
                                                    >
                                                        Logout
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={`-mr-2 flex md:hidden  ${ !isChildHovered && "md:-mb-40 "}`}
                                onMouseEnter={() => {setIsChildHovered(true) }}
                                onMouseLeave={() => {setIsChildHovered(false)}}
                            >
                                {/* Mobile menu button */}
                                <button
                                    className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white transition ease-linear duration-300 transform hover:scale-110"
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {isMenuOpen ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* for mobile size */}
                    {isMenuOpen && (
                        <div className={`md:hidden `}>
                            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                                {navigation.map((item) => (
                                    <Link to={item.href} key={item.name}>
                                        <button
                                            key={item.name}
                                            className={classNames(
                                                item.current
                                                    ? "underline underline-offset-4 text-[#01bbf9]"
                                                    : "text-gray-300 hover:bg-transparent hover:border hover:border-[#01bbf9] hover:text-white",
                                                "block rounded-md px-4 py-2 text-base font-medium transition ease-linear duration-300 transform hover:scale-110"
                                            )}
                                            aria-current={item.current ? "page" : undefined}
                                        >
                                            {item.name}
                                        </button>
                                    </Link>
                                ))}
                            </div>
                            <div className="border-t border-gray-700 pt-4 pb-3">
                                <div className="flex items-center px-5">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src={user.imageUrl || "./assets/profile.jpeg"}
                                            alt="profile"
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-base font-medium leading-none text-white py-2">
                                            Hey! <span className="uppercase">{user.username}</span>
                                        </div>
                                        <div className="text-sm font-medium leading-none text-gray-400">
                                            {user.email}
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="transition ease-linear duration-300 transform hover:scale-110 ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                                <div className="mt-3 space-y-1 px-2 text-white">
                                    <div className="px-2 py-2 my-2 flex flex-col gap-2">
                                        <div
                                            className="border w-1/3 py-2 flex items-center justify-center bg-gray-500 rounded-lg text-white/90 cursor-pointer hover:bg-transparent shadow-2xl transition ease-linear duration-300 transform hover:scale-110"
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </nav>
            </div>
        </>
    );
}
