"use client";
import Marquee from "react-fast-marquee";
import Image, { StaticImageData } from "next/image";
import CustomTextBanner from "../banner/CustomTextBanner";
import girlsGroupImage from "@/app/assets/images/about/slide/girlsgroup.webp";
import gatherImage from "@/app/assets/images/about/slide/gather.webp";
import randomImage from "@/app/assets/images/about/slide/random.webp";
import tableImage from "@/app/assets/images/about/slide/table.webp";
import talkImage from "@/app/assets/images/about/slide/talk.webp";

interface IslideData {
  id: number;
  image: StaticImageData;
}
const slideData: IslideData[] = [
  { id: 1, image: girlsGroupImage },
  { id: 2, image: gatherImage },
  { id: 3, image: randomImage },
  { id: 4, image: tableImage },
  { id: 5, image: talkImage },
];

const SliderBar = () => {
  return (
    <div className="bg-productHives-lightYellow">
      <div className="px-10 max-w-screen-2xl mx-auto py-10 ">
        <div className="flex flex-col">
          <CustomTextBanner
            preText="We’re not just colleagues, "
            highlightText=" We’re a community"
            textColor="dark-green"
          />
        </div>
      </div>
      <div className="py-10">
        <Marquee play={false}>
          <SlideCard />
        </Marquee>
      </div>
    </div>
  );
};

export default SliderBar;

const SlideCard = () => {
  return (
    <>
      <div className="flex items-center">
        {slideData?.map((slideing) => (
          <Image
            src={slideing.image}
            alt="slide_"
            key={slideing.id}
            className="rounded-2xl mx-2"
          />
        ))}
      </div>
    </>
  );
};
