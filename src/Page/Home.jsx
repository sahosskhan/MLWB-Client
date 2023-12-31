// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { useLoaderData } from "react-router-dom";
import BrandAll from "../Components/BrandAll/BrandAll";
import DownloadPage from "../Components/DownloadPage";
import FAQ from "../Components/FAQ";

const Home = () => {
  

  const BrandData = useLoaderData();
  return (
    <div className="bg-white dark:bg-gray-900">
  
      <Header></Header>
      <div className="my-10">
        <h1 className="lg:text-5xl md:text-4xl text-2xl text-center text-black  dark:text-white font-bold leading-snug">
          Our
          <span className="text-red-700"> Entertainment & Media Category</span>
          <br />
          That We Provide For You
        </h1>
        <BrandAll BrandCardData={BrandData}></BrandAll>
      </div>

      <div className="my-10">
        <DownloadPage></DownloadPage>
      </div>

      <div className="my-20">
        <h1 className="lg:text-5xl md:text-4xl text-2xl text-center text-black dark:text-white font-bold leading-snug mb-16">
          <span className="text-red-700">Frequently asked questions</span>
          <br />
          What would you like to know?
        </h1>

        <FAQ></FAQ>
      </div>
    </div>
  );
};

export default Home;
