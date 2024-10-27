"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import CustomTextBanner from "../banner/CustomTextBanner";

interface IslideData {
  id: number;
  image: string;
}
const slideData: IslideData[] = [
  { id: 1, image: "/assets/images/about/slide/girlsgroup.webp" },
  { id: 2, image: "/assets/images/about/slide/gather.webp" },
  { id: 3, image: "/assets/images/about/slide/random.webp" },
  { id: 4, image: "/assets/images/about/slide/table.webp" },
  { id: 5, image: "/assets/images/about/slide/talk.webp" },
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
            height={400}
            width={400}
            className="rounded-2xl mx-2"
          />
        ))}
      </div>
    </>
  );
};
