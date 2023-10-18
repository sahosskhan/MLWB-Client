// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
const Navbar = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <div>
        <div className="navbar  ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost xl:hidden">
                <TfiMenu className="text-xl font-bold"></TfiMenu>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] bg-opacity-20 bg-white backdrop-blur-3xl border-none filter drop-shadow-md rounded-2xl p-2 w-64"
              >
                <NavLink to="/">
                  <li className="text-xl font-semibold ">
                    <a>Home</a>
                  </li>{" "}
                </NavLink>
                <NavLink to="/productadd">
                  <li className="text-xl font-semibold ">
                    <a>Add Product</a>
                  </li>
                </NavLink>
                <li className="text-xl font-semibold ">
                  <a>My Cart</a>
                </li>
                <NavLink to="/login">
                  <li className="text-xl font-semibold ">
                    <a>Login</a>
                  </li>
                </NavLink>
              </ul>
            </div>

            <Logo></Logo>
          </div>
          <div className="navbar-center hidden xl:flex">
            <ul className=" dark:text-white menu menu-horizontal px-1">
              <NavLink to="/">
                <li className="text-2xl font-semibold ">
                  <a>Home</a>
                </li>{" "}
              </NavLink>
              <NavLink to="/productadd">
                <li className="text-2xl font-semibold ">
                  <a>Add Product</a>
                </li>
              </NavLink>
              <li className="text-2xl font-semibold ">
                <a>My Cart</a>
              </li>
              <NavLink to="/login">
                <li className="text-2xl font-semibold ">
                  <a>Login</a>
                </li>
              </NavLink>
            </ul>
          </div>
          <div className="navbar-end lg:mr-10">
            <div className="dropdown dropdown-end  lg:mr-10">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full border-none">
                  <img src="https://i.ibb.co/HDJMNSK/user.png" alt="" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu  menu-sm dropdown-content mt-3 z-[1]"
              >
                <div className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-opacity-20 bg-white backdrop-blur-3xl border-none filter drop-shadow-md rounded-2xl p-2">
                  <a href="#" className="flex items-center p-3 -mt-2">
                    <img
                      className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                      src="https://i.ibb.co/HDJMNSK/user.png"
                      alt="jane avatar"
                    />
                    <div className="mx-1">
                      <h1 className="text-sm font-semibold dark:text-white text-black">
                        Jane Doe
                      </h1>
                      <p className="text-sm dark:text-white text-black/70">
                        janedoe@exampl.com
                      </p>
                    </div>
                  </a>

                  <hr className="border-gray-200 " />

                  <a
                    href="#"
                    className="block px-4 py-3 text-[15px] dark:text-white text-black  hover:bg-blue-300/70 rounded-xl mt-1"
                  >
                    Register
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-3 text-[15px] dark:text-white text-black  hover:bg-blue-300/70 rounded-xl "
                  >
                    Sign In
                  </a>

                  <a
                    href="#"
                    className="block px-4 py-3 text-[15px] dark:text-white text-black  hover:bg-blue-300/70 rounded-xl mt-1"
                  >
                    Sign Out
                  </a>
                </div>
              </ul>
            </div>
            <h1 className="flex items-center">
             <span className="text-lg dark:text-white mr-1 lg:flex hidden"> Dark Mode</span>
              <input
                onClick={handleThemeSwitch}
                type="checkbox"
                className="toggle toggle-lg"
                checked
              />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
