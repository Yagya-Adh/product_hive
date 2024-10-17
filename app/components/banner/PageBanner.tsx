"use client";

import Image from "next/image";
import personOne from "@/app/assets/images/home/hero.webp";
import personTwo from "@/app/assets/images/home/heroin.webp";
import CustomTextBanner from "./CustomTextBanner";

import familyImage from "@/app/assets/images/contact/main/happyFamily.webp";
import jumpImage from "@/app/assets/images/contact/main/jump.webp";
import groupImage from "@/app/assets/images/contact/main/groupPicture.webp";
import clockSVG from "@/app/assets/clock.svg";
import dropSVG from "@/app/assets/drop.svg";

interface IPageBanner {
  variant:
    | "home"
    | "service"
    | "about"
    | "contact"
    | "career"
    | "career-details"
    | "career-details-footer"
    | "terms-condition";
}

const PageBanner = ({ variant }: IPageBanner) =>
  variant === "terms-condition" ? (
    <div className="relative lg:text-center flex flex-col text-white justify-center items-center pt-10 px-10">
      <CustomTextBanner
        buttonGroup={false}
        highlightText="Terms & Conditions"
        description="Ut nihil porro quo galisum quisquam aut reiciendis praesentium id distinctio dolores? Et quasi dolorem et eius excepturi eum dolore fuga hic fugit maxime."
      />
    </div>
  ) : variant === "career-details-footer" ? (
    <div className="relative lg:text-center flex flex-col text-white justify-center items-center pt-10 px-10">
      <CustomTextBanner
        buttonGroup={true}
        buttonGroupText="See More Job!"
        buttonGroupTextTwo="Book A call"
        preText="Do not find a role you arel"
        highlightText="looking for?"
      />
    </div>
  ) : variant === "career-details" ? (
    <div className="relative lg:text-center flex flex-col text-white justify-center items-center px-10">
      <CustomTextBanner
        buttonGroup={false}
        preText="Senior Management Consultant"
        description="Senior Management Consultant: Provides expert advice to improve business performance, strategy, and efficiency for organizations."
      />

      <div className="flex items-center py-2">
        <h2 className="flex items-center px-4 mx-4">
          <Image src={clockSVG} alt="time_" className="size-10" />
          <span>Full time</span>
        </h2>
        <p className="flex items-center px-4 mx-4">
          <Image src={dropSVG} alt="time_" className="size-10" />
          <span>Remote (USA time zones)</span>
        </p>
      </div>
    </div>
  ) : variant === "career" ? (
    <div className="relative lg:text-center flex flex-col text-white justify-center items-center p-10 py-40">
      <CustomTextBanner
        buttonGroup={true}
        buttonGroupText="Let's Work Together"
        buttonGroupTextTwo="Book A call"
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
        buttonGroupText="Let's Work Together"
        buttonGroupTextTwo="Book A call"
        preText="The customer engagement platform for"
        highlightText="every small business"
        textColor="white"
        description="Boost Your Business with ProductHive - The Ultimate Customer Engagement Platform for Small Businesses."
      />
    </div>
  ) : variant === "service" ? (
    <div className="relative lg:text-center flex flex-col text-white justify-center items-center p-10 py-40">
      <CustomTextBanner
        buttonGroup={true}
        buttonGroupText="Let's Work Together"
        buttonGroupTextTwo="Book A call"
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
          alt="about_"
          width={150}
          height={100}
          className="rounded-2xl"
        />
      </div>
      <div className="hidden lg:flex absolute bottom-40 left-0  rounded-2xl">
        <Image
          src={groupImage}
          alt="about_"
          width={150}
          height={100}
          className="rounded-2xl"
        />
      </div>
      <div className="hidden lg:flex absolute top-64 right-0  rounded-2xl">
        <Image
          src={jumpImage}
          alt="about_"
          width={150}
          height={100}
          className="rounded-2xl"
        />
      </div>

      <CustomTextBanner
        buttonGroup={true}
        buttonGroupText="Let's Work Together"
        buttonGroupTextTwo="Book A call"
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
        buttonGroup={false}
        preText="We're "
        highlightText="here to help"
      />
    </div>
  ) : null;

export default PageBanner;
