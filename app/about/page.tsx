"use client";
import MainBanner from "../components/banner/MainBanner";
import OurStory from "../components/about/OurStory";
import OurCoreValue from "../components/about/OurCoreValue";
import OurTeam from "../components/about/OurTeam";
import MeetOurTeam from "../components/about/MeetOurTeam";
import Footer from "../components/footer/Footer";
import OportunityToJoin from "../components/about/OportunityToJoin";

const AboutPage = () => {
  return (
    <>
      <MainBanner variant="about" />
      <OurStory />
      <OurCoreValue />
      <OurTeam />
      <MeetOurTeam />
      <OportunityToJoin />
      <Footer />
    </>
  );
};

export default AboutPage;
