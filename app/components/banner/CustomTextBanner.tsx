"use client";

import Image from "next/image";
import Link from "next/link";
import ButtonPills from "../button/ButtonPills";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

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
  hasSubscription?: boolean;
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
  hasSubscription,
}: ICustomTextBanner) => (
  <>
    <section className="flex flex-col items-center md:text-center justify-center">
      <article
        className={`${
          textColor === "white"
            ? "text-white"
            : textColor === "dark-green"
            ? "text-productHives-mainBackground"
            : textColor === "light-yellow"
            ? "text-productHives-lightYellow"
            : "text-white"
        } 

      md:max-w-screen-96
      p-10 
      text-4xl 
      lg:text-6xl 
      md:text-center  
      font-semibold 
      max-w-screen-xl 
      capitalize
      `}
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
            src="/assets/bannerLine.svg"
            alt="banner_line_"
            className="z-20 size-20 w-1/2 h-full"
            width={500}
            height={500}
          />
          <span className={`text-productHives-TextSecondary`}>
            {postText ? postText : ""}
          </span>
        </p>
      </article>
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
              variant="button-outline"
              text={buttonGroupTextTwo ? buttonGroupTextTwo : ""}
            />
          </Link>
        </div>
      )}

      {hasSubscription && (
        <>
          <form
            className="
            overflow-hidden
            relative
             text-productHives-mainBackground
            bg-white
            flex 
            items-center 
            rounded-full 
            my-5 
            py-1 
            px-1"
          >
            <div className="absolute left-2">
              <EnvelopeIcon
                className="
              size-8 
              text-productHives-mainBackground"
              />
            </div>
            <input
              type="text"
              placeholder="Enter your e-mail"
              className="
              py-3
              px-10
              text-xl
              outline-none
              "
            />
            <ButtonPills
              text="Subscribe Now"
              variant="button-default"
              padding="px-1 text-xl"
            />
          </form>
        </>
      )}
    </section>
  </>
);

export default CustomTextBanner;
