"use client";

import PageTextHeading from "../banner/PageTextHeading";
import ButtonPills from "../button/ButtonPills";

const OurProcess = () => {
  return (
    <div className=" bg-productHives-mainBackground p-10">
      <div className="max-w-screen-2xl mx-auto px-10">
        <PageTextHeading
          variant="our-process"
          higlightText="achieving success"
          preText="Our process guides you step by step towards"
          title="Our Process"
        />
      </div>
      <div>
        <ButtonPills text="Let's Work Together" />
      </div>
    </div>
  );
};

export default OurProcess;
