"use client";
import Image, { StaticImageData } from "next/image";
import defineVision from "@/app/assets/product_owner/define.svg";
import customerSatisfraction from "@/app/assets/product_owner/customer.svg";
import measureSuccess from "@/app/assets/product_owner/measure.svg";

interface IProductOwnerData {
  id: number;
  title: string;
  image: StaticImageData;
}
const ProductOwnerData: IProductOwnerData[] = [
  { id: 1, title: "Defining the Vision", image: defineVision },
  { id: 1, title: "Customer satisfaction", image: customerSatisfraction },
  { id: 1, title: "Measure Success", image: measureSuccess },
];
const ProductOwner = () => {
  return (
    <>
      <div className="bg-productHives-ProductOwner py-40">
        <div className="max-w-screen-2xl mx-auto px-20">
          <h1 className="text-6xl max-w-screen-sm font-semibold capitalize text-center">
            Product owner is a key to
            <span className="text-productHives-buttonColor capitalize">
              {" "}
              maximizing the{" "}
            </span>
            value of your product
          </h1>
          <div className="grid grid-cols-3 gap-10 py-20">
            {ProductOwnerData?.map((productList) => (
              <div
                className="flex flex-col items-center rounded-xl bg-productHives-mainBackground p-10"
                key={productList.id}
              >
                <Image src={productList.image} alt="product_" className="" />

                <h1 className="text-white text-2xl text-center py-5">
                  {productList.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductOwner;
