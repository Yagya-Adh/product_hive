"use client";

import React from "react";
import MainBanner from "../components/banner/MainBanner";
import Footer from "../components/footer/Footer";
import CarrerDetailPage from "../components/career-details/CarrerDetailPage";

const CareerDetails = () => {
  return (
    <>
      <MainBanner variant="career-details" />
      <CarrerDetailPage />
      <Footer />
    </>
  );
};

export default CareerDetails;
