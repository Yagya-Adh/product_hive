import Image from "next/image";
import MainBainner from "./components/banner/MainBainner";
import ProductOwner from "./components/banner/ProductOwner";
import Footer from "./components/footer/Footer";
import presegemtImage from "@/app/assets/images/presegrment/presegment.webp";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <>
      {/* <div className="bg-productHives-mainBackground pt-10 pb-40"></div> */}
      <MainBainner />
      <ProductOwner />
      <PreSegment />
      <Footer />
    </>
  );
}

const cardListData = [
  {
    id: 1,
    title: "Pre-Segmentation",
    heading: "Connect data, ask smarter questions. Get deeper insights.",
    innercontent: [
      {
        id: 1,
        isIconChecked: false,
        listPoint: "We set out what needs to be done and we make it happen.",
      },
      {
        id: 2,
        isIconChecked: false,
        listPoint:
          "From Vision and Strategy to Design, Delivery and Growth. We're specialist generalists.",
      },
      {
        id: 3,
        isIconChecked: false,
        listPoint:
          "We offer a fresh, new way of product thinking. We're full stack product and design consultants that will help you grow.",
      },
    ],
  },
  {
    id: 2,
    title: "Loop in your team",
    heading: "Bridge the gap between data and users.",
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
      <div className="grid grid-cols-1  md:grid-cols-2 gap-10 bg-white py-10">
        <div>
          <Image
            src={presegemtImage}
            className=" rounded-2xl"
            alt="presegment_"
          />
        </div>
        <div>
          <PresegmentCardList />
        </div>
      </div>

      {/* <div className="grid grid-cols-1  md:grid-cols-2 gap-10 bg-white py-10 ">
        <div>
          <Image
            src={presegemtImage}
            className=" rounded-2xl"
            alt="presegment_"
          />
        </div>
        <div className="">
          <PresegmentCardList />
        </div>
      </div> */}
    </div>
  );
};

const PresegmentCardList = () => {
  return (
    <>
      {cardListData?.slice(0, 1).map((cardListing) => (
        <>
          <div className="flex flex-col ">
            <h1 className="text-xl font-bold">{cardListing.title}</h1>
            <h2 className="text-5xl font-bold">{cardListing.heading}</h2>
            <div className="flex flex-col py-5">
              {cardListing.innercontent?.map((innerList) => (
                <ul
                  key={innerList.id}
                  className="flex flex-col justify-between"
                >
                  <div className="flex py-1">
                    <span>
                      <CheckCircleIcon className="text-productHives-buttonColor size-7" />
                    </span>
                    <li className="text-xl font-sans ms-2">
                      {innerList.listPoint}
                    </li>
                  </div>
                </ul>
              ))}
            </div>
          </div>
        </>
      ))}
    </>
  );
};
