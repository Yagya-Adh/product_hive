"use client";

import Image from "next/image";
import personOne from "@/app/assets/images/home/hero.webp";
import personTwo from "@/app/assets/images/home/heroin.webp";
import CustomTextBanner from "./CustomTextBanner";

const PageBanner = () => {
  return (
    <>
      <div className="relative lg:text-center flex flex-col text-white justify-center items-center p-10 py-40">
        <div className="hidden lg:flex absolute top-10 left-20 overflow-hidden rounded-full">
          <Image src={personOne} alt="home_" className="size-48" />
        </div>
        <div className="hidden lg:flex absolute bottom-10 right-20 overflow-hidden rounded-full">
          <Image src={personTwo} alt="home_" className="size-48" />
        </div>
        <CustomTextBanner
          preText="The customer engagement platform for"
          highlightText="every small business"
        />
      </div>
    </>
  );
};

export default PageBanner;
