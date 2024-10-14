"use client";
import NavBar from "@/app/components/navbar/NavBar";
import PageBanner from "./PageBanner";
import BannerCard from "../card/BannerCard";

interface IMainBainner {
  variant?: string | "service" | "home" | "about" | "contact" | "career";
}
const MainBanner = ({ variant }: IMainBainner) =>
  variant === "career" ? (
    <div className="bg-productHives-mainBackground pt-10 pb-40 flex flex-col">
      <div className="max-w-screen-2xl mx-auto px-10 relative pb-40">
        <NavBar />
        <PageBanner variant="career" />
        <div className="absolute -bottom-96 ">
          <BannerCard variant="defautl-career" />
        </div>
      </div>
    </div>
  ) : variant === "contact" ? (
    <div className="bg-productHives-mainBackground pt-10 pb-40 flex flex-col">
      <div className="max-w-screen-2xl mx-auto px-10 relative pb-40">
        <NavBar />
        <PageBanner variant="contact" />
        <div className="absolute -bottom-96 ">
          <BannerCard variant="defautl-contact" />
        </div>
      </div>
    </div>
  ) : variant === "service" ? (
    <div className="bg-productHives-mainBackground pt-10 pb-40 flex flex-col">
      <div className="max-w-screen-2xl mx-auto px-10 relative ">
        <NavBar />
        <PageBanner variant="service" />
        <div className="absolute -bottom-72">
          <BannerCard variant="defautl-service" />
        </div>
      </div>
    </div>
  ) : variant === "about" ? (
    <div className="bg-productHives-mainBackground pt-10 pb-40 flex flex-col">
      <div className="max-w-screen-2xl mx-auto px-10 relative ">
        <NavBar />
        <PageBanner variant="about" />
        <div className="absolute -bottom-72">
          <BannerCard variant="defautl-about" />
        </div>
      </div>
    </div>
  ) : variant === "home" ? (
    <div className="bg-productHives-mainBackground pt-10 pb-40 flex flex-col">
      <div className="max-w-screen-2xl mx-auto px-10 relative ">
        <NavBar />
        <PageBanner variant="home" />
        <div className="absolute -bottom-72">
          <BannerCard variant="default-home" />
        </div>
      </div>
    </div>
  ) : null;

export default MainBanner;
