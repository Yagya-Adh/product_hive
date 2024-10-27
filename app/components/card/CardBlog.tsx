import Image from "next/image";
import blogData from "@/blogData.json";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const data = blogData;

const CardBlog = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 my-5">
      <div className="grid  grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {data?.map((list) => (
          <article key={list.id}>
            <div className="rounded-t-xl overflow-hidden flex flex-col justify-center">
              <Image
                src={list.image}
                alt="/blog_card_"
                width={600}
                height={600}
                className="
                w-full
                scale-100 
                hover:scale-110 
                ease-linear 
                duration-500 
                transition-all"
              />
            </div>
            <span className="text-sm text-productHives-gray">
              {list.blogCreate}
            </span>

            <h1 className="text-xl text-black font-bold py-3">{list.title}</h1>
            <h2 className="text-xl text-productHives-gray font-bold py-2">
              {list.describe}
            </h2>

            <button
              className="
            flex 
             
            font-bold 
            text-productHives-mainBackground 
            items-center
            "
            >
              <span className="me-2">Learn More</span>{" "}
              <ArrowRightIcon
                className="              
                size-6
                p-1
              text-productHives-mainBackground
              bg-productHives-buttonColor
              rounded-full 
               translate-x-0 
               hover:translate-x-3 
               ease-in-out 
               duration-300
               transition-all
            
               "
              />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CardBlog;
