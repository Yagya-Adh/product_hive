"use client";
import Image from "next/image";
import serviceCardData from "@/serviceCard.json";
import serviceCardProcessData from "@/serviceCardProccess.json";
import aboutCardDataList from "@/aboutCardData.json";
import ourStoryCardData from "@/ourStoryData.json";
import ourValuesData from "@/ourValuesData.json";
import ContactUsForm from "../contact/ContactUsForm";
import ourContacts from "@/ourContactData.json";
import careerCardData from "@/careerBannerCard.json";

const careerData = [
  { id: 1, image: "/assets/images/career/one.webp" },
  { id: 2, image: "/assets/images/career/two.webp" },
  { id: 3, image: "/assets/images/career/three.webp" },
];

interface IserviceCardData {
  id: number;
  title: string;
  slug: string;
  imageUrl: string;
}
interface IserviceCardDataProcess {
  id: number;
  title: string;
  slug: string;
  imageUrl: string;
}
const dataBanner: IserviceCardData[] = serviceCardData;
const dataBannerProcess: IserviceCardDataProcess[] = serviceCardProcessData;

interface IAboutCardData {
  id: number;
  ratio: string;
  particular: string;
}
const aboutCardData: IAboutCardData[] = aboutCardDataList;

interface IourValueData {
  id: number;
  particular: string;
}
const ourValueData: IourValueData[] = ourValuesData;
interface IBannerCard {
  variant?:
    | string
    | "default-service"
    | "default-home"
    | "default-about"
    | "default-service-process"
    | "default-our-values"
    | "default-contact"
    | "default-our-contact"
    | "default-career"
    | "default-our-career";
}

const BannerCard = ({ variant }: IBannerCard) =>
  variant == "default-our-career" ? (
    <>
      <section className="relative overflow-hidden  w-full p-10 py-10">
        <article className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {careerCardData?.map((cardData) => (
            <div
              className="
              flex flex-col
              justify-center
              text-white 
              bg-productHives-mainBackground 
              rounded-2xl 
              py-5 px-4
              "
              key={cardData.id}
            >
              <Image
                src={cardData.imageUrl && cardData.imageUrl}
                alt="card_"
                height={80}
                width={80}
                className="p-1"
              />
              <h1 className="font-bold text-3xl pt-10">{cardData.title}</h1>
              <p className="max-w-sm py-4">{cardData.slug}</p>
            </div>
          ))}
        </article>
      </section>
    </>
  ) : variant == "default-career" ? (
    <>
      <section className="relative overflow-hidden">
        <article className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10">
          {careerData?.map((cardData) => (
            <div
              className="flex flex-col justify-center rounded-2xl"
              key={cardData.id}
            >
              <Image
                src={cardData.image && cardData.image}
                alt="career_card_"
                height={400}
                width={400}
                className="rounded-2xl scale-90 "
              />
            </div>
          ))}
        </article>
      </section>
    </>
  ) : variant == "default-our-contact" ? (
    <>
      <section className="relative overflow-hidden  w-full p-10 py-60">
        <article className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {ourContacts?.map((cardData) => (
            <div
              className="
              flex
              flex-col
              justify-center
            text-white
            bg-productHives-mainBackground
             rounded-2xl
             py-5 px-4
             "
              key={cardData.id}
            >
              <Image
                src={cardData.imageUrl && cardData.imageUrl}
                alt="card_"
                height={80}
                width={80}
                className="p-1"
              />
              <h1 className="font-bold text-3xl pt-10">{cardData.title}</h1>
              <p className="max-w-sm py-4">{cardData.slug}</p>
            </div>
          ))}
        </article>
      </section>
    </>
  ) : variant == "default-contact" ? (
    <>
      <section className="bg-white relative overflow-hidden z-20 rounded-2xl p-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Image
            src="/assets/images/contact/listen.webp"
            alt="card_"
            height={400}
            width={400}
            className="p-1 rounded-2xl"
          />
          <ContactUsForm />
        </div>
      </section>
    </>
  ) : variant == "default-our-values" ? (
    <>
      <section
        className="
      bg-productHives-ProductOwner
      relative
      overflow-hidden
      z-20
      rounded-2xl
      w-full
      py-10
      px-10
      "
      >
        {/* title */}
        <h1 className="z-20 text-xl lg:text-5xl font-semibold max-w-screen-xl text-center py-5">
          Our Core Values
        </h1>
        {/* list title */}
        <div className="flex flex-col justify-center items-center z-20 py-5">
          <div className="flex py-2">
            {ourValueData?.slice(0, 4).map((list) => {
              return (
                <div
                  className="
                  mx-2
                  bg-productHives-buttonColor
                  border border-productHives-mainBackground
                  text-productHives-TextSecondary 
                  rounded-full
                  items-center
                  justify-between
                  text-3xl
                  flex
                  px-5 py-1 "
                  key={list.id}
                >
                  {/* <span className="text-productHives-buttonColor">
                    {list.ratio}
                  </span> */}
                  <h1>{list.particular}</h1>
                </div>
              );
            })}
          </div>
          <summary className="flex py-2">
            {ourValueData?.slice(4, 6).map((list) => {
              return (
                <div
                  className="mx-2 bg-productHives-buttonColor border border-productHives-mainBackground text-productHives-TextSecondary rounded-full items-center justify-between text-3xl flex px-5 py-1 "
                  key={list.id}
                >
                  {/* <span className="text-productHives-buttonColor">
                    {list.ratio}
                  </span> */}
                  <h1>{list.particular}</h1>
                </div>
              );
            })}
          </summary>
        </div>
        {/* cards */}
        <article className="grid grid-cols-1 md:grid-cols-3 gap-10 py-4">
          {ourStoryCardData?.map((cardData) => (
            <div
              className="flex flex-col justify-center bg-productHives-mainBackground p-10 rounded-2xl text-white"
              key={cardData.id}
            >
              <Image
                src={cardData.imageUrl && cardData.imageUrl}
                alt="card_"
                height={80}
                width={80}
                className="p-2"
              />

              <h1 className="font-bold text-4xl pt-10">{cardData.title}</h1>
              <p className="max-w-sm py-2 pb-5">{cardData.slug}</p>
            </div>
          ))}
        </article>
      </section>
    </>
  ) : variant == "default-service" ? (
    <>
      <section className="bg-white relative overflow-hidden z-20  rounded-2xl p-10">
        <div className="absolute -top-1 right-1 -z-10">
          <Image
            height={200}
            width={200}
            alt="cardWaterMark_"
            src="https://cdn.prod.website-files.com/661e1bd626e15bec7b70a970/6624c2b4d1360a25b9913be4_bg-element-services-feature.svg"
          />
        </div>

        <p className="text-xl lg:text-5xl font-semibold max-w-screen-lg py-4">
          Building trust on our key features
        </p>

        <article className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
          {dataBanner?.map((cardData) => (
            <div className="flex flex-col justify-center" key={cardData.id}>
              <Image
                src={cardData.imageUrl && cardData.imageUrl}
                alt="card_"
                height={100}
                width={100}
                className="p-1"
              />

              <h1 className="font-bold text-2xl py-1">{cardData.title}</h1>
              <p className="max-w-sm py-1">{cardData.slug}</p>
            </div>
          ))}
        </article>
      </section>
    </>
  ) : variant == "default-service-process" ? (
    <>
      <section className="text-white relative overflow-hidden z-20  rounded-2xl w-full p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
          {dataBannerProcess?.map((cardData) => (
            <div
              className="flex flex-col justify-center bg-[#103128] p-10 rounded-2xl"
              key={cardData.id}
            >
              <Image
                src={cardData.imageUrl && cardData.imageUrl}
                alt="card_"
                height={60}
                width={60}
                className="p-1"
              />
              <h3 className="py-4">0{cardData.id}</h3>
              <h1 className="font-bold text-2xl">{cardData.title}</h1>
              <p className="max-w-sm py-4">{cardData.slug}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  ) : variant == "default-home" ? (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-4 rounded-2xl items-center py-32 p-20 border bg-white">
        <p className="text-xl lg:text-5xl font-semibold max-w-screen-lg">
          Building trust on our key features
        </p>

        <p className="max-w-screen-sm lg:text-xl">
          The majority of new digital products fail, with 35% falling short due
          to a lack of market need. These failings stem from a lack of market
          and user research. With ProductHive, you can validate your idea and
          boost your chances of successful product launch.
        </p>
      </section>
    </>
  ) : variant === "default-about" ? (
    <>
      <section className="overflow-hidden z-20 relative grid grid-cols-1 lg:gap-50 gap-4 rounded-2xl items-center p-10 border bg-white text-productHives-mainBackground">
        <h1 className=" z-20 text-xl lg:text-5xl font-semibold max-w-screen-xl text-center ">
          Grow your business by 2X using our consultation service
        </h1>
        <div className="absolute -top-1 right-1 z-10">
          <Image
            height={200}
            width={200}
            className=""
            alt="cardWaterMark_"
            src="https://cdn.prod.website-files.com/661e1bd626e15bec7b70a970/6624c2b4d1360a25b9913be4_bg-element-services-feature.svg"
          />
        </div>
        <div className="flex flex-col justify-center items-center z-20">
          <article className="flex py-4">
            {aboutCardData?.slice(0, 3).map((aboutCard) => {
              return (
                <div
                  className="mx-2 bg-productHives-mainBackground rounded-full items-center justify-between text-white text-3xl flex px-5 py-4"
                  key={aboutCard.id}
                >
                  <span className="text-productHives-buttonColor">
                    {aboutCard.ratio}
                  </span>
                  <h1>{aboutCard.particular}</h1>
                </div>
              );
            })}
          </article>
          <summary className="flex py-4">
            {aboutCardData?.slice(3, 6).map((aboutCard) => {
              return (
                <div
                  className="mx-2 bg-productHives-mainBackground rounded-full items-center justify-between text-white text-3xl flex px-5 py-4"
                  key={aboutCard.id}
                >
                  <span className="text-productHives-buttonColor">
                    {aboutCard.ratio}
                  </span>
                  <h1>{aboutCard.particular}</h1>
                </div>
              );
            })}
          </summary>
        </div>
      </section>
    </>
  ) : null;

export default BannerCard;
