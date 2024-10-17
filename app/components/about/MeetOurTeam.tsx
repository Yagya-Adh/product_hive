"use client";

import Image from "next/image";
import ButtonPills from "../button/ButtonPills";
// import ceoImage from "@/app/assets/images/about/meetOurTeams/ceoFounder.webp";
import srPatnerImage from "@/app/assets/images/about/meetOurTeams/seniorPartner.webp";
import srAnalystImage from "@/app/assets/images/about/meetOurTeams/Sranalyst.webp";
import srAssociateImage from "@/app/assets/images/about/meetOurTeams/SrAssociate.webp";

const MeetOurTeam = () => {
  return (
    <div className="bg-productHives-mainBackground">
      <div className="max-w-screen-2xl mx-auto px-20 py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          <div>
            <h1 className="text-productHives-buttonColor font-bold text-6xl py-10">
              {" Meet Our teams"}
            </h1>
            <ButtonPills
              variant="button-outline"
              text="See Opening Jobs"
              padding="px-10"
            />
          </div>
          <div>
            <GridImageCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;

const gridCardData = [
  {
    id: 1,
    image: "/../../assets/images/about/meetOurTeams/seniorPartner.webp",
    name: "Chris Rachuba",
    title: "CEO, Founder",
  },
  {
    id: 2,
    image: srPatnerImage,
    name: "Colleen Baum",
    title: "Senior Partner",
  },
  {
    id: 3,
    image: srAnalystImage,
    name: "Aditya Sanghvi",
    title: "Senior Analyst",
  },
  {
    id: 4,
    image: srAssociateImage,
    name: "Rob Palter",
    title: "Senior Associate",
  },
];
const GridImageCard = () => {
  return (
    <div className="grid-cols-2 grid gap-10">
      {gridCardData?.map((listGrid) => (
        <div key={listGrid.id}>
          <Image
            src={listGrid.image}
            alt="grid_card_"
            width={400}
            height={400}
            className="rounded-xl"
          />

          <div className="py-5 text-white">
            <h1 className="text-2xl font-bold">{listGrid.name}</h1>
            <h3 className="text-xl">{listGrid.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};
