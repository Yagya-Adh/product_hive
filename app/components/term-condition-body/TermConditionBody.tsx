"use client";
import {
  ArrowRightCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import data from "@/termsCondition.json";
const termsConditionData = data;
const dataObserve = [
  { id: 1, title: "Terms and Conditions" },
  { id: 2, title: "Platform Agreement" },
  { id: 3, title: "Legal Links" },
  { id: 4, title: "Overview" },
  { id: 5, title: "Next Steps" },
];

const TermConditionBody = () => {
  return (
    <div className="bg-productHives-ProductOwner text-productHives-mainBackground py-20">
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-2 relative gap-2">
          <div className="w-2/3 bg-white rounded-xl p-10 relative">
            <div className="sticky top-10 bg-productHives-lightYellow p-10 rounded-2xl">
              {dataObserve?.map((list) => (
                <ul className="flex flex-col " key={list.id}>
                  <li className="py-4 text-xl font-bold flex items-center justify-between hover:bg-white rounded-full px-4">
                    <span>{list.title}</span>

                    <ArrowRightCircleIcon className="text-productHives-buttonColor size-8" />
                  </li>
                </ul>
              ))}
            </div>
          </div>

          <div className="py-10">
            {termsConditionData?.map((list) => (
              <div
                key={list.id}
                className="border-b border-t border-productHives-lightYellow w-full"
              >
                <h1 className="text-4xl py-5 font-bold">{list.heading}</h1>

                {list.description?.map((listDescribe) => (
                  <div key={listDescribe.id}>
                    <p className="py-4 text-xl font-sans">
                      {listDescribe.describe}
                    </p>
                  </div>
                ))}

                {list.pointList?.map((listPoint) => (
                  <ul key={listPoint.id}>
                    <li className="flex items-center py-1">
                      <CheckCircleIcon className="text-productHives-buttonColor size-5" />{" "}
                      {listPoint.point}
                    </li>
                  </ul>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermConditionBody;
