"use client";

import React from "react";
import CustomTextBanner from "../banner/CustomTextBanner";

const OportunityToJoin = () => {
  return (
    <>
      <div className="mx-auto px-10 max-w-screen-2xl">
        <div className="flex flex-col">
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
            consequuntur pariatur provident totam accusamus officia hic,
            excepturi assumenda harum explicabo libero ex facere nam enim quas
            nostrum reiciendis saepe recusandae!
          </div>
        </div>
      </div>
      <div className="bg-productHives-mainBackground">
        <CustomTextBanner
          preText="Do not find a role you are"
          highlightText="looking for?"
        />
      </div>
    </>
  );
};

export default OportunityToJoin;
