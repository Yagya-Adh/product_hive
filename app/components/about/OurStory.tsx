"use client";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import ourStroyImage from "@/app/assets/images/about/ourStoryImage.webp";

interface ICardArray {
  before?: string;
  highlight: string;
  after?: string;
}
interface IinnerContent {
  id: number;
  isIconChecked: boolean;
  listPoint: string;
}
interface IcardCalculate {
  id: number;
  percentage: string;
  slug: string;
}
interface ICardListData {
  id: number;
  title: string;
  heading: ICardArray;
  innercontent: IinnerContent[];
  cardCalculate: IcardCalculate[];
}
const cardListData: ICardListData[] = [
  {
    id: 1,
    title: "Our Story",
    heading: {
      before: "A dedicated ",
      highlight: "solution for business ",
      after: " and enterprises",
    },
    innercontent: [
      {
        id: 1,
        isIconChecked: false,
        listPoint:
          "At Product Hive, we redefine success through innovation and expertise. Our mission is to empower businesses with transformative solutions, fostering growth in dynamic markets. With a dedicated team of visionaries and tech aficionados",
      },
    ],
    cardCalculate: [
      { id: 1, percentage: "25%", slug: "Increase in Retention" },
      { id: 2, percentage: "2.5X", slug: "Base Growth" },
    ],
  },
];

const OurStory = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-10 py-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-20 bg-white py-10">
        <div className="overflow-hidden rounded-2xl bg-productHives-mainBackground">
          <Image src={ourStroyImage} className="scale-90" alt="presegment_" />
        </div>
        <div className="p-10">
          <StoryCardText />
        </div>
      </div>
    </div>
  );
};

export default OurStory;

const StoryCardText = () => {
  return (
    <>
      {cardListData?.slice(0, 1).map((cardListing) => (
        <div className="flex flex-col justify-center" key={cardListing.id}>
          <h1 className="text-xl font-bold ">{cardListing.title}</h1>
          <h2 className="text-5xl font-bold py-4">
            <span className="text-productHives-buttonColor">
              {" "}
              {cardListing.heading.highlight}
            </span>
            {cardListing.heading.after}
          </h2>
          <div className="flex flex-col py-5">
            {cardListing.innercontent?.map((innerList) => (
              <ul key={innerList.id} className="flex flex-col justify-between">
                <div className="flex py-1">
                  {innerList.isIconChecked == true && (
                    <span>
                      <CheckCircleIcon className="text-productHives-buttonColor size-7" />
                    </span>
                  )}
                  <li className="text-xl font-sans ms-2">
                    {innerList.listPoint}
                  </li>
                </div>
              </ul>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {cardListing?.cardCalculate.map((amount) => (
              <div
                className="rounded-2xl bg-productHives-lightYellow h-full w-full text-start p-4"
                key={amount.id}
              >
                <h1 className="text-6xl font-bold ">{amount.percentage}</h1>

                <h4 className="text-xl w-full py-5">{amount.slug}</h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
/* 
const CardGridCalculate = ({ cardCalculate }) => {
  return (
    <div
      className="rounded-2xl bg-productHives-lightYellow h-full w-full text-start p-4"
      key={cardCalculate.id}
    >
      <h1 className="text-6xl font-bold ">{cardCalculate.percentage}</h1>

      <h4 className="text-xl w-full py-5">{cardCalculate.slug}</h4>
    </div>
  );
}; */
