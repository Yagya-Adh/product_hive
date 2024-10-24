import MainBanner from "../components/banner/MainBanner";
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
      {/* <OurValue/> */}
      <FeautreRequest />
      <Revenue topCardShow="show" />
    </>
  );
};

export default ServicePage;

/* Read More */
