"use client";
import Image, { StaticImageData } from "next/image";
import MainLogo from "../mainLogo/MainLogo";
import letsTalkImage from "../../assets/footer/talk.webp";
import ButtonPills from "../button/ButtonPills";
import { title } from "process";
const Footer = () => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-2xl mx-auto px-10">
        <MainLogo />

        <div className="grid grid-cols-2 gap-40 items-center">
          <Card />

          <ButtonPills text="Buy Template" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

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
  socaial: Isocial[];
}
const cardData: IcartData = [
  {
    id: 1,
    title: "Let's Talk",
    social: [
      { id: 1, mean: "" },
      { id: 2, mean: "" },
      { id: 3, mean: "" },
      { id: 4, mean: "" },
    ],
    common: [
      { id: 1, text: "hello@product-hive.com", icon: "" },
      { id: 2, text: "+01222 222 222", icon: "" },
      { id: 3, text: "Edmonton, Canada", icon: "" },
    ],
  },
];

const Card = () => {
  return (
    <div className=" rounded-xl overflow-hidden ">
      <div className="z-10">
        <h1 className="text-2xl">Let's Talk</h1>
      </div>
      <Image src={letsTalkImage} alt="card_image_" className="" />
    </div>
  );
};
