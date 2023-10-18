// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Brand = ({ items }) => {
  const { name, photo, brand, type, price, rating } = items || {};
  return (
    <div>
      <section>
        <div className="w-full lg:max-w-lg overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-600">
          <img
            className="object-cover  lg:h-[700px] w-full"
            src={photo}
            alt="avatar"
          />

          <div className="flex items-center px-6 py-3 bg-red-500">
            <h1 className="text-2xl font-semibold text-white">{name}</h1>
          </div>

          <div className="px-6 py-4">
            <div className="flex items-center mt-4 text-red-700 dark:text-red-200">
              <h1 className="text-xl font-semibold text-red-800 dark:text-white">
                <i className="fa-solid fa-circle-dot"></i> Content Brand:{" "}
                {brand}
              </h1>
            </div>
            <div className="flex items-center mt-4 text-red-700 dark:text-red-200">
              <h1 className="text-xl font-semibold text-red-800 dark:text-white">
                <i className="fa-solid fa-tags"></i> Content Type: {type}
              </h1>
            </div>
            <div className="flex items-center mt-4 text-red-700 dark:text-red-200">
              <h1 className="text-xl font-semibold text-red-800 dark:text-white">
                <i className="fa-solid fa-money-check-dollar"></i> Ticket Price:{" "}
                {price}
              </h1>
            </div>
            <div className="flex items-center mt-4 text-red-700 dark:text-red-200">
              <h1 className="text-xl font-semibold text-red-800 dark:text-white">
                <i className="fa-brands fa-imdb"></i> IMDb Rating: {rating}{" "}
                <i className=" text-amber-500 fa-solid fa-star"></i>
              </h1>
            </div>

            <div className="flex justify-center items-center md:gap-12 gap-1 lg:gap-28 mt-10">
              <button className="btn border-none bg-red-500 ">View Details</button>
            <Link to='/update'>
              <button className="btn border-none bg-orange-500">Update Content</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brand;
