// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Brand = ({items}) => {
    const {name, photo}= items || {};
    return (
        <div>
            <div>
      
      <div className="card w-96 bg-red-200 ">
        <figure className="h-44">
          <img className="w-[70%]" src={photo} alt="Shoes" />
        </figure>
        <h2 className="mt-4 py-5 bg-red-500 rounded-lg text-center font-semibold text-2xl text-white  ">
          {name}
        </h2>
      </div>
    </div>
        </div>
    );
};

export default Brand;