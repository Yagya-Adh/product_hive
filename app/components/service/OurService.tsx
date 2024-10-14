"use client";

import Image from "next/image";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import businessOneImage from "@/app/assets/images/service/busniessOne.webp";
import businessTwoImage from "@/app/assets/images/service/businessTwo.png";
import digitalImage from "@/app/assets/images/service/digital.webp";
import technologyImage from "@/app/assets/images/service/technology.webp";
import PageTextHeading from "../banner/PageTextHeading";
const gridCardGroup = [
  {
    id: 1,
    title: "Business Strategy",
    head: "Optimize Your Business Strategy",
    describe:
      "Leverage data-driven insights, agile methods, and customer-centric approaches for optimal business strategies.",
    imageUrl: businessOneImage,
    bgColor: "bg-[#102c24]",
  },
  {
    id: 2,
    title: "Business Strategy",
    head: "Navigate Markets Effectively",
    describe:
      "Analyze trends, adapt swiftly, and prioritize customer needs for effective market navigation.",
    imageUrl: businessTwoImage,
    bgColor: "bg-[#46e696]",
  },
  {
    id: 3,
    title: "Digital Transformation",
    head: "Boost Your Online Presence",
    describe:
      "Leverage SEO, engaging content, and social media for a robust online presence and increased visibility.",
    imageUrl: digitalImage,
    bgColor: "bg-[#efebe0]",
  },
  {
    id: 4,
    title: "Technology Integration",
    head: "Innovative Tech Solutions",
    describe:
      "Harness emerging technologies creatively to solve problems and drive efficiency in your business operations.",
    imageUrl: technologyImage,
    bgColor: "bg-[#46e696]",
  },
];
const OurService = () => {
  return (
    <>
      <div className="bg-productHives-ProductOwner">
        <div className="max-w-screen-2xl mx-auto px-20 py-40 text-productHives-TextSecondary">
          <PageTextHeading
            variant="our-service"
            title="Our Service"
            higlightText="Product owner is a key"
            postText="to maximizing the value of your product"
          />
          <GridCardGroup />
        </div>
      </div>
    </>
  );
};
export default OurService;

const GridCardGroup = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10">
      {gridCardGroup?.map((gridGroup) => (
        <div
          className={` ${gridGroup.bgColor}
            
           pt-14 px-10 text-white rounded-2xl flex flex-col justify-center items-center relative z-20 overflow-hidden`}
          key={gridGroup.id}
        >
          <div className="flex flex-col items-center justify-center z-40 ">
            <div className="flex flex-col">
              <h1 className="font-bold text-xl">{gridGroup.title}</h1>

              <h2 className="font-bold text-4xl py-4">{gridGroup.head}</h2>

              <p>{gridGroup.describe}</p>

              <button className="font-bold text-xl p-1 flex py-3">
                <span>Read More </span>{" "}
                <ArrowRightCircleIcon className="rounded-full translate-x-0 ease-in-out hover:translate-x-3 duration-500 size-8" />
              </button>
            </div>
          </div>
          <div className="flex items-center pt-20 relative flex-col">
            <Image
              src={gridGroup.imageUrl}
              alt="service_card_"
              width={400}
              height={400}
              className="scale-125 hover:scale-150 ease-in-out transition-all duration-500 "
            />
          </div>
          <div className="bg-productHives-mainBackground rounded-full rounded-b-none p-72 absolute -bottom-96 -z-10 "></div>
        </div>
      ))}
    </div>
  );
};
