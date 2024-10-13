"use client";
import serviceCardData from "@/serviceCard.json";
import serviceCardProcessData from "@/serviceCardProccess.json";
import Image from "next/image";
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

const aboutCardData: IAboutCardData = [
  { id: 1, ratio: "200+", particular: "Employee worldwide" },
  { id: 2, ratio: "120+", particular: "Countries" },
  { id: 3, ratio: "1200+", particular: "digital partners" },
  { id: 4, ratio: "98%", particular: "Retention rate" },
  { id: 5, ratio: "200+", particular: "potential clients" },
];

interface IBannerCard {
  variant?:
    | string
    | "defautl-service"
    | "default-home"
    | "defautl-about"
    | "default-service-process";
}
const BannerCard = ({ variant }: IBannerCard) =>
  variant == "defautl-service" ? (
    <>
      <div className="bg-white relative overflow-hidden z-20  rounded-2xl w-full p-10">
        <div className="absolute -top-1 right-1 -z-10">
          <Image
            height={200}
            width={200}
            className=""
            alt="cardWaterMark_"
            src="https://cdn.prod.website-files.com/661e1bd626e15bec7b70a970/6624c2b4d1360a25b9913be4_bg-element-services-feature.svg"
          />
        </div>

        <p className="text-xl lg:text-5xl font-semibold max-w-screen-lg">
          Building trust on our key features
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-4">
          {dataBanner?.map((cardData) => (
            <div className="flex flex-col justify-center" key={cardData.id}>
              <Image
                src={cardData.imageUrl && cardData.imageUrl}
                alt="card_"
                height={60}
                width={60}
                className="p-1"
              />

              <h1 className="font-bold text-xl">{cardData.title}</h1>
              <p className="max-w-sm">{cardData.slug}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  ) : variant == "defautl-service-process" ? (
    <>
      <div className="  text-white   relative overflow-hidden z-20  rounded-2xl w-full p-10">
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
      </div>
    </>
  ) : variant == "default-home" ? (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-4 rounded-2xl items-center p-10 border bg-white">
        <p className="text-xl lg:text-5xl font-semibold max-w-screen-lg">
          Building trust on our key features
        </p>

        <p className="max-w-screen-sm lg:text-xl">
          The majority of new digital products fail, with 35% falling short due
          to a lack of market need. These failings stem from a lack of market
          and user research. With ProductHive, you can validate your idea and
          boost your chances of successful product launch.
        </p>
      </div>
    </>
  ) : variant === "defautl-about" ? (
    <>
      <div className="overflow-hidden z-20 relative grid grid-cols-1  lg:gap-10 gap-4 rounded-2xl items-center p-10 border bg-white text-productHives-mainBackground">
        <h1 className="text-xl lg:text-5xl font-semibold max-w-screen-xl text-center ">
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
        <div className="flex flex-col justify-center items-center">
          <div className="flex py-4">
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
          </div>
          <div className="flex py-4">
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
          </div>
        </div>
      </div>
    </>
  ) : null;

export default BannerCard;
