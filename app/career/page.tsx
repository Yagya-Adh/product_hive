"use client";

import MainBanner from "../components/banner/MainBanner";
import Benefits from "../components/career/Benefits";
import JoinUs from "../components/career/JoinUs";
import OportunityToJoin from "../components/about/OportunityToJoin";
import SliderBar from "../components/about/SliderBar";
import Footer from "../components/footer/Footer";

const Career = () => {
  return (
    <>
      <MainBanner variant="career" />
      <JoinUs />
      <Benefits />
      <SliderBar />
      <OportunityToJoin />
      <Footer />
    </>
  );
};

export default Career;
