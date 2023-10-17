// eslint-disable-next-line no-unused-vars
import React from "react";
import BrandAllCard from "./BrandAllCard";

// eslint-disable-next-line react/prop-types
const BrandAll = ({ BrandCardData }) => {
  const BrandCard = BrandCardData;
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 py-10 lg:mx-36 md:mx-48 mx-5">
          {BrandCard?.map((items) => (
            <BrandAllCard key={items.id} items={items}></BrandAllCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandAll;
