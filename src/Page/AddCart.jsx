// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const AddCart = ({items, handleDelete}) => {

  // eslint-disable-next-line react/prop-types
  const {_id, name, brand, photo, rating, } = items ; 
  console.log(items);
    return (
        <div>
             <div className="flex rounded-xl flex-col items-center justify-center w-full max-w-sm mx-auto">
          <div
            className="w-full h-[500px]  bg-gray-300 bg-center bg-cover rounded-xl shadow-md"
            style={{
              backgroundImage:
                `url(${photo})`,
            }}
          >
            <h3 className="font-bold px-6 py-3 bg-opacity-5 bg-white backdrop-blur-3xl border-none filter drop-shadow-md  w-auto uppercase text-white">
              {name}
            </h3>
          </div>

          <div className="w-56 -mt-10 overflow-hidden bg-opacity-5 bg-white backdrop-blur-3xl border-none filter drop-shadow-md   p-6 rounded-lg   shadow-lg md:w-64 ">
            <div className="flex justify-between mb-3 items-center gap-5">
              <span className="text-base font-semibold dark:text-white">
               {brand}
              </span>
              <span className="text-base font-semibold dark:text-white">
                {rating} <i className=" text-amber-500 fa-solid fa-star"></i>
              </span>
            </div>

            <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-block border-none bg-red-400 hover:bg-red-300">
              Remove
            </button>
          </div>
        </div> 
        </div>
    );
};

export default AddCart;