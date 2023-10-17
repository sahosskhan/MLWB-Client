// eslint-disable-next-line no-unused-vars
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
              Easiest way to enjoy movies & web series
            </h1>

            <div className="mt-8 space-y-5 ml-3">
              <p className="flex text-xl items-center -mx-2 text-gray-700 dark:text-gray-200">
                <i className="fa-brands fa-youtube"></i>

                <span className="mx-2">
                  Upto 4K UHD & All Resolution Available
                </span>
              </p>

              <p className="flex text-xl items-center -mx-2 text-gray-700 dark:text-gray-200">
                <i className="fa-solid fa-fire"></i>
                <span className="mx-2">
                  Trending & Latest All Content Available
                </span>
              </p>

              <p className="flex text-xl items-center -mx-2 text-gray-700 dark:text-gray-200">
                <i className="fa-solid fa-tv"></i>
                <span className="mx-2">
                  Support Android, Windows, Web, IOS & All Device{" "}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
            src="https://i.ibb.co/xFBjVXj/header-Home.png"
            alt="glasses photo"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
