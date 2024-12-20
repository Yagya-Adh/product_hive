import Image from "next/image";
import productOwnerData from "@/productOwnerData.json";

interface IProductOwnerData {
  id: number;
  title: string;
  image: string;
}
const ProductOwnerData: IProductOwnerData[] = productOwnerData;

const ProductOwner = () => {
  return (
    <>
      <section className="bg-productHives-ProductOwner">
        <div className="max-w-screen-2xl mx-auto py-60 px-10">
          <article className="flex items-center">
            <h1 className="text-6xl max-w-screen-xl font-semibold capitalize text-center py-20 px-10 mx-auto">
              Product owner is a key to
              <span className="text-productHives-buttonColor capitalize">
                {"    "}
                maximizing the value{"   "}
              </span>
              of your product
            </h1>
          </article>
          <aside className="grid grid-cols-3 gap-10 py-20">
            {ProductOwnerData?.map((productList) => (
              <div
                className="flex flex-col justify-between items-center rounded-xl bg-productHives-mainBackground py-10"
                key={productList.id}
              >
                <Image
                  src={productList.image}
                  alt="product_"
                  width={120}
                  height={100}
                  className="object-contain object-center"
                />

                <h1 className="text-white text-2xl ">{productList.title}</h1>
              </div>
            ))}
          </aside>
        </div>
      </section>
    </>
  );
};

export default ProductOwner;
