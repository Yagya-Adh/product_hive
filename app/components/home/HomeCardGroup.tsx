"use client";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import ButtonPills from "../button/ButtonPills";

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
  hasButton: boolean;
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

    hasButton: false,
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

    hasButton: true,
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

const HomeCardGroup = () => {
  return (
    <main className="max-w-screen-2xl mx-auto px-10">
      {/* presegement */}
      <PreSegmentCard />
      {/* loop in your team */}
      <LoopInYourTeamCard />
    </main>
  );
};
export default HomeCardGroup;

const PreSegmentCard = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:gap-20 items-center bg-white py-10">
      <aside className="overflow-hidden rounded-2xl relative">
        <Image
          src="/assets/images/presegrment/presegment.webp"
          height={700}
          width={700}
          alt="presegment_"
          className="object-cover object-center "
        />

        <div className="absolute bottom-5 right-5">
          <Image
            src="/assets/images/presegrment/income.svg"
            height={250}
            width={150}
            alt="presegment_"
            className="object-cover object-center h-full w-full rounded-xl"
          />
        </div>
      </aside>
      <aside className="p-10">
        <PresegmentCardArticle />
      </aside>
    </section>
  );
};

const LoopInYourTeamCard = () => {
  return (
    <section className="grid grid-cols-1  md:grid-cols-2 gap-10 bg-white my-10">
      <LoopinYourTeamArticle />
      <aside className="bg-productHives-mainBackground overflow-hidden rounded-2xl ">
        <Image
          src="/assets/images/presegrment/howdissapinted.webp"
          alt="dissappointedImages_"
          width={500}
          height={500}
          className="object-center object-cover "
        />
      </aside>
    </section>
  );
};
const PresegmentCardArticle = () => {
  return (
    <aside>
      {cardListData?.slice(0, 1).map((cardListing) => (
        <article className="flex flex-col justify-center" key={cardListing.id}>
          <h1 className="text-xl font-bold ">{cardListing.title}</h1>
          <h2 className="text-5xl font-bold py-4 leading-10">
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
        </article>
      ))}
    </aside>
  );
};

const LoopinYourTeamArticle = () => {
  return (
    <section>
      {cardListData?.slice(1, 2).map((cardListing, index) => (
        <article className="flex flex-col justify-center" key={index}>
          <h1 className="text-xl font-bold ">{cardListing.title}</h1>
          <h2 className="text-5xl font-bold py-4">
            {cardListing.heading.before && cardListing.heading.before}
            <span className="text-productHives-buttonColor">
              {cardListing.heading.highlight}
            </span>
            {cardListing.heading.after}
          </h2>
          <summary className="flex flex-col py-5">
            {cardListing.innercontent?.map((innerList) => (
              <ul key={innerList.id} className="flex flex-col justify-between">
                {innerList.isIconChecked == true && (
                  <span>
                    <CheckCircleIcon className="text-productHives-buttonColor size-7" />
                  </span>
                )}
                <li className="text-xl font-sans ms-2">
                  {innerList.listPoint}
                </li>
              </ul>
            ))}
          </summary>
          <div>
            <ButtonPills
              padding="px-4"
              variant="button-default"
              text="Lets Work Together"
            />
          </div>
        </article>
      ))}
    </section>
  );
};
