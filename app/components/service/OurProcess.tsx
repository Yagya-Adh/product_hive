"use client";
import Image from "next/image";
import PageTextHeading from "../banner/PageTextHeading";
import ButtonPills from "../button/ButtonPills";
import BannerCard from "../card/BannerCard";

const OurProcess = () => {
  return (
    <div className=" bg-productHives-mainBackground py-20 relative z-20">
      <div className="absolute top-10 -right-10 z-10">
        <Image
          height={150}
          width={150}
          className=""
          alt="cardWaterMark_"
          src="https://cdn.prod.website-files.com/661e1bd626e15bec7b70a970/66274186b9549798ade45dcc_bg-element.svg"
        />
      </div>
      <div className="max-w-screen-2xl mx-auto px-10 relative z-20">
        <PageTextHeading
          variant="our-process"
          higlightText="achieving success"
          preText="Our process guides you step by step towards"
          title="Our Process"
        />
      </div>
      <div className="flex items-center justify-center">
        <ButtonPills text="Let's Work Together" />
        <ButtonPills
          text="Book A Call"
          padding="px-8"
          variant="button-outline"
        />
      </div>

      <BannerCard variant="defautl-service-process" />
    </div>
  );
};

export default OurProcess;
