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
    head: "Pages",
    path: [
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
    head: "More Pages",
    path: [
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
    head: "Template",
    path: ["Style Guide ", "Licenses ", "Changelog"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-productHives-colorGrey">
      <div className="max-w-screen-2xl mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-10">
          <FooterSectionOne />
          <FooterSectionTwo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const FooterSectionOne = () => {
  return (
    <>
      <aside>
        <div className="py-2">
          <MainLogo logo="footer" />
        </div>
        <article className="py-2">
          <FooterCard />
        </article>
        <div className="py-2">
          <ButtonPills text="Buy Template" />
        </div>
      </aside>
    </>
  );
};

const FooterSectionTwo = () => {
  return (
    <>
      <aside className="flex flex-row justify-between">
        {routeData?.map((listRoute) => (
          <article className=" flex flex-col text-xl p-1" key={listRoute.id}>
            <h1 className="text-2xl font-bold text-productHives-mainBackground">
              {listRoute.head}
            </h1>
            <div className="leading-10 text-productHives-TextSecondary">
              {listRoute.path?.map((item, index) => (
                <h2 key={index}>{item}</h2>
              ))}
            </div>
          </article>
        ))}
      </aside>
    </>
  );
};
