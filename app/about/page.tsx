"use client";
import MainBanner from "../components/banner/MainBanner";
import OurStory from "../components/about/OurStory";
import OurCoreValue from "../components/about/OurCoreValue";
import OurTeam from "../components/about/OurTeam";
import MeetOurTeam from "../components/about/MeetOurTeam";
import SliderBar from "../components/about/SliderBar";
import MapYourLocation from "../components/about/MapYourLocation";
import OportunityToJoin from "../components/about/OportunityToJoin";
import Footer from "../components/footer/Footer";

const AboutPage = () => {
  return (
    <>
      <MainBanner variant="about" />
      <OurStory />
      <OurCoreValue />
      <OurTeam />
      <MeetOurTeam />
      <SliderBar />
      <MapYourLocation />
      <OportunityToJoin />
      <Footer />
    </>
  );
};

export default AboutPage;
