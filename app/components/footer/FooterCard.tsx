"use client";

import Image, { StaticImageData } from "next/image";
import letsTalkImage from "../../assets/images/footer/talk.webp";
import facebook from "../../assets/images/social/facebook.svg";
import xsvgLogo from "../../assets/images/social/x-social.svg";
import linkedin from "../../assets/images/social/linkedin.svg";
import instagram from "../../assets/images/social/instagram.svg";

import messageIcon from "../../assets/images/icons/message.svg";
import callIcon from "../../assets/images/icons/call.svg";
import dropIcon from "../../assets/images/icons/drop.svg";

interface Icommon {
  id: number;
  text: string;
  icon: StaticImageData;
}
interface Isocial {
  id: number;
  mean: StaticImageData;
}

interface IcartData {
  id: number;
  title: string;
  social: Isocial[];
  common: Icommon[];
}
const cardData: IcartData[] = [
  {
    id: 1,
    title: "Let's Talk",
    social: [
      { id: 1, mean: facebook },
      { id: 2, mean: xsvgLogo },
      { id: 3, mean: linkedin },
      { id: 4, mean: instagram },
    ],
    common: [
      { id: 1, text: "hello@product-hive.com", icon: messageIcon },
      { id: 2, text: "+01222 222 222", icon: callIcon },
      { id: 3, text: "Edmonton, Canada", icon: dropIcon },
    ],
  },
];
const FooterCard = () => {
  return (
    <div className="rounded-xl overflow-hidden bg-productHives-lightYellow  relative z-30">
      <div className="flex flex-row">
        <div className="bg-productHives-buttonColor rounded-full absolute -top-10 -right-10 h-2/3 w-1/2 -z-10"></div>
        {cardData?.map((cardItem) => (
          <div key={cardItem.id} className="relative  pl-10 pt-10">
            <h1 className="text-3xl font-bold">{cardItem.title}</h1>
            <div className="absolute ">
              {cardItem.common?.map((commonList) => (
                <div
                  className="flex items-center text-xl py-2"
                  key={commonList.id}
                >
                  <Image
                    src={commonList.icon}
                    alt="icons_"
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
                    className="size-7 mx-1"
                  />
                ))}
              </div>
            </div>
            <Image src={letsTalkImage} alt="card_image_" className="z-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterCard;
