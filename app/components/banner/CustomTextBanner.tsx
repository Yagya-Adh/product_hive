"use client";

import Link from "next/link";
import ButtonPills from "../button/ButtonPills";
interface ICustomTextBanner {
  preText?: string;
  highlightText?: string;
  postText?: string;
  description?: string;
  buttonGroup?: boolean | undefined;
  textColor?: "light-yellow" | "dark-green" | "white";
}

const CustomTextBanner = ({
  preText,
  highlightText,
  postText,
  description,
  buttonGroup,
  textColor,
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
        <span className={`"text-productHives-TextSecondary"`}>
          {preText ? preText : ""}{" "}
        </span>
        <br />
        <p className="text-productHives-buttonColor ">
          {highlightText ? highlightText : ""}{" "}
          <span className={`"text-productHives-TextSecondary"`}>
            {postText ? postText : ""}
          </span>
        </p>
      </div>
      <p className="max-w-screen-sm">{description ? description : ""}</p>
      {buttonGroup && (
        <div className="p-10 flex justify-between items-center text-black">
          <Link href={"/career"}>
            <ButtonPills text="Let's Work Together" />
          </Link>{" "}
          <Link href="/contact">
            <ButtonPills
              text="Book A Call"
              variant="button-outline"
              padding="px-10"
            />
          </Link>
        </div>
      )}
    </div>
  </>
);

export default CustomTextBanner;
