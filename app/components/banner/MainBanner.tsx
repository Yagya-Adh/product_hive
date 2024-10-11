"use client";
import NavBar from "@/app/components/navbar/NavBar";
import PageBanner from "./PageBanner";
import BannerCard from "../card/BannerCard";

interface IMainBainner {
  variant?: string | "service" | "home" | "about";
}
const MainBanner = ({ variant }: IMainBainner) => {
  if (variant == "service") {
    return (
      <>
        <div className="bg-productHives-mainBackground pt-10 pb-40 flex flex-col">
          <div className="max-w-screen-2xl mx-auto px-10 relative ">
            <NavBar />
            <PageBanner variant="service" />
            <div className="absolute -bottom-72">
              <BannerCard variant="building" />
            </div>
          </div>
        </div>
      </>
    );
  }

  if (variant == "about") {
    return (
      <>
        <div className="bg-productHives-mainBackground pt-10 pb-40 flex flex-col">
          <div className="max-w-screen-2xl mx-auto px-10 relative ">
            <NavBar />
            <PageBanner variant="about" />
            <div className="absolute -bottom-72">
              <BannerCard variant="building" />
            </div>
          </div>
        </div>
      </>
    );
  }

  if (variant == "home") {
    return (
      <>
        <div className="bg-productHives-mainBackground pt-10 pb-40 flex flex-col">
          <div className="max-w-screen-2xl mx-auto px-10 relative ">
            <NavBar />
            <PageBanner variant="home" />
            <div className="absolute -bottom-72">
              <BannerCard variant="default-home" />
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default MainBanner;
