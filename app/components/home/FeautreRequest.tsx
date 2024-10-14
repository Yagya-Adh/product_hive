"use client";
import Image from "next/image";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import feautreRequestImage from "@/app/assets/images/feautreRequest/feauterRequestImage.webp";

const FeautreRequest = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-10 pt-40 pb-80">
      <FeautreBanner />
      <FeautreBodyGroup />
    </div>
  );
};

export default FeautreRequest;
const FeautreBanner = () => {
  return (
    <div className="grid grid-cols-1 rounded-2xl relative overflow-hidden">
      <Image src={feautreRequestImage} alt="feautre_" className="" />
      <div className="absolute bottom-10 left-10">
        <FeautreRequestCard />
      </div>
    </div>
  );
};
const FeautreRequestCard = () => {
  return (
    <>
      <div className="bg-productHives-mainBackground p-5 rounded-xl">
        <div className=" font-bold flex flex-col justify-center items-start">
          <h1 className="bg-productHives-feautrePill rounded-full px-2 py-1">
            Feautre Request
          </h1>
          <p className="text-white max-w-60 py-2">
            I would love to send my data directly to Slack
          </p>
        </div>
      </div>
    </>
  );
};

const dataFeautre = [
  {
    id: 1,
    question: "We connect our customers with the best?",
    describe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eos, cumque quibusdam quam praesentium possimus, at repudiandae modi labore quos perspiciatis illo harum laudantium architecto doloremque consequatur est accusantium quia.",
  },
  {
    id: 2,
    question: "We connect our customers with the best?",
    describe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eos, cumque quibusdam quam praesentium possimus, at repudiandae modi labore quos perspiciatis illo harum laudantium architecto doloremque consequatur est accusantium quia.",
  },
];

const FeautreBodyGroup = () => {
  const [isShowID, setIsShowID] = useState<number | null>(null);

  const handleShow = (id: number) => {
    return setIsShowID((prevID) => (prevID == id ? null : id));
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10">
        <div className="p-10 text-5xl font-bold  h-full">
          We connect our{" "}
          <span className="text-productHives-buttonColor">
            {" "}
            customers with the best
          </span>
          , and help them keep up-and stay open.
        </div>
        <div className="p-10 py-10">
          {dataFeautre?.map((feautre) => (
            <div
              className="border-b-2 border-b-gray-200 w-full"
              key={feautre.id}
            >
              <div
                className="flex justify-between items-center py-4 transition-all ease-in-out duration-500 transform"
                onClick={() => handleShow(feautre.id)}
              >
                <h1 className="font-bold">{feautre.question}</h1>{" "}
                {isShowID === feautre.id ? (
                  <div className="bg-productHives-buttonColor rounded-full transition-all ease-in-out duration-500 transform">
                    <ChevronUpIcon className="size-7" />
                  </div>
                ) : (
                  <div className="bg-productHives-buttonColor rounded-full transition-all ease-in-out duration-500 transform">
                    <ChevronDownIcon className="size-7" />
                  </div>
                )}
              </div>
              {isShowID === feautre.id && (
                <p className="py-4 transition-all ease-in-out duration-500 transform">
                  {feautre.describe}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
