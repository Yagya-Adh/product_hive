"use client";
import MainBanner from "../components/banner/MainBanner";
import Footer from "../components/footer/Footer";
import OurProcess from "../components/service/OurProcess";
import OurService from "../components/service/OurService";

const ServicePage = () => {
  return (
    <>
      <MainBanner variant="service" />
      <OurService />
      <OurProcess />
      <Footer />
    </>
  );
};

export default ServicePage;

/* Read More */
