// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData } from "react-router-dom";
import Brand from "./Brand";
import ThereNo from "../../Components/ThereNo";
import Slider from "../../Components/Slider";

const BrandProduct = () => {
  const BrandSpecificData = useLoaderData();

  console.log(BrandSpecificData.length);
  if (BrandSpecificData?.length == 0) {
    console.log("hi");

    return (
      <div>
        {" "}
        <ThereNo></ThereNo>{" "}
      </div>
    );
  }

  return (
    <div>
      <div className=" ">
        <Slider></Slider>
      </div>

      <h1 className="lg:text-7xl md:text-6xl text-4xl font-black text-red-600 mt-20 text-center">
        All Available Content
      </h1>
      <div className="grid lg:grid-cols-3  grid-cols-1 lg:mx-0 md:mx-48 mx-14  lg:gap-x-10 gap-y-16 my-20">
        {BrandSpecificData?.map((items) => (
          <Brand key={items._id} items={items}></Brand>
        ))}
      </div>
    </div>
  );
};

export default BrandProduct;
