// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData } from "react-router-dom";
import Brand from "./Brand";

const BrandProduct = () => {
  const BrandSpecificData = useLoaderData();

  console.log(BrandSpecificData.length);
  if (BrandSpecificData?.length == 0) {
    console.log("hi");
    

    return <div>There Is No Content</div>;
  }

  return (
    <div>
      <h1>hi bro: {BrandSpecificData.length}</h1>
      {BrandSpecificData?.map((items) => (
        <Brand key={items._id} items={items}></Brand>
      ))}
    </div>
  );
};

export default BrandProduct;
