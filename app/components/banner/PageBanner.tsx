"use client";

import Image from "next/image";
import personOne from "@/app/assets/images/home/hero.webp";
import personTwo from "@/app/assets/images/home/heroin.webp";
import CustomTextBanner from "./CustomTextBanner";

import familyImage from "@/app/assets/images/contact/main/happyFamily.webp";
import jumpImage from "@/app/assets/images/contact/main/jump.webp";
import groupImage from "@/app/assets/images/contact/main/groupPicture.webp";

interface IPageBanner {
  variant: "home" | "service" | "about" | "contact" | "career";
}

const PageBanner = ({ variant }: IPageBanner) =>
  variant === "career" ? (
    <div className="relative lg:text-center flex flex-col text-white justify-center items-center p-10 py-40">
      <CustomTextBanner
        buttonGroup={true}
        preText="Build the future of"
        highlightText="venture capital"
        description="Join our team to advance your career, collaborate on innovative projects, develop cutting-edge solutions, and help businesses achieve their goals."
      />
    </div>
  ) : variant === "home" ? (
    <div className="relative lg:text-center flex flex-col text-white justify-center items-center p-10 py-40">
      <div className="hidden lg:flex absolute top-10 left-20 overflow-hidden rounded-full">
        <Image src={personOne} alt="home_" className="size-48" />
      </div>
      <div className="hidden lg:flex absolute bottom-10 right-20 overflow-hidden rounded-full">
        <Image src={personTwo} alt="home_" className="size-48" />
      </div>
      <CustomTextBanner
        buttonGroup={true}
        preText="The customer engagement platform for"
        highlightText="every small business"
      />
    </div>
  ) : variant === "service" ? (
    <div className="relative lg:text-center flex flex-col text-white justify-center items-center p-10 py-40">
      <CustomTextBanner
        buttonGroup={true}
        preText="Our versatile business solutions"
        highlightText="& expert services"
        description="Discover our services, from enhancing your digital footprint to developing growth strategies, integrating tech solutions, and offering expert advice for your business&lsquo;s success."
      />
    </div>
  ) : variant === "about" ? (
    <div className="relative lg:text-center flex flex-col text-white justify-center items-center p-10 py-40">
      <div className="hidden lg:flex absolute top-20 left-0  rounded-2xl">
        <Image
          src={familyImage}
          alt="home_"
          width={150}
          height={100}
          className="  bg-rose-700 rounded-2xl"
        />
      </div>
      <div className="hidden lg:flex absolute top-96 left-20  rounded-2xl">
        <Image
          src={groupImage}
          alt="home_"
          width={150}
          height={100}
          className="  bg-rose-700 rounded-2xl"
        />
      </div>
      <div className="hidden lg:flex absolute top-52 right-0  rounded-2xl">
        <Image
          src={jumpImage}
          alt="home_"
          width={150}
          height={100}
          className="  bg-rose-700 rounded-2xl"
        />
      </div>

      <CustomTextBanner
        buttonGroup={true}
        preText="Unveiling the Journey of"
        highlightText="about us"
        description="We believe that entrepreneurs are society's problem solvers. They see opportunities in complexities and drive us towards progress"
      />
    </div>
  ) : variant === "contact" ? (
    <div className="relative lg:text-center flex flex-col text-white justify-center items-center p-10 py-40">
      <div className="font-bold">
        <h5>Contact Us</h5>
      </div>
      <CustomTextBanner
        buttonGroup={true}
        preText="We're "
        highlightText="here to help"
      />
    </div>
  ) : null;

export default PageBanner;
