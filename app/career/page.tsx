"use client";

import MainBanner from "../components/banner/MainBanner";
import Benefits from "../components/career/Benefits";
import JoinUs from "../components/career/JoinUs";
import OportunityToJoin from "../components/about/OportunityToJoin";
import SliderBar from "../components/about/SliderBar";

const Career = () => {
  return (
    <>
      <MainBanner variant="career" />
      <JoinUs />
      <Benefits />
      <SliderBar />
      <OportunityToJoin />
    </>
  );
};

export default Career;
