import MainBainner from "./assets/banner/MainBainner";

export default function Home() {
  return (
    <>
      <div className="bg-productHives-mainBackground pt-10 pb-40">
        <MainBainner />
        <div className="mx-auto max-w-screen-2xl px-10 relative ">
          <BannerCard />
        </div>
      </div>
    </>
  );
}

const BannerCard = () => {
  return (
    <>
      <div className="grid grid-cols-2 rounded-2xl items-center p-10 border   top-10 bg-white">
        <p className="text-7xl">
          Worried about the 95% failure rate of new digital products? We can
          help you succeed.
        </p>

        <p className=" max-w-screen-sm px-10 text-3xl ">
          The majority of new digital products fail, with 35% falling short due
          to a lack of market need. These failings stem from a lack of market
          and user research. With ProductHive, you can validate your idea and
          boost your chances of successful product launch.
        </p>
      </div>
    </>
  );
};
