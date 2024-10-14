"use client";
import Image from "next/image";
import Link from "next/link";
import fourOFourPageNotFoundImage from "@/app/assets/404-pageNOtFound.svg";
import NavBar from "./components/navbar/NavBar";
import CustomTextBanner from "./components/banner/CustomTextBanner";
import ButtonPills from "./components/button/ButtonPills";
import Footer from "./components/footer/Footer";
import Revenue from "./components/home/Revenue";
const PageNotFound = () => {
  return (
    <div className="bg-productHives-colorGrey">
      <div className="max-w-screen-2xl px-10 mx-auto">
        <div className="bg-productHives-mainBackground rounded-full">
          <NavBar />
        </div>

        <div className="flex justify-center items-center flex-col p-40">
          <Image
            src={fourOFourPageNotFoundImage}
            alt="404_page_not_found"
            className=""
          />
          <CustomTextBanner
            preText=""
            highlightText="We lost "
            postText=" that page..."
            description="Sorry, the page you are looking for doesn’t exit or has been moved."
          />
          <Link href="/">
            <ButtonPills text="Back to Home" />
          </Link>
        </div>
      </div>

      <Revenue topCardShow="hide" />
      <Footer />
    </div>
  );
};

export default PageNotFound;
