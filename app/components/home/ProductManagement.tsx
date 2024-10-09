"use client";
import clientImage from "@/app/assets/images/productManage/client.webp";
import effiecientImage from "@/app/assets/images/productManage/efficent.png";
import reducedImage from "@/app/assets/images/productManage/reduced.png";
import empowerImage from "@/app/assets/images/productManage/empowered.webp";
import Image from "next/image";

const productData = [
  {
    id: 1,
    title: "Client Needs Anticipation",
    image: clientImage,
    description:
      "The Product Owner is an expert at understanding and anticipating the client’s needs to more effectively manage the development process.",
  },

  {
    id: 2,
    title: "Efficient resource management",
    image: effiecientImage,
    description:
      "Our Product Managers respond quickly to new and changing requirements with a clear understanding of the costs.",
  },

  {
    id: 3,
    title: "Reduced risks",
    image: reducedImage,
    description:
      "One of the Product Manager’s tasks is gathering feedback, looking at metrics and delivering value to customers to reduce the risk of product failure.",
  },

  {
    id: 4,
    title: "Empowered independent decision making",
    image: empowerImage,
    description:
      "Product Managers collaborate with the engineering team to deliver work in time creating an environment that facilitates the decision making process.",
  },
];
const ProductManagement = () => {
  return (
    <div className="bg-productHives-mainBackground p-20">
      <div className="mx-auto max-w-screen-2xl px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <h1 className="text-5xl text-white">
            Why you should choose our
            <span className="text-productHives-buttonColor">
              Product Management
            </span>
            consulting services?
          </h1>

          <p className="text-2xl text-white">
            Our product management consultants are experts in their respected
            skills. Not only do they deliver but they uplift your entire
            organization as they go:
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 bg-white">
          {productData?.map((product) => (
            <div key={product.id}>
              <Image className="" alt="" src={product.image} />
              <h1>{product.title}</h1>

              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
