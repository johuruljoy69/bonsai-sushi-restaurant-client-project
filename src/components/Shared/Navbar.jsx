import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = <>
        <NavLink className={({ isActive }) => (isActive ? 'tw-menu-bg' : 'hover:bg-orange-600 py-2 px-2')} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'tw-menu-bg' : 'hover:bg-orange-600 py-2 px-2')} to="/menu">Our Menu</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'tw-menu-bg' : 'hover:bg-orange-600 py-2 px-2')} to="/dashboard">Dashboard</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'tw-menu-bg' : 'hover:bg-orange-600 py-2 px-2')} to="/shop"><span className="flex items-center gap-2">Shop <FaShoppingCart /></span></NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'tw-menu-bg' : 'hover:bg-orange-600 py-2 px-2')} to="/contact">Contact Us</NavLink>

    </>
    return (
        <nav className="bg-gray-800 w-full fixed z-10">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Medium and large navbar */}
                    <div className="flex items-center justify-between gap-16">
                        <div className="flex-shrink-0">
                            <h2 className="text-xl font-bold text-white">Bonsai Sushi</h2>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-3 text-white">
                                {navItems}
                            </div>
                        </div>
                    </div>{/*end of  Medium and large navbar */}

                    {/* user login/logout */}
                    <div className="flex items-center gap-5">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full border border-white">
                                    <img src="https://ibb.co/8jzkSJw" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                        <button className="text-white font-bold py-2 px-3 bg-orange-600 hover:bg-orange-700 hidden md:block ">Order Now</button>
                    </div>{/* end of user login/logout */}

                    {/* Mobile and small navbar */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="tw-menu"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <FiMenu className="text-3xl" />
                            ) : (
                                <CgClose className="text-3xl" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div ref={ref} className="px-5 pt-2 pb-3 space-y-2 sm:px-3 flex flex-col text-white">
                            {navItems}
                        </div>
                    </div>
                )}
            </Transition>{/* end of Mobile and small navbar */}
        </nav>

    );
};

export default Navbar;