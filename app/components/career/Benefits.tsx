"use client";

import CustomTextBanner from "../banner/CustomTextBanner";
import BannerCard from "../card/BannerCard";

const Benefits = () => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-2xl mx-auto px-10">
        <CustomTextBanner
          preText="Benefits working at "
          postText="ProductHive"
        />
        <BannerCard variant="defautl-our-career" />
      </div>
    </div>
  );
};

export default Benefits;
