"use client";

import Image, { StaticImageData } from "next/image";
import talentImage from "@/app/assets/images/career/talent.webp";
import ButtonPills from "../button/ButtonPills";
import hundredChartImage from "@/app/assets/images/career/hundredChart.svg";
import groupImage from "@/app/assets/images/career/group.svg";
interface IinnerContent {
  id: number;
  listPoint: string;
}
interface ICardArray {
  before: string;
  highlight: string;
  after: string;
}
interface ICardListData {
  id: number;
  title: string;
  heading: ICardArray;
  innercontent: IinnerContent[];
}
const cardListData: ICardListData[] = [
  {
    id: 1,
    title: "Join Us",
    heading: {
      before: "Join 120+ ",
      highlight: " talented people ",
      after: " from around the world",
    },
    innercontent: [
      {
        id: 1,
        listPoint:
          "At Product Hive, we redefine success through innovation and expertise. Our mission is to empower businesses with transformative solutions, fostering growth in dynamic markets.",
      },
      {
        id: 2,
        listPoint: "With a dedicated team of visionaries and tech aficionados",
      },
    ],
  },
];

const smallCardData = [
  {
    id: 1,
    image: hundredChartImage,
    heading: "100% Remote",
    slug: "At any place in the world",
  },
  {
    id: 2,
    image: groupImage,
    heading: "120+",
    slug: "At any place in the world",
  },
];
interface ISmallCard {
  key: number;
  image: StaticImageData;
  heading: string;
  slug: string;
}
const SmallCard = ({ key, image, heading, slug }: ISmallCard) => {
  return (
    <>
      <div
        className="bg-white rounded-2xl flex flex-col py-7 p-2 text-productHives-mainBackground"
        key={key}
      >
        <Image src={image} alt="small_card_" className=" size-10" />
        <h1 className="font-bold text-4xl py-2 max-w-14">{heading}</h1>
        <p className="text-xs py-2">{slug}</p>
      </div>
    </>
  );
};
const JoinUs = () => {
  return (
    <div className="max-w-screen-2xl px-10 mx-auto pt-60 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
        <div className="relative rounded-2xl text-white bg-productHives-mainBackground flex flex-cols justify-center items-center py-10 -px-10">
          <div className="absolute  top-10  left-28 z-20">
            {smallCardData?.slice(0, 1).map((list) => (
              <SmallCard
                key={list.id}
                image={list.image}
                heading={list.heading}
                slug={list.slug}
              />
            ))}{" "}
          </div>
          <Image
            src={talentImage}
            alt="join_us_"
            className="rounded-full scale-75 "
          />
          <div className="absolute  bottom-10  right-28 z-20">
            {smallCardData?.slice(1, 2).map((list) => (
              <SmallCard
                key={list.id}
                image={list.image}
                heading={list.heading}
                slug={list.slug}
              />
            ))}
          </div>
        </div>
        <div>
          {cardListData?.slice(0, 1).map((cardListing) => (
            <div
              className="flex flex-col justify-center p-10"
              key={cardListing.id}
            >
              <h1 className="text-xl font-bold ">{cardListing.title}</h1>
              <h2 className="text-5xl font-bold py-4">
                {cardListing.heading.before}
                <span className="text-productHives-buttonColor">
                  {" "}
                  {cardListing.heading.highlight}
                </span>
                {cardListing.heading.after}
              </h2>
              <div className="flex flex-col py-5">
                {cardListing.innercontent?.map((innerList) => (
                  <ul
                    key={innerList.id}
                    className="flex flex-col justify-between"
                  >
                    <div className="flex py-1">
                      <li className="text-xl font-sans ms-2 py-2">
                        {innerList.listPoint}
                      </li>
                    </div>
                  </ul>
                ))}
              </div>
              <div className="flex items-center">
                <ButtonPills text="Discover Services" padding="px-4" />
                <ButtonPills
                  text="See Opening Jobs"
                  padding="px-4 "
                  variant="button-outline-white"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
