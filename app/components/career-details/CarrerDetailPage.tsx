"use client";
import React from "react";
import careerDetailsData from "@/careerDetailsData.json";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
const data = careerDetailsData;
import ApplyForThisRole from "./ApplyForThisRole";

const CarrerDetailPage = () => {
  return (
    <div className="bg-productHives-colorGrey">
      <div className="mx-auto max-w-screen-2xl px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-40  ">
          <NoticeSide />
          <ApplyForThisRole />
        </div>
      </div>
    </div>
  );
};

export default CarrerDetailPage;

const NoticeSide = () => {
  return (
    <div className="text-productHives-mainBackground">
      {data?.map((list) => (
        <div key={list.id}>
          <h1 className="text-5xl font-bold py-4">{list.title}</h1>
          {list.description?.map((pointList) => (
            <p className="py-4 text-xl font-sans" key={pointList.id}>
              {pointList.describle}
            </p>
          ))}
          <ul>
            {list.point?.map((pointList) => (
              <li key={pointList.id} className="flex items-center font-sans">
                {" "}
                <CheckCircleIcon className="size-8 pe-1 text-productHives-buttonColor" />{" "}
                <span>{pointList.slug}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
