// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const ProductAdd = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const Product = ["Movie", "Web Series", "Music", "Drama", "Cartoon Show"];
  const AddOption = (event) => {
    setSelectedOption(event.target.value);
  };

  const Brand = [
    "Netfilx",
    "Disney",
    "Warner Bros",
    "Sony Pictures",
    "Softify",
    "Time Warners",
  ];
  const AddBrand = (event) => {
    setSelectedBrand(event.target.value);
  };
  return (
    <div>
      <div className="mt-8 container mx-auto">
        <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-red-100 rounded-xl shadow-2xl  lg:max-w-5xl shadow-gray-300/50 ">
          <h1 className="text-4xl font-bold text-center  text-red-700">
            Add Your Favorite Content To Enjoy More
          </h1>

          <form className="mt-6">
            <div className="flex-1">
              <label className="block mb-2 text-xl font-bold text-black dark:text-gray-200">
                Content Image URL
              </label>
              <input
                type="text"
                placeholder="Enter Content Image URL"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="flex-1 mt-5">
              <label className="block mb-2 text-xl font-bold text-black dark:text-gray-200">
                Content Name
              </label>
              <input
                type="text"
                placeholder="Enter Content Name"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="flex-1 mt-5">
              <label className="block mb-2 text-xl font-bold text-black dark:text-gray-200">
                Choose The Brand
              </label>
              <input
                type="text"
                value={selectedBrand}
                onChange={AddBrand}
                list="Brand"
                placeholder="Select Brand"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <datalist id="Brand">
                {Brand.map((ser, i) => (
                  <option key={i} value={ser} />
                ))}
              </datalist>
            </div>

            <div className="flex-1 mt-5">
              <label className="block mb-2 text-xl font-bold text-black dark:text-gray-200">
                Choose The Content Type
              </label>
              <input
                type="text"
                value={selectedOption}
                onChange={AddOption}
                list="Product"
                placeholder="Select Content Type"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <datalist id="Product">
                {Product.map((ser, i) => (
                  <option key={i} value={ser} />
                ))}
              </datalist>
            </div>

            <div className="flex-1 mt-5">
              <label className="block mb-2 text-xl font-bold text-black dark:text-gray-200">
                Ticket Price
              </label>
              <input
                type="text"
                placeholder="Enter Ticket Price"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="flex-1 mt-5">
              <label className="block mb-2 text-xl font-bold text-black dark:text-gray-200">
                Short Description
              </label>
              <input
                type="text"
                placeholder="Enter Short Description Of Content"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-5 flex-1">
              <label className="block mb-2 text-xl font-bold text-black dark:text-gray-200">
                IMDb Rating
              </label>
              <input
                type="text"
                placeholder="Enter IMDb Rating"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="flex lg:flex-row-reverse flex-col-reverse justify-center lg:gap-10">
              <button className=" px-6 py-3 mt-6 text-lg font-bold hover:bg-black text-white btn bg-red-600">
                Add Content
                <i className="-mt-[10px] fa-regular fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductAdd;
