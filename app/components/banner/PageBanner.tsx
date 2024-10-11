"use client";

import Image from "next/image";
import personOne from "@/app/assets/images/home/hero.webp";
import personTwo from "@/app/assets/images/home/heroin.webp";
import CustomTextBanner from "./CustomTextBanner";
interface IPageBanner {
  variant: string | "home" | "service" | "about";
}
const PageBanner = ({ variant }: IPageBanner) => {
  if (variant == "home") {
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
  }

  if (variant == "service") {
    return (
      <>
        <div className="relative lg:text-center flex flex-col text-white justify-center items-center p-10 py-40">
          <CustomTextBanner
            preText="Our versatile business solutions"
            highlightText="& expert services"
            discription="Discover our services, from enhancing your digital footprint to developing growth strategies, integrating tech solutions, and offering expert advice for your business&lsquo;s success."
          />
        </div>
      </>
    );
  }

  if (variant == "about") {
    return (
      <>
        <div className="relative lg:text-center flex flex-col text-white justify-center items-center p-10 py-40">
          {/*  <div className="hidden lg:flex absolute top-10 left-20 overflow-hidden rounded-full">
            <Image src={personOne} alt="home_" className="size-48" />
          </div>
          <div className="hidden lg:flex absolute bottom-10 right-20 overflow-hidden rounded-full">
            <Image src={personTwo} alt="home_" className="size-48" />
          </div> */}
          <CustomTextBanner
            preText="Unveiling the Journey of"
            highlightText="about us"
            discription="We believe that entrepreneurs are society's problem solvers. They see opportunities in complexities and drive us towards progress"
          />
        </div>
      </>
    );
  }
};

export default PageBanner;
