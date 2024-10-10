"use client";
import NavBar from "@/app/components/navbar/NavBar";
import PageBanner from "./PageBanner";
import BannerCard from "../card/BannerCard";

interface IMainBainner {
  variant?: string | "service";
}
const MainBainner = ({ variant }: IMainBainner) => {
  if (variant == "service") {
    return (
      <>
        <div className="bg-productHives-mainBackground pt-10 pb-40 flex flex-col">
          <div className="max-w-screen-2xl mx-auto px-10 relative ">
            <NavBar />
            <PageBanner />
            <div className="absolute -bottom-72">
              <BannerCard variant="building" />
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="bg-productHives-mainBackground pt-10 pb-40 flex flex-col">
        <div className="max-w-screen-2xl mx-auto px-10 relative ">
          <NavBar />
          <PageBanner />
          <div className="absolute -bottom-72">
            <BannerCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBainner;
