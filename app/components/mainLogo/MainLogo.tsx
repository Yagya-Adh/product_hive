"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoImage from "../../assets/homeLogo.svg";

const MainLogo = () => {
  return (
    <div className="flex items-center">
      <Link href="/">
        <Image src={logoImage} alt="home_logo" className="" />
      </Link>
    </div>
  );
};

export default MainLogo;
