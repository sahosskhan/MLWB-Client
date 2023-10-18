// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const ThereNo = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 ">
        <div className="container flex items-center  px-6 py-40 mx-auto">
          <div className="flex flex-col items-center max-w-sm mx-auto text-center">
            <p className="p-3 text-sm font-medium text-red-500 rounded-full bg-red-50 dark:bg-gray-800">
              <i className="text-7xl fa-solid fa-circle-xmark"></i>
            </p>
            <h1 className="mt-3 text-5xl font-semibold text-gray-800 dark:text-white ">
              204 No Content
            </h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Sorry We Add Content Here Soon.
            </p>

            <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
              <Link to='/'>
              <button className="lg:w-full lg:mx-0 md:mx-0 mx-28 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-red-500 rounded-lg shrink-0 sm:w-auto hover:bg-red-600 dark:hover:bg-red-500 dark:bg-red-600">
                Take me home
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThereNo;
