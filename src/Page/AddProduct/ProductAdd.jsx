// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Swal from "sweetalert2";

const ProductAdd = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const Product = [
    "Movie",
    "Web Series",
    "Music",
    "Drama",
    "Cartoon Show",
    "Others",
  ];
  const AddOption = (event) => {
    setSelectedOption(event.target.value);
  };

  const Brand = [
    "Netfilx",
    "Disney",
    "Warner Bros",
    "Sony Pictures",
    "Spotify",
    "Time Warners",
  ];
  const AddBrand = (event) => {
    setSelectedBrand(event.target.value);
  };

  const HandelAddContent = (event) => {
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
      { name, description, brand, type, price, rating, photo } || {};
    console.log(addContent);

    from.name.value = "";
    from.description.value = "";

    from.price.value = "";
    from.rating.value = "";
    from.photo.value = "";

    setSelectedOption("");
    setSelectedBrand("");
    
    fetch("http://localhost:5000/Content", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addContent),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Add Content Sucessfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };

  return (
    <div>
      <div className="mt-8 container mx-auto">
        <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-red-100 rounded-xl shadow-2xl  lg:max-w-5xl shadow-gray-300/50 ">
          <h1 className="text-4xl font-bold text-center  text-red-700">
            Add Your Favorite Content To Enjoy More
          </h1>

          <form onSubmit={HandelAddContent} className="mt-6">
            <div className="flex gap-5">
              <div className="from-control  flex-1 ">
                <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                  Content Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Content Name"
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
                  placeholder="Enter Short Description "
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
                  value={selectedBrand}
                  onChange={AddBrand}
                  list="Brand"
                  name="brand"
                  placeholder="Select Brand"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <datalist id="Brand">
                  {Brand.map((ser, i) => (
                    <option key={i} value={ser} />
                  ))}
                </datalist>
              </div>

              <div className="from-control  flex-1 mt-5">
                <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                  Content Type
                </label>
                <input
                  type="text"
                  value={selectedOption}
                  onChange={AddOption}
                  list="Product"
                  name="type"
                  placeholder="Select Type"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <datalist id="Product">
                  {Product.map((ser, i) => (
                    <option key={i} value={ser} />
                  ))}
                </datalist>
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
                  placeholder="Enter Ticket Price"
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
                  placeholder="Enter IMDb Rating"
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
                placeholder="Enter Content Image URL"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <input
              className="btn btn-block mt-5 bg-red-500 text-white hover:bg-rose-500"
              type="submit"
              value="Add Content"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductAdd;
