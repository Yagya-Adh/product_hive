import MainBanner from "./components/banner/MainBanner";
import ProductOwner from "./components/banner/ProductOwner";
import FeautreRequest from "./components/home/FeautreRequest";
import PreSegment from "./components/home/PreSegment";
import ProductManagement from "./components/home/ProductManagement";
import Revenue from "./components/home/Revenue";
export default function Home() {
  return (
    <>
      <MainBanner variant="home" />
      <ProductOwner />
      <PreSegment />
      <ProductManagement />
      <FeautreRequest />
      <Revenue topCardShow="show" />
    </>
  );
}
