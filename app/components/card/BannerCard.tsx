"use client";

// const dataBanner = [
//   {
//     id: 1,
//     title: "Expert Consultancy",
//     slug: "Access guidance from seasoned professionals, ensuring strategic insights.",
//   },

//   {
//     id: 2,
//     title: "Proven Track Record",
//     slug: "Benefit from our history of successful projects and satisfied clients, showcasing our commitment.",
//   },

//   {
//     id: 3,
//     title: "Transparency & Communication",
//     slug: "Experience clear communication and transparency throughout our collaboration, fostering trust.",
//   },
// ];

interface IBannerCard {
  variant?: string | "building" | "default-home";
}
const BannerCard = ({ variant }: IBannerCard) => {
  if (variant == "building") {
    return (
      <>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-4 rounded-2xl items-center p-10 border bg-white">
          <p className="text-xl lg:text-5xl font-semibold max-w-screen-lg">
            Our versatile business solutions
            <span className="text-productHives-buttonColor">
              & expert services
            </span>
          </p>

          <p className="max-w-screen-sm lg:text-xl">
            Discover our services, from enhancing your digital footprint to
            developing growth strategies, integrating tech solutions, and
            offering expert advice for your business&apos;s success.
          </p>
        </div>
      </>
    );
  }
  if (variant == "default-home") {
    return (
      <>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-4 rounded-2xl items-center p-10 border bg-white">
          <p className="text-xl lg:text-5xl font-semibold max-w-screen-lg">
            Building trust on our key features
          </p>

          <p className="max-w-screen-sm lg:text-xl">
            The majority of new digital products fail, with 35% falling short
            due to a lack of market need. These failings stem from a lack of
            market and user research. With ProductHive, you can validate your
            idea and boost your chances of successful product launch.
          </p>
        </div>
      </>
    );
  }
};
export default BannerCard;

/* 


"use client";

const dataBanner = [
  {
    id: 1,
    title: "Expert Consultancy",
    slug: "Access guidance from seasoned professionals, ensuring strategic insights.",
    image: "",
  },

  {
    id: 2,
    title: "Proven Track Record",
    slug: "Benefit from our history of successful projects and satisfied clients, showcasing our commitment.",
    image: "",
  },

  {
    id: 3,
    title: "Transparency & Communication",
    slug: "Experience clear communication and transparency throughout our collaboration, fostering trust.",
    image: "",
  },
];

interface IBannerCard {
  variant?: string | "building";
}
const BannerCard = ({ variant }: IBannerCard) => {
  if (variant == "building") {
    return (
      <>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-4 rounded-2xl items-center p-10 border bg-white">
          <p className="text-xl lg:text-5xl font-semibold max-w-screen-lg">
            Building trust on our key features
          </p>

          {dataBanner?.map((banner) => (
            <div key={banner.id}>
              <h1 className="text-xl font-bold">{banner.title}</h1>
              <p>{banner.slug}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
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



*/
