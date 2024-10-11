"use client";
import Image from "next/image";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import MainBanner from "../components/banner/MainBanner";
import Footer from "../components/footer/Footer";
import serviceData from "@/gridCardGroup.json";
const gridCardGroup = serviceData;

const ServicePage = () => {
  return (
    <>
      <MainBanner variant="service" />
      <OurService />
      <Footer />
    </>
  );
};

export default ServicePage;

const OurService = () => {
  return (
    <>
      <div className="bg-productHives-ProductOwner">
        <div className="max-w-screen-2xl mx-auto px-20 py-40 text-productHives-TextSecondary">
          <PageTextHeading />
          <GridCardGroup />
        </div>
      </div>
    </>
  );
};

const PageTextHeading = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="font-bold text-xl ">Our Service</p>
      <h1 className="text-6xl max-w-screen-xl font-semibold capitalize text-center py-10 px-10 mx-auto">
        Product owner is a key to
        <span className="text-productHives-buttonColor capitalize">
          {"  "}
          maximizing the value{" "}
        </span>
        of your product
      </h1>
    </div>
  );
};

const GridCardGroup = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {gridCardGroup?.map((gridGroup) => (
        <div
          className={` bg-productHives-buttonColor py-20 px-10 text-white rounded-2xl flex flex-col justify-center items-center relative z-20 overflow-hidden`}
          key={gridGroup.id}
        >
          <div className="flex flex-col items-center justify-center z-20">
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
          <Image
            src="https://product-hive.webflow.io/service/optimize-your-business-strategy"
            alt="service_card_"
            width={400}
            height={400}
            className=""
          />
          <div className="bg-productHives-mainBackground rounded-full p-72  absolute -bottom-40 z-10"></div>
        </div>
      ))}
    </div>
  );
};

/* Read More */
