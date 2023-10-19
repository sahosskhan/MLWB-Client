// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";
import Swal from "sweetalert2";

const ViewDetails = () => {
  const items = useLoaderData();
  const { name, description, rating, photo, brand } = items || {};
  const { user } = useContext(AuthContext);
  const addCartHandle = (e) => {
    e.preventDefault();
    const form = e.target;
    const UserName = form.UserName.value;
    const email = user?.email;
    const items = { UserName, email, brand, name, rating, photo };
    console.log(items);

    fetch(
      "https://brand-shop-a10-server-8uj11cpgh-sahosskhan359-gmailcom.vercel.app/addCarts",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(items),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "SuccessFull",
            text: "Product added successfully",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div>
      <div className="max-w-lg mx-auto my-10 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
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

          <div>
            <form onSubmit={addCartHandle}>
              <div className="relative flex items-center mt-8">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  name="UserName"
                  defaultValue={user?.displayName}
                  className="block w-full py-3 text-black bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="relative flex items-center mt-6">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="mt-4 ">
                <input
                  className="btn btn-block border-none bg-red-500"
                  type="submit"
                  value="Add To Cart"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
