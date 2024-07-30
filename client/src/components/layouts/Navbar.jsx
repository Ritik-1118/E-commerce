import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/Slice/authSlice";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { HiOutlineShoppingCart } from "react-icons/hi";


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
    const dispatch = useDispatch();
    const { itemcount } = useSelector((state) => state.cart);
    const user = JSON.parse(useSelector((state) => state.auth.user));
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isChildHovered, setIsChildHovered] = useState(false);

    const handleLogout = async () => {
        dispatch(logout());
        window.location.reload();
    }
    // console.log(isChildHovered);
    return (
        <>
            <div className={` min-h-full mt-4 group`}>
                <nav className={`bg-[#010103]`}>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className={`flex h-16 items-center justify-between`}>
                            <div className={`flex items-center text-white `}>
                                <div className="flex-shrink-0">
                                    <div className="flex justify-center items-center gap-2">
                                        <img
                                            className="h-10 w-10"
                                            src="/assets/cartLogo.png"
                                            alt="E-commerce logo"
                                        />
                                        <span className="font-bold font-serif text-xl italic">
                                            E-commerce
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className={`hidden md:flex bg-[#010103] rounded-full px-10 mt-10 z-50 py-2 font-serif shadow-2xl`}>
                                {navigation.map((item) => (
                                    <Link to={item.href} key={item.name}>
                                        <button
                                            key={item.name}
                                            className={classNames(
                                                item.current
                                                    ? "underline underline-offset-4 text-[#01bbf9]"
                                                    : "text-gray-300 hover:bg-transparent hover:border hover:border-[#01bbf9] hover:text-white",
                                                "block rounded-md px-4 py-2 text-base font-medium"
                                            )}
                                            aria-current={item.current ? "page" : undefined}
                                        >
                                            {item.name}
                                        </button>
                                    </Link>
                                ))}
                            </div>
                            <div className={`hidden md:block `}>
                                <div className="ml-4 flex items-center md:ml-6">
                                    <NavLink
                                        to={'/cart'}
                                        type="button"
                                        className="relative rounded-md hover:border-gray-300 text-2xl pr-4 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <HiOutlineShoppingCart />
                                        <div className="absolute top-0 right-1 bg-blue-500 text-white/90 text-[13px] rounded-full h-4 w-4 flex items-center justify-center">{itemcount}</div>
                                    </NavLink>
                                    <button
                                        type="button"
                                        className="rounded-full  p-1 pr-3 text-2xl text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>

                                    {/* Profile dropdown */}
                                    <div className="relative ml-3 z-50">
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
                                            <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="px-2 flex flex-col gap-2">
                                                    <span>{user.username}</span>
                                                    <span className="py-1">{user.email}</span>
                                                    <div
                                                        className="border w-1/2 flex items-center justify-center bg-gray-500 rounded-lg text-white/90 cursor-pointer"
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
                                    className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
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
                                                "block rounded-md px-4 py-2 text-base font-medium"
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
                                        <div className="text-base font-medium leading-none text-white">
                                            {user.username}
                                        </div>
                                        <div className="text-sm font-medium leading-none text-gray-400">
                                            {user.email}
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                                <div className="mt-3 space-y-1 px-2 text-white">
                                    <div className="px-2 py-2 my-2 flex flex-col gap-2">
                                        <div
                                            className="border w-1/3 py-2 flex items-center justify-center bg-gray-500 rounded-lg text-white/90 cursor-pointer hover:bg-transparent shadow-2xl"
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
