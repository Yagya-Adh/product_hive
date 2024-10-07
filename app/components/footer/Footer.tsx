"use client";
import MainLogo from "../mainLogo/MainLogo";
import ButtonPills from "../button/ButtonPills";

import FooterCard from "./FooterCard";
interface IrouteData {
  id: number;
  head: string;
  path: string[];
}
const routeData: IrouteData[] = [
  {
    id: 1,
    head: "",
    path: [
      "Pages",
      "Home V1",
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
    head: "",
    path: [
      "More Pages",
      "Pricing",
      "Career",
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
    head: "",
    path: ["Template", "Style Guide ", "Licenses ", "Changelog"],
  },
];

const Footer = () => {
  return (
    <div className="bg-productHives-colorGrey">
      <div className="max-w-screen-2xl mx-auto px-10">
        <FooterGridSection />
      </div>
    </div>
  );
};

export default Footer;

const FooterGridSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className="p-10">
        <div className="py-2">
          <MainLogo logo="footer" />
        </div>
        <div className="py-2">
          <FooterCard />
        </div>
        <div className="py-2">
          <ButtonPills text="Buy Template" />
        </div>
      </div>

      <FooterSectionTwo />
    </div>
  );
};

const FooterSectionTwo = () => {
  return (
    <>
      <div className=" flex flex-row border-red-300 justify-items-center ">
        {routeData?.map((listRoute) => (
          <div className=" text-xl p-1" key={listRoute.id}>
            {listRoute.path}
          </div>
        ))}
      </div>
    </>
  );
};
