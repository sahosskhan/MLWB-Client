// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateContent = () => {
  const items = useLoaderData();
  const { _id, name, description, rating, photo, price, brand, type } =
    items || {};

  const HandelUpdateContent = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const description = from.description.value;
    const brand = from.brand.value;
    const type = from.type.value;
    const price = from.price.value;
    const rating = from.rating.value;
    const photo = from.photo.value;

    const addContent =
      { _id, name, description, brand, type, price, rating, photo } || {};
    console.log(addContent);

    from.name.value = "";
    from.description.value = "";
    from.brand.value = "";
    from.type.value = "";
    from.price.value = "";
    from.rating.value = "";
    from.photo.value = "";

    fetch(
      `https://brand-shop-a10-server-dvnu72qyk-sahosskhan359-gmailcom.vercel.app/contents/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addContent),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Update Content Sucessfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };

  return (
    <div>
      <div>
        <div className="mt-8 container mx-auto">
          <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-opacity-20 bg-white backdrop-blur-3xl border-none filter drop-shadow-md rounded-2xl p-2 lg:max-w-5xl shadow-gray-300/50 ">
            <h1 className="text-4xl font-bold text-center  text-red-700">
              Update Your Favorite Content To Enjoy More
            </h1>

            <form onSubmit={HandelUpdateContent} className="mt-6">
              <div className="flex gap-5">
                <div className="from-control  flex-1 ">
                  <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                    Content Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="from-control  flex-1">
                  <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                    Short Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    defaultValue={description}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div className="from-control flex-1 mt-5">
                  <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                    Content Brand
                  </label>
                  <input
                    type="text"
                    name="brand"
                    defaultValue={brand}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="from-control  flex-1 mt-5">
                  <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                    Content Type
                  </label>
                  <input
                    type="text"
                    name="type"
                    defaultValue={type}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div className="flex gap-5">
                <div className="from-control  flex-1 mt-5">
                  <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                    Ticket Price
                  </label>
                  <input
                    type="text"
                    name="price"
                    defaultValue={price}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-5 flex-1">
                  <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                    IMDb Rating
                  </label>
                  <input
                    type="text"
                    name="rating"
                    defaultValue={rating}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div className="from-control flex-1 mt-5">
                <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                  Content Image URL
                </label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <input
                className="btn btn-block mt-5 border-none bg-red-500 text-white hover:bg-rose-500"
                type="submit"
                value="Update Content"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateContent;
