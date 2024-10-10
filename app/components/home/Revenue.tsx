"use client";
import CustomTextBanner from "../banner/CustomTextBanner";
import SliderCard from "../card/SliderCard";

const Revenue = () => {
  return (
    <div className="bg-productHives-mainBackground p-10">
      <div className="max-w-screen-2xl mx-auto px-10">
        <CustomTextBanner
          preText="Revenue enablement that"
          highlightText="customers love"
        />
        <div>
          <SliderCard />
        </div>
      </div>
    </div>
  );
};

export default Revenue;
