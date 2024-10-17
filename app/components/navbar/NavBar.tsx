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
    <>
      <nav>
        <div className="rounded-full bg-productHives-mainBackground z-10 border border-transparent shadow-2xl flex justify-between items-center max-w-screen-2xl p-2 px-4 mx-auto">
          <MainLogo logo="nav" />
          <div className="flex justify-between items-center bg-transparent rounded-full">
            <ul className="hidden lg:flex items-center">
              {routes?.map((linkList) => (
                <li className="text-white  mx-8" key={linkList.id}>
                  <Link href={linkList.path}>{linkList.name}</Link>
                </li>
              ))}

              <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between p-0 m-0">
                <button className="text-white mx-8" onClick={handelCartOpen}>
                  Cart (0 )
                </button>
                <ButtonPills
                  text="Buy Template"
                  padding="px-4"
                  variant="button-default"
                />
              </div>
            </ul>
            <div className="flex items-center justify-between">
              <span className="text-white lg:hidden" onClick={handelCartOpen}>
                Cart (0 )
              </span>

              <Bars3Icon className="size-10 text-green-700 lg:hidden" />
            </div>
          </div>
        </div>
      </nav>
      {cartOpen && (
        <div className="absolute top-0 right-0 inset-0  z-40">
          <Modal handlePopUp={handelCartOpen} />
        </div>
      )}
    </>
  );
};

export default NavBar;
