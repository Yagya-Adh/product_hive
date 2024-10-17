"use client";

import React from "react";
import Footer from "../components/footer/Footer";
import MainBanner from "../components/banner/MainBanner";
import TermConditionBody from "../components/term-condition-body/TermConditionBody";

const TermsCondition = () => {
  return (
    <>
      <MainBanner variant="terms-condition" />
      {/* <CarrerDetailPage /> */}
      {/* <DoNotFind /> */}
      <TermConditionBody />
      <Footer />
    </>
  );
};

export default TermsCondition;
