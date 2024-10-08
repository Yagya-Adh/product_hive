"use client";

import Image from "next/image";
import ButtonPills from "@/app/components/button/ButtonPills";
import personOne from "@/app/assets/home/hero.webp";
import personTwo from "@/app/assets/home/heroin.webp";

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

        <div className="flex flex-col items-center md:text-center  justify-center">
          <h1 className="md:max-w-screen-96 s p-10 text-4xl lg:text-6xl md:text-center font-semibold max-w-screen-xl   capitalize">
            The customer engagement platform for <br />
            <span className="text-productHives-buttonColor">
              Every small business
            </span>
          </h1>

          <p>
            Boost Your Business with ProductHive - The Ultimate Customer
            Engagement Platform for Small Businesses.
          </p>
          <div className="p-10 flex justify-between items-center text-black">
            <ButtonPills text="Let's Work Together" />
            <ButtonPills
              text="Book A Call"
              variant="button-outline"
              padding="px-14"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
