import MainBainner from "./components/banner/MainBainner";
import ProductOwner from "./components/banner/ProductOwner";
import Footer from "./components/footer/Footer";
import FeautreRequest from "./components/home/FeautreRequest";
import PreSegment from "./components/home/PreSegment";
import ProductManagement from "./components/home/ProductManagement";
import Revenue from "./components/home/Revenue";
export default function Home() {
  return (
    <>
      {/* <div className="bg-productHives-mainBackground pt-10 pb-40"></div> */}
      <MainBainner />
      <ProductOwner />
      <PreSegment />
      <ProductManagement />
      <FeautreRequest />
      <Revenue />
      <Footer />
    </>
  );
}
