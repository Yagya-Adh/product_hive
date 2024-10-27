"use client";
import Image from "next/image";
import ArrowButton from "../button/ArrowButton";
const SliderCard = () => {
  const clickHandle = () => {
    return alert("click");
  };
  return (
    <section className="bg-white rounded-xl text-productHives-TextSecondary">
      <article className="grid grid-cols-2 px-10 relative overflow-hidden p-10 z-20">
        <p className="text-productHives-TextSecondary text-4xl max-w-screen-sm font-bold">
          &ldquo;We&apos;re delighted with it. This is utterly fantastic! I
          enjoy it more with each passing day because it makes my daily tasks so
          much simpler&ldquo;
        </p>
        <div className="flex flex-col justify-center items-end">
          <div className="bg-productHives-buttonColor rounded-full flex items-start">
            <Image
              src="/assets/images/slider/emilyImage.png"
              alt="slider_"
              className="object-center object-cover"
              width={180}
              height={180}
            />
          </div>
        </div>
      </article>
      <div className="absolute top-1 -right-1 z-10">
        <Image
          height={160}
          width={160}
          className=""
          alt="cardWaterMark_"
          src="https://cdn.prod.website-files.com/661e1bd626e15bec7b70a970/6624c2b4d1360a25b9913be4_bg-element-services-feature.svg"
        />
      </div>
      <article className="grid grid-cols-2 items-center px-10 relative overflow-hidden z-20 p-5">
        <aside className="relative flex items-center justify-center ">
          <Image
            src="/assets/images/slider/coat.svg"
            alt="DoubkeCot_"
            className="mx-2"
            width={70}
            height={70}
          />
          <h1 className="text-productHives-TextSecondary font-bold text-3xl flex flex-col items-center">
            Emily Johnson
            <span className="font-light text-2xl">Marketing Director</span>
          </h1>
        </aside>
        <div className="flex flex-col items-end justify-center ">
          <ArrowButton variant="double-arrow" clickHandle={clickHandle} />
        </div>
      </article>
    </section>
  );
};

export default SliderCard;
