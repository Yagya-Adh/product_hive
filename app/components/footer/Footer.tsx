"use client";
import Image, { StaticImageData } from "next/image";
import MainLogo from "../mainLogo/MainLogo";
import letsTalkImage from "../../assets/footer/talk.webp";
import ButtonPills from "../button/ButtonPills";

import facebook from "../../assets/social/facebook.webp";
import tweeter from "../../assets/social/tweeter.webp";
import linkedin from "../../assets/social/linkedin.webp";
import instagram from "../../assets/social/instagram.webp";

import messageIcon from "../../assets/icons/message.svg";
import callIcon from "../../assets/icons/call.svg";
import dropIcon from "../../assets/icons/drop.svg";
interface IrouteData {
  id: number;
  head: string;
  path: string[];
}
const routeData: IrouteData[] = [
  {
    id: 1,
    head: "Pages",
    path: [
      "HomeV1",
      "Home V2",
      "Services",
      "About",
      "Blogs",
      "FAQ",
      "Contact",
      "Case",
      "Study",
    ],
  },
  {
    id: 2,
    head: "More Pages ",
    path: [
      "Pricing ",
      "Career ",
      "Blog Details",
      "Career Details",
      "Case Study Details",
      "Services Details",
      "Terms & Conditions",
      "404",
    ],
  },
  {
    id: 3,
    head: "Template",
    path: ["Style Guide ", "Licenses ", "Changelog"],
  },
];

interface Icommon {
  id: number;
  text: string;
  icon: StaticImageData;
}
interface Isocial {
  id: number;
  mean: StaticImageData;
  common: Icommon[];
}

interface IcartData {
  id: number;
  title: string;
  social: Isocial[];
}
const cardData: IcartData = [
  {
    id: 1,
    title: "Let's Talk",
    social: [
      { id: 1, mean: facebook },
      { id: 2, mean: tweeter },
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

const Footer = () => {
  return (
    <div className="bg-productHives-colorGrey">
      <div className="max-w-screen-2xl mx-auto px-10">
        <MainLogo logo="footer" />
        <FooterGridSection />
      </div>
    </div>
  );
};

export default Footer;

const Card = () => {
  return (
    <div className="rounded-xl overflow-hidden p-10 bg-productHives-lightYellow  relative z-30">
      <div className="flex items-center flex-col">
        {cardData?.map((cardItem) => (
          <div key={cardItem.id}>
            <h1 className="text-3xl font-bold">{cardItem.title}</h1>
            <div className="flex flex-col justify-center py-10">
              {cardItem.common?.map((iconList) => (
                <div
                  className="flex items-center text-3xl py-5"
                  key={iconList.id}
                >
                  <Image src={iconList.icon} alt="icons_" className="size-7" />
                  <p>{iconList.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        <Image src={letsTalkImage} alt="card_image_" className="z-20" />
        <div className="bg-productHives-buttonColor rounded-full absolute -top-1 -right-1  w-1/2 h-2/3 -z-10"></div>
      </div>
    </div>
  );
};

const FooterGridSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-5">
      <div className="flex flex-col">
        <Card />

        <ButtonPills text="Buy Template" />
      </div>
      <div>
        <FooterSectionTwo />
      </div>
    </div>
  );
};

const FooterSectionTwo = () => {
  return (
    <>
      <div className="">
        {routeData?.map((listRoute) => (
          <div key={listRoute.id} className=" ">
            <h1 className="font-bold text-2xl"> {listRoute.head}</h1>

            <ul className="">
              <li className="text-xl">{listRoute.path}</li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};
