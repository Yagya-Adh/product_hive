"use client";
import Image from "next/image";
import ourTeam from "@/app/assets/images/about/ourTeamVideo.webp";

const OurTeam = () => {
  return (
    <div className="bg-productHives-mainBackground py-20">
      <div className="max-w-screen-2xl mx-auto px-10">
        <OurHeading />
        <VideoSection />
      </div>
    </div>
  );
};

export default OurTeam;

const OurHeading = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white font-bold">
      <h4 className="py-5">OurTeam</h4>
      <h1 className="text-5xl max-w-screen-md text-center">
        We&lsquo;re here to help you{" "}
        <span className="text-productHives-buttonColor">
          achieve your goals
        </span>
      </h1>
    </div>
  );
};

const VideoSection = () => {
  return (
    <div className="relative  scale-90">
      <Image src={ourTeam} alt="our_team" className="rounded-3xl" />
      <div className="absolute text-white font-bold bottom-10 left-10">
        <h1 className="text-6xl">“Top-notch counsel!”</h1>
        <h5 className="text-xl">- Shezan, Resecure</h5>
      </div>
    </div>
  );
};
