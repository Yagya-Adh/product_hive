import MainBanner from "./components/banner/MainBanner";
import ProductOwner from "./components/banner/ProductOwner";
import FeautreRequest from "./components/home/FeautreRequest";
import HomeCardGroup from "./components/home/HomeCardGroup";
import ProductManagement from "./components/home/ProductManagement";
import Revenue from "./components/home/Revenue";
export default function Home() {
  return (
    <>
      <MainBanner variant="home" />
      <ProductOwner />
      <HomeCardGroup />
      <ProductManagement />
      <FeautreRequest />
      <Revenue topCardShow="show" />
    </>
  );
}
