// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const BrandAllCard = ({ items }) => {
  // console.log(items);
  const { brandName, brandImage } = items || {};
  return (
    <Link to={`/BrandProduct/${brandName}`}>
      <div>
        <div className="card w-96 bg-red-200 ">
          <figure className="h-44">
            <img className="w-[70%]" src={brandImage} alt="Shoes" />
          </figure>
          <h2 className="mt-4 py-5 bg-red-500 rounded-lg text-center font-semibold text-2xl text-white  ">
            {brandName}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default BrandAllCard;
