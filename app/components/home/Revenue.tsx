"use client";
import CustomTextBanner from "../banner/CustomTextBanner";
import SliderCard from "../card/SliderCard";
interface IRevenue {
  topCardShow: string | "show" | "hide";
}
const Revenue = ({ topCardShow }: IRevenue) => {
  return (
    <div className="bg-productHives-mainBackground relative">
      <div className="max-w-screen-2xl mx-auto px-10 py-40 relative">
        {topCardShow == "show" ? (
          <div className="absolute -top-72">
            <SliderCard />
          </div>
        ) : (
          ""
        )}
        <CustomTextBanner
          preText="Revenue enablement that"
          highlightText="customers love"
          textColor="white"
          buttonGroup={true}
          buttonGroupText="Lets Work Together"
          buttonGroupTextTwo="Book A Call"
          pathRedirect="/career"
          pathRedirectOne="/contact"
        />
      </div>
    </div>
  );
};

export default Revenue;
