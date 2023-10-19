// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const items = useLoaderData();
  const { name, description, rating, photo, brand } = items || {};
  return (
    <div>
      <div className="max-w-sm mx-auto my-10 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img className="h-[500px] w-full mx-auto" src={photo} alt="Article" />

        <div className="p-6">
          <div>
            <span className="text-xs font-medium text-red-600 uppercase dark:text-red-400">
              {brand}
            </span>
            <a
              href="#"
              className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
              tabIndex="0"
              role="link"
            >
              {name}
            </a>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>

            <h1 className="text-base mt-4 font-semibold text-red-800 dark:text-white">
              <i className="fa-brands fa-imdb"></i> IMDb Rating: {rating}
              <i className=" text-amber-500 fa-solid fa-star"></i>
            </h1>
          </div>

          <div className="mt-4 ">
            <button className="btn btn-block bg-red-500">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
