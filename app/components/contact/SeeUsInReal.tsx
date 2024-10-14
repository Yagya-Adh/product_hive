"use client";
import Image from "next/image";
import CustomTextBanner from "../banner/CustomTextBanner";
import seeUsInRealImage from "@/app/assets/images/contact/seeUsInReal.webp";
import seeUsContactData from "@/seeUsContact.json";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

interface IseeUsData {
  id: number;
  location: string;
  address: string;
  email: string;
  contact: string;
}

const seeUsData: IseeUsData[] = seeUsContactData;

const SeeUsInReal = () => {
  const [showID, setShowID] = useState<number | null>(null);

  const handleShow = (id: number) => {
    setShowID((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="bg-productHives-lightYellow py-20">
      <div className="max-w-screen-2xl mx-auto px-10">
        <CustomTextBanner
          buttonGroup={false}
          preText="See us in real life"
          textColor="dark-green"
          discription="Visit our office to discuss your needs, explore our services in person, meet our expert team, and discover how we can help your business thrive."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col">
            {seeUsData?.map((listing) => (
              <div key={listing.id}>
                <div
                  className="flex justify-between border-b-2"
                  onClick={() => handleShow(listing.id)}
                >
                  <h1 className="text-3xl font-bold py-4  w-full cursor-pointer">
                    {listing.location}
                  </h1>
                  {showID === listing.id ? (
                    <ChevronUpIcon className="size-8 text-white bg-productHives-buttonColor rounded-full p-1" />
                  ) : (
                    <ChevronDownIcon className="size-8 text-white bg-productHives-buttonColor rounded-full p-1" />
                  )}
                </div>
                {showID === listing.id && (
                  <div>
                    <h2>{listing.address}</h2>
                    <h2>{listing.email}</h2>
                    <h2>{listing.contact}</h2>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div>
            <Image
              src={seeUsInRealImage}
              alt="see_us_"
              className="rounded-2xl scale-75"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeUsInReal;
