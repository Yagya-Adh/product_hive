"use client";
import React, { useState } from "react";
import ButtonPills from "../button/ButtonPills";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Modal from "../modal/Modal";
import MainLogo from "../mainLogo/MainLogo";
import Link from "next/link";

interface Iroutes {
  id: number;
  path: string;
  name: string;
}
const routes: Iroutes[] = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "service", name: "Service" },
  { id: 3, path: "about", name: "About" },
  { id: 4, path: "page", name: "Page" },
];

const NavBar = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const handelCartOpen = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div className="">
      <nav className="max-w-screen-2xl mx-auto px-5 relative">
        <div className="rounded-full z-10 border border-green-800 shadow-2xl flex justify-between items-center py-1 px-10 bg-transparent">
          <MainLogo logo="nav" />

          <div className="flex justify-between items-center bg-transparent py-3">
            <ul className="hidden lg:flex text-2xl items-center">
              {routes?.map((linkList) => (
                <li className="text-white mx-8" key={linkList.id}>
                  <Link href={linkList.path}>{linkList.name}</Link>
                </li>
              ))}
            </ul>
            <ButtonPills text="Buy Template" />

            <span className="text-2xl text-white" onClick={handelCartOpen}>
              Cart (0 )
            </span>

            <Bars3Icon className="size-10 text-green-700 lg:hidden" />
          </div>
        </div>
      </nav>
      {cartOpen && (
        <div className="absolute top-0 right-0 inset-0 w-full z-20">
          <Modal handlePopUp={handelCartOpen} />
        </div>
      )}
    </div>
  );
};

export default NavBar;
