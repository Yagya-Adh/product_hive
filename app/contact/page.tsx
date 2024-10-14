"use client";
import MainBanner from "../components/banner/MainBanner";
import OurContact from "../components/contact/OurContact";
import SeeUsInReal from "../components/contact/SeeUsInReal";
import FeautreRequest from "../components/home/FeautreRequest";
import Revenue from "../components/home/Revenue";
import Footer from "../components/footer/Footer";

const ContactPage = () => {
  return (
    <>
      <MainBanner variant="contact" />
      <OurContact />
      <SeeUsInReal />
      <FeautreRequest />
      <Revenue topCardShow="hide" />
      <Footer />
    </>
  );
};

export default ContactPage;
