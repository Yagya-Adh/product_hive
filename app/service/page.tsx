"use client";
import MainBanner from "../components/banner/MainBanner";
import Footer from "../components/footer/Footer";
import FeautreRequest from "../components/home/FeautreRequest";
import Revenue from "../components/home/Revenue";
import OurProcess from "../components/service/OurProcess";
import OurService from "../components/service/OurService";

const ServicePage = () => {
  return (
    <>
      <MainBanner variant="service" />
      <OurService />
      <OurProcess />
      {/* <OurVlue/> */}
      <FeautreRequest />
      <Revenue />
      <Footer />
    </>
  );
};

export default ServicePage;

/* Read More */
