"use client";
import Image from "next/image";

const productData = [
  {
    id: 1,
    title: "Client Needs Anticipation",
    image: "/assets/images/productManage/client.webp",
    description:
      "The Product Owner is an expert at understanding and anticipating the client’s needs to more effectively manage the development process.",
  },

  {
    id: 2,
    title: "Efficient resource management",
    image: "/assets/images/productManage/efficent.png",
    description:
      "Our Product Managers respond quickly to new and changing requirements with a clear understanding of the costs.",
  },

  {
    id: 3,
    title: "Reduced risks",
    image: "/assets/images/productManage/reduced.png",
    description:
      "One of the Product Manager’s tasks is gathering feedback, looking at metrics and delivering value to customers to reduce the risk of product failure.",
  },

  {
    id: 4,
    title: "Empowered independent decision making",
    image: "/assets/images/productManage/empowered.webp",
    description:
      "Product Managers collaborate with the engineering team to deliver work in time creating an environment that facilitates the decision making process.",
  },
];
const ProductManagement = () => {
  return (
    <div className="bg-productHives-mainBackground ">
      <div className="mx-auto max-w-screen-2xl px-5 py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10  py-20 px-10 items-center">
          <h1 className="text-6xl text-white">
            Why you should choose our{" "}
            <span className="text-productHives-buttonColor">
              Product Management{" "}
            </span>
            consulting services?
          </h1>

          <p className="text-2xl text-white">
            Our product management consultants are experts in their respected
            skills. Not only do they deliver but they uplift your entire
            organization as they go:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl gap-10 overflow-hidden items-center">
          {productData?.map((product) => (
            <div
              className="h-full flex flex-col justify-center md:flex-row md:justify-between lg:grid-cols-2 lg:grid  rounded-2xl gap-10 overflow-hidden items-center p-5 bg-white"
              key={product.id}
            >
              <Image
                className="rounded-2xl"
                alt="product_manager"
                src={product.image}
                height={400}
                width={400}
              />
              <div>
                <h1 className="text-productHives-buttonColor font-bold text-xl">
                  {product.title}
                </h1>

                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
