"use client";

const BannerCard = () => {
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