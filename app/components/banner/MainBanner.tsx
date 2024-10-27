"use client";
import PageBanner from "./PageBanner";
import BannerCard from "../card/BannerCard";

interface IMainBainner {
  variant?:
    | string
    | "service"
    | "blog"
    | "home"
    | "about"
    | "contact"
    | "career"
    | "career-details"
    | "terms-condition";
}
const MainBanner = ({ variant }: IMainBainner) =>
  variant === "blog" ? (
    <>
      <section className="bg-productHives-mainBackground    relative">
        <div className="max-w-screen-2xl mx-auto px-10 relative pb-40 flex flex-col">
          <PageBanner variant="blog" />
        </div>
      </section>
    </>
  ) : variant === "terms-condition" ? (
    <>
      <section className="bg-productHives-mainBackground    relative">
        <div className="max-w-screen-2xl mx-auto px-10 relative pb-40 flex flex-col">
          <PageBanner variant="terms-condition" />
        </div>
      </section>
    </>
  ) : variant === "career-details" ? (
    <>
      <section className="bg-productHives-mainBackground    relative">
        <div className="max-w-screen-2xl mx-auto px-10 relative pb-40 flex flex-col">
          <PageBanner variant="career-details" />
        </div>
      </section>
    </>
  ) : variant === "career" ? (
    <>
      <section className="bg-productHives-mainBackground   ">
        <div className="max-w-screen-2xl mx-auto px-10 relative pb-10 mb-40 flex flex-col">
          <PageBanner variant="career" />
          <div className="absolute -bottom-96 ">
            <BannerCard variant="default-career" />
          </div>
        </div>
      </section>
    </>
  ) : variant === "contact" ? (
    <>
      <section className="bg-productHives-mainBackground   flex flex-col">
        <div className="max-w-screen-2xl mx-auto px-10 relative pb-40">
          <PageBanner variant="contact" />
          <div className="absolute -bottom-96 ">
            <BannerCard variant="default-contact" />
          </div>
        </div>
      </section>
    </>
  ) : variant === "service" ? (
    <>
      <section className="bg-productHives-mainBackground   flex flex-col">
        <div className="max-w-screen-2xl mx-auto px-10 relative ">
          <PageBanner variant="service" />
          <div className="absolute -bottom-72">
            <BannerCard variant="default-service" />
          </div>
        </div>
      </section>
    </>
  ) : variant === "about" ? (
    <section className="bg-productHives-mainBackground   flex flex-col">
      <div className="max-w-screen-2xl mx-auto px-4 relative ">
        <PageBanner variant="about" />
        <div className="absolute -bottom-72 w-full">
          <BannerCard variant="default-about" />
        </div>
      </div>
    </section>
  ) : variant === "home" ? (
    <section className="bg-productHives-mainBackground   flex flex-col">
      <div className="max-w-screen-2xl mx-auto px-10 relative ">
        <PageBanner variant="home" />
        <div className="absolute -bottom-72">
          <BannerCard variant="default-home" />
        </div>
      </div>
    </section>
  ) : null;

export default MainBanner;
