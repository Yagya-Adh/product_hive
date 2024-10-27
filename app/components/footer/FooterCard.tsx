"use client";
import Image from "next/image";
import footerCardData from "@/footerCardData.json";
interface Icommon {
  id: number;
  text: string;
  icon: string;
}
interface Isocial {
  id: number;
  mean: string;
}

interface IcartData {
  id: number;
  title: string;
  social: Isocial[];
  common: Icommon[];
}
const cardData: IcartData[] = footerCardData;
const FooterCard = () => {
  return (
    <section className="rounded-xl overflow-hidden bg-productHives-lightYellow  relative z-30">
      <div className="flex flex-row">
        <div className="bg-productHives-buttonColor rounded-full absolute -top-10 -right-10 h-1/2 w-1/2 -z-10"></div>
        {cardData?.map((cardItem) => (
          <div key={cardItem.id} className="relative  pl-10 pt-10">
            <h1 className="text-3xl font-bold">{cardItem.title}</h1>
            <div className="absolute">
              {cardItem.common?.map((commonList) => (
                <div
                  className="flex items-center text-xl py-2"
                  key={commonList.id}
                >
                  <Image
                    src={commonList.icon}
                    alt="icons_"
                    width={120}
                    height={120}
                    className="size-7 z-10"
                  />
                  <p className="p-1">{commonList.text}</p>
                </div>
              ))}
              <div className="flex">
                {cardItem.social?.map((socialList) => (
                  <Image
                    src={socialList.mean}
                    key={socialList.id}
                    alt="social_"
                    width={24}
                    height={24}
                    className="size-7 mx-1"
                  />
                ))}
              </div>
            </div>
            <Image
              src="/assets/images/footer/talk.webp"
              alt="card_image_"
              className="z-10"
              width={500}
              height={500}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FooterCard;
