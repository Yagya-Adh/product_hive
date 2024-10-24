"use client";
import Image from "next/image";
import Link from "next/link";
import navLogoImage from "@/public/assets/homeLogo.svg";
import footerLogoImage from "@/public/assets/footerLogo.svg";

interface IPropFooter {
  logo?: string | "footer" | "nav";
}

const MainLogo = ({ logo }: IPropFooter) => {
  if (logo == "footer") {
    return (
      <div className="flex items-center">
        <Link href="/">
          <Image src={footerLogoImage} alt="home_logo" className="" />
        </Link>
      </div>
    );
  }

  if (logo == "nav") {
    return (
      <div className="flex items-center">
        <Link href="/">
          <Image src={navLogoImage} alt="home_logo" className="" />
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <Link href="/">
        <Image src={navLogoImage} alt="home_logo" className="" />
      </Link>
    </div>
  );
};

export default MainLogo;
