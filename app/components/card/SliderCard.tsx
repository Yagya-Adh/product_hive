"use client";
import Image from "next/image";
import ArrowButton from "../button/ArrowButton";
import emilyImage from "@/app/assets/images/slider/emilyImage.png";
import doubleCot from "@/app/assets/images/slider/coat.svg";
const SliderCard = () => {
  const clickHandle = () => {
    return alert("click");
  };
  return (
    <div className="bg-white rounded-xl text-productHives-TextSecondary p-4">
      <div className="grid grid-cols-2 px-10">
        <p className="text-productHives-TextSecondary text-4xl max-w-screen-sm font-bold">
          &ldquo;We&apos;re delighted with it. This is utterly fantastic! I
          enjoy it more with each passing day because it makes my daily tasks so
          much simpler&ldquo;
        </p>
        <div className="flex flex-col justify-center items-end">
          <div className="bg-productHives-buttonColor rounded-full flex  items-start">
            <Image src={emilyImage} alt="slider_" className="" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 items-center px-10">
        <div className="flex items-center">
          <Image src={doubleCot} alt="DoubkeCot_" className="mx-2" />
          <h1 className="text-productHives-TextSecondary font-bold text-3xl flex flex-col items-center">
            Emily Johnson
            <span className="font-light text-2xl">Marketing Director</span>
          </h1>
        </div>
        <div className="flex flex-col items-end justify-center">
          <ArrowButton variant="double-arrow" clickHandle={clickHandle} />
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
