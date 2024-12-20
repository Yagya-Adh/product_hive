import Image from "next/image";
import ButtonPills from "../button/ButtonPills";
const gridCardData = [
  {
    id: 1,
    image: "/assets/images/about/meetOurTeams/seniorPartner.webp",
    name: "Chris Rachuba",
    title: "CEO, Founder",
  },
  {
    id: 2,
    image: "/assets/images/about/meetOurTeams/seniorPartner.webp",
    name: "Colleen Baum",
    title: "Senior Partner",
  },
  {
    id: 3,
    image: "/assets/images/about/meetOurTeams/Sranalyst.webp",
    name: "Aditya Sanghvi",
    title: "Senior Analyst",
  },
  {
    id: 4,
    image: "/assets/images/about/meetOurTeams/SrAssociate.webp",
    name: "Rob Palter",
    title: "Senior Associate",
  },
];
const MeetOurTeam = () => {
  return (
    <section className="bg-productHives-mainBackground">
      <div className="max-w-screen-2xl mx-auto px-20 py-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
          <aside className="sticky top-10 z-40">
            <article className="p-10">
              <h1
                className="
              text-productHives-buttonColor 
              font-bold 
              text-6xl 
              py-10"
              >
                {" Meet Our teams"}
              </h1>
              <ButtonPills
                variant="button-outline"
                text="See Opening Jobs"
                padding="px-10"
              />
            </article>
          </aside>
          <aside>
            <GridImageCard />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;

const GridImageCard = () => {
  return (
    <article className="grid-cols-2 grid gap-10">
      {gridCardData?.map((listGrid) => (
        <div key={listGrid.id}>
          <Image
            src={listGrid.image}
            alt="grid_card_"
            width={400}
            height={400}
            className="rounded-xl"
          />

          <summary className="py-5 text-white">
            <h1 className="text-2xl font-bold">{listGrid.name}</h1>
            <h3 className="text-xl">{listGrid.title}</h3>
          </summary>
        </div>
      ))}
    </article>
  );
};
