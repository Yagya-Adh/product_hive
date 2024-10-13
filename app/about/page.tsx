"use client";
import MainBanner from "../components/banner/MainBanner";
import OurStory from "../components/about/OurStory";
import OurCoreValue from "../components/about/OurCoreValue";
import OurTeam from "../components/about/OurTeam";
import MeetOurTeam from "../components/about/MeetOurTeam";
import Footer from "../components/footer/Footer";
import MapYourLocation from "../components/about/MapYourLocation";
import OportunityToJoin from "../components/about/OportunityToJoin";

const AboutPage = () => {
  return (
    <>
      <MainBanner variant="about" />
      <OurStory />
      <OurCoreValue />
      <OurTeam />
      <MeetOurTeam />
      <MapYourLocation />
      <OportunityToJoin />
      <Footer />
    </>
  );
};

export default AboutPage;
