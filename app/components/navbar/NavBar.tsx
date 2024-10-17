"use client";
import React, { useState } from "react";
import ButtonPills from "../button/ButtonPills";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
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
  const [open, setOpen] = useState(false);
  const handelCartOpen = () => {
    setCartOpen(!cartOpen);
  };
  const handleOpenNavBar = () => {
    return setOpen(!open);
  };
  return (
    <>
      <nav>
        <div className="z-40 rounded-full bg-productHives-mainBackground   border border-transparent shadow-2xl flex justify-between items-center max-w-screen-2xl p-2 px-4 mx-auto">
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
              {open ? (
                <XMarkIcon
                  onClick={handleOpenNavBar}
                  className="size-10 text-productHives-buttonColor lg:hidden"
                />
              ) : (
                <Bars3Icon
                  onClick={handleOpenNavBar}
                  className="size-10 text-productHives-buttonColor lg:hidden"
                />
              )}
            </div>
          </div>
        </div>
        <div
          className={` z-10 ${
            !open
              ? " -translate-y-96 transition-all ease-in-out duration-500 bg-none overflow-hidden"
              : "translate-y-1 transition-all ease-in-out duration-500 py-10  rounded-2xl"
          } `}
        >
          <ul className="flex flex-col py-4 lg:hidden rounded-2xl bg-white text-productHives-mainBackground">
            {routes?.map((linkList) => (
              <Link href={linkList.path} key={linkList.id}>
                <li className="text-xl ps-5 py-2">{linkList.name}</li>
              </Link>
            ))}

            <div>
              <ButtonPills text="Buy Template" />
            </div>
          </ul>
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
