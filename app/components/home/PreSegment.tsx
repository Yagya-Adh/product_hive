"use client";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import presegemtImage from "@/app/assets/images/presegrment/presegment.webp";
import dissappointedImages from "@/app/assets/images/presegrment/howdissapinted.webp";

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
interface ICardListData {
  id: number;
  title: string;
  heading: ICardArray;
  innercontent: IinnerContent[];
}
const cardListData: ICardListData[] = [
  {
    id: 1,
    title: "Pre-Segmentation",
    heading: {
      before: "",
      highlight: "Connect data. ",
      after: "ask smarter questions. Get deeper insights.",
    },
    innercontent: [
      {
        id: 1,
        isIconChecked: true,
        listPoint: "We set out what needs to be done and we make it happen.",
      },
      {
        id: 2,
        isIconChecked: true,
        listPoint:
          "From Vision and Strategy to Design, Delivery and Growth. We're specialist generalists.",
      },
      {
        id: 3,
        isIconChecked: true,
        listPoint:
          "We offer a fresh, new way of product thinking. We're full stack product and design consultants that will help you grow.",
      },
    ],
  },
  {
    id: 2,
    title: "Loop in your team",
    heading: {
      before: "Bridge the",
      highlight: " gap between ",
      after: "data and users.",
    },

    innercontent: [
      {
        id: 1,
        isIconChecked: false,
        listPoint:
          "Bridge the gap between data and users means making data easy to access, understand, and use, enabling users to make informed decisions quickly and efficiently.",
      },
    ],
  },
];

const PreSegment = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-10">
      {/* presegement */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-20 bg-white py-10">
        <div className="overflow-hidden rounded-2xl">
          <Image src={presegemtImage} className="" alt="presegment_" />
        </div>
        <div className="p-10">
          <PresegmentCardList />
        </div>
      </div>
      {/* loop in your team */}
      <div className="grid grid-cols-1  md:grid-cols-2 gap-10 bg-white py-10 ">
        <div className="">
          <LoopinYourTeam />
        </div>

        <div className="bg-productHives-mainBackground overflow-hidden rounded-2xl">
          <Image
            src={dissappointedImages}
            alt="dissappointedImages_"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default PreSegment;

const PresegmentCardList = () => {
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
        </div>
      ))}
    </>
  );
};

const LoopinYourTeam = () => {
  return (
    <>
      {cardListData?.slice(1, 2).map((cardListing, index) => (
        <div className="flex flex-col justify-center" key={index}>
          <h1 className="text-xl font-bold ">{cardListing.title}</h1>
          <h2 className="text-5xl font-bold py-4">
            {cardListing.heading.before && cardListing.heading.before}
            <span className="text-productHives-buttonColor">
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
        </div>
      ))}
    </>
  );
};
