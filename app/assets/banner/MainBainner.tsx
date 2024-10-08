"use client";
import Image from "next/image";
import ButtonPills from "@/app/components/button/ButtonPills";
import NavBar from "@/app/components/navbar/NavBar";
import personOne from "@/app/assets/home/hero.webp";
import personTwo from "@/app/assets/home/heroin.webp";

const MainBainner = () => {
  return (
    <div className="bg-productHives-mainBackground pt-10 pb-40 flex flex-col">
      <div className="max-w-screen-2xl mx-auto px-10 ">
        <NavBar />
        <PageBanner />
        <BannerCard />
      </div>
    </div>
  );
};

export default MainBainner;
const PageBanner = () => {
  return (
    <>
      <div className="relative lg:text-center flex flex-col text-white justify-center items-center p-10 py-40">
        <div className="hidden lg:flex absolute top-10 left-20 overflow-hidden rounded-full">
          <Image src={personOne} all="home_" className="size-48" />
        </div>
        <div className="hidden lg:flex absolute bottom-10 right-20 overflow-hidden rounded-full">
          <Image src={personTwo} all="home_" className="size-48" />
        </div>

        <div className="flex flex-col items-center md:text-center  justify-center">
          <h1 className="md:max-w-screen-96 s p-10 text-4xl lg:text-6xl md:text-center font-semibold max-w-screen-xl   capitalize">
            The customer engagement platform for <br />
            <span className="text-productHives-buttonColor">
              Every small business
            </span>
          </h1>

          <p>
            Boost Your Business with ProductHive - The Ultimate Customer
            Engagement Platform for Small Businesses.
          </p>
          <div className="p-10 flex justify-between items-center text-black">
            <ButtonPills text="Let's Work Together" />
            <ButtonPills
              text="Book A Call"
              variant="button-outline"
              padding="px-14"
            />
          </div>
        </div>
      </div>
    </>
  );
};
const BannerCard = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-4 rounded-2xl items-center p-10 border bg-white">
        <p className="text-xl lg:text-6xl font-semibold max-w-screen-lg">
          Worried about the
          <span className="text-productHives-buttonColor"> 95% </span>
          failure rate of new digital products? We can help you succeed.
        </p>

        <p className=" max-w-screen-sm lg:text-3xl ">
          The majority of new digital products fail, with 35% falling short due
          to a lack of market need. These failings stem from a lack of market
          and user research. With ProductHive, you can validate your idea and
          boost your chances of successful product launch.
        </p>
      </div>
    </>
  );
};
