import MainBainner from "./assets/banner/MainBainner";
import ProductOwner from "./components/banner/ProductOwner";
import Footer from "./components/footer/Footer";
export default function Home() {
  return (
    <>
      {/* <div className="bg-productHives-mainBackground pt-10 pb-40"></div> */}
      <MainBainner />
      <ProductOwner />
      <Footer />
    </>
  );
}
