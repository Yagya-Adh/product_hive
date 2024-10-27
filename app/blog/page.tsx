import MainBanner from "../components/banner/MainBanner";
import CardGroupBlog from "../components/card/CardGroupBlog";
import Revenue from "../components/home/Revenue";

const Blog = () => {
  return (
    <>
      <MainBanner variant="blog" />

      <CardGroupBlog />

      <div className="bg-productHives-mainBackground py-10">
        <Revenue topCardShow="hide" />
      </div>
    </>
  );
};

export default Blog;
