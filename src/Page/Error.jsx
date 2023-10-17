// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 ">
        <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
          <div className="wf-ull lg:w-1/2">
            <p className="text-7xl font-black text-red-500 dark:text-red-400">
              404 error
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Page not found
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Sorry, the page you are looking for does not exist.
            </p>

            <div className="flex items-center mt-6 gap-x-3">
              <Link to="/">
                <button className=" px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-red-500 rounded-lg shrink-0 sm:w-auto hover:bg-red-600 dark:hover:bg-red-500 dark:bg-red-600">
                  Take me home
                </button>
              </Link>
            </div>
          </div>

          <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
            <img
              className=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover "
              src="https://i.ibb.co/BTjnV0Q/404-error-jpg.webp"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
