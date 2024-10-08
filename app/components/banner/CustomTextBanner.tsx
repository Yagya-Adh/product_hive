"use client";

import ButtonPills from "../button/ButtonPills";
interface ICustomTextBanner {
  preText?: string;
  highlightText: string;
  postText?: string;
  discription?: string;
}

const CustomTextBanner = ({
  preText,
  highlightText,
  postText,
  discription,
}: ICustomTextBanner) => {
  return (
    <>
      <div className="flex flex-col items-center md:text-center  justify-center">
        <div className="text-white md:max-w-screen-96 s p-10 text-4xl lg:text-6xl md:text-center font-semibold max-w-screen-xl   capitalize">
          {preText ? preText : ""} <br />
          <p className="text-productHives-buttonColor ">
            {highlightText ? highlightText : ""} <span className=""></span>
            {postText ? postText : ""}
          </p>
        </div>
        <p>{discription ? discription : ""}</p>
        <div className="p-10 flex justify-between items-center text-black">
          <ButtonPills text="Let's Work Together" />
          <ButtonPills
            text="Book A Call"
            variant="button-outline"
            padding="px-14"
          />
        </div>
      </div>
    </>
  );
};

export default CustomTextBanner;
