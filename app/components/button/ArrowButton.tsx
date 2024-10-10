"use client";

import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";

interface IArrowButton {
  variant: string;
  clickHandle: () => void;
}

const ArrowButton = ({ variant, clickHandle }: IArrowButton) => {
  if (variant == "double-arrow") {
    return (
      <div className="flex items-center p-5">
        <button onClick={clickHandle} className="mx-1">
          <ArrowLongLeftIcon className="p-1 size-10  border border-productHives-mainBackground hover:text-white hover:bg-productHives-mainBackground  rounded-full" />
        </button>
        <button className="mx-1" onClick={clickHandle}>
          <ArrowLongRightIcon className="p-1 size-10 border border-productHives-mainBackground hover:text-white hover:bg-productHives-mainBackground  rounded-full" />
        </button>
      </div>
    );
  }
};

export default ArrowButton;
