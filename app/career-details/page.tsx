"use client";

import React from "react";
import MainBanner from "../components/banner/MainBanner";
import Footer from "../components/footer/Footer";
import CarrerDetailPage from "../components/career-details/CarrerDetailPage";
import PageBanner from "../components/banner/PageBanner";

const CareerDetails = () => {
  return (
    <>
      <MainBanner variant="career-details" />
      <CarrerDetailPage />
      <DoNotFind />
    </>
  );
};

export default CareerDetails;

const DoNotFind = () => {
  return (
    <div className="bg-productHives-mainBackground  pt-10 pb-40 relative">
      <PageBanner variant="career-details-footer" />
    </div>
  );
};
