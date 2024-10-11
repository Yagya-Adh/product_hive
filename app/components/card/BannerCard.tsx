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
  ) : null;

export default BannerCard;

/* 


"use client";

const dataBanner = [
  {
    id: 1,
    title: "Expert Consultancy",
    slug: "Access guidance from seasoned professionals, ensuring strategic insights.",
    image: "",
  },

  {
    id: 2,
    title: "Proven Track Record",
    slug: "Benefit from our history of successful projects and satisfied clients, showcasing our commitment.",
    image: "",
  },

  {
    id: 3,
    title: "Transparency & Communication",
    slug: "Experience clear communication and transparency throughout our collaboration, fostering trust.",
    image: "",
  },
];

interface IBannerCard {
  variant?: string | "defautl-service";
}
const BannerCard = ({ variant }: IBannerCard) => {
  if (variant == "defautl-service") {
    return (
      <>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-4 rounded-2xl items-center p-10 border bg-white">
          <p className="text-xl lg:text-5xl font-semibold max-w-screen-lg">
            Building trust on our key features
          </p>

          {dataBanner?.map((banner) => (
            <div key={banner.id}>
              <h1 className="text-xl font-bold">{banner.title}</h1>
              <p>{banner.slug}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-4 rounded-2xl items-center p-10 border bg-white">
        <p className="text-xl lg:text-5xl font-semibold max-w-screen-lg">
          Worried about the
          <span className="text-productHives-buttonColor"> 95% </span>
          failure rate of new digital products? We can help you succeed.
        </p>

        <p className="max-w-screen-sm lg:text-xl">
          The majority of new digital products fail, with 35% falling short due
          to a lack of market need. These failings stem from a lack of market
          and user research. With ProductHive, you can validate your idea and
          boost your chances of successful product launch.
        </p>
      </div>
    </>
  );
};
export default BannerCard;



*/
