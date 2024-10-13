"use client";
// import Image from "next/image";
import CustomTextBanner from "../banner/CustomTextBanner";
import SliderCard from "../card/SliderCard";

const Revenue = () => {
  return (
    <div className="bg-productHives-mainBackground relative">
      <div className="max-w-screen-2xl mx-auto px-10 py-40 relative">
        <div className="absolute -top-72">
          <SliderCard />
        </div>
        <CustomTextBanner
          preText="Revenue enablement that"
          highlightText="customers love"
        />
      </div>
    </div>
  );
};

export default Revenue;
