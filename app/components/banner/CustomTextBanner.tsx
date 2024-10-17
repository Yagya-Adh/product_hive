"use client";

import Image from "next/image";
import Link from "next/link";
import ButtonPills from "../button/ButtonPills";
import bannerLine from "@/app/assets/bannerLine.svg";

interface ICustomTextBanner {
  preText?: string;
  highlightText?: string;
  postText?: string;
  description?: string;
  buttonGroup?: boolean | undefined;
  textColor?: "light-yellow" | "dark-green" | "white";
  pathRedirect?: string;
  pathRedirectOne?: string;
  buttonGroupText?: string;
  buttonGroupTextTwo?: string;
}

const CustomTextBanner = ({
  preText,
  highlightText,
  postText,
  description,
  buttonGroup,
  textColor,
  pathRedirect,
  pathRedirectOne,
  buttonGroupText,
  buttonGroupTextTwo,
}: ICustomTextBanner) => (
  <>
    <div className="flex flex-col items-center md:text-center justify-center">
      <div
        className={`${
          textColor === "white"
            ? "text-white"
            : textColor === "dark-green"
            ? "text-productHives-mainBackground"
            : textColor === "light-yellow"
            ? "text-productHives-lightYellow"
            : "text-white"
        } 

      md:max-w-screen-96 s p-10 text-4xl lg:text-6xl md:text-center  font-semibold max-w-screen-xl capitalize`}
      >
        <span
          className={` ${
            textColor === "white"
              ? "text-white"
              : textColor === "dark-green"
              ? "text-productHives-mainBackground"
              : textColor === "light-yellow"
              ? "text-productHives-lightYellow"
              : "text-white"
          } `}
        >
          {preText ? preText : ""}{" "}
        </span>
        <br />
        <p className="text-productHives-buttonColor items-center justify-center flex flex-col ">
          {highlightText ? highlightText : ""}{" "}
          <Image
            src={bannerLine}
            alt="banner_line_"
            className="z-20 size-20 w-1/2 h-full"
          />
          <span className={`text-productHives-TextSecondary`}>
            {postText ? postText : ""}
          </span>
        </p>
      </div>
      <p className="max-w-screen-sm py-4">{description ? description : ""}</p>
      {buttonGroup && (
        <div className="p-10 flex justify-between items-center text-black">
          <Link href={pathRedirect ? pathRedirect : "/career"}>
            <ButtonPills
              text={buttonGroupText ? buttonGroupText : ""}
              padding="px-10"
            />
          </Link>{" "}
          <Link href={pathRedirectOne ? pathRedirectOne : "/contact"}>
            <ButtonPills
              padding="px-10"
              text="Browser All Services"
              variant="button-outline"
              text={buttonGroupTextTwo ? buttonGroupTextTwo : ""}
            />
          </Link>
        </div>
      )}
    </div>
  </>
);

export default CustomTextBanner;
