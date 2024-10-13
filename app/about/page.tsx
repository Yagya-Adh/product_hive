"use client";

import React from "react";
import MainBanner from "../components/banner/MainBanner";
import OurStory from "../components/about/OurStory";
import OurCoreValue from "../components/about/OurCoreValue";

const AboutPage = () => {
  return (
    <>
      <MainBanner variant="about" />
      <OurStory />
      <OurCoreValue />
    </>
  );
};

export default AboutPage;
