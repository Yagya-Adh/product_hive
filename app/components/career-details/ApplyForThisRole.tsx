"use client";
import React from "react";
import ButtonPills from "../button/ButtonPills";

const ApplyForThisRole = () => {
  return (
    <div className="bg-productHives-colorGrey">
      <form onSubmit={() => alert("submitted form")}>
        <div className="bg-white w-2/3 h-full flex flex-col text-productHives-mainBackground py-4 rounded-2xl px-4">
          <h1 className="text-2xl font-bold py-2">Apply for this role</h1>
          <div className="flex flex-col">
            <label className="text-2xl py-2 font-bold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Full name"
              className="py-3 px-2 focus:outline-none border-transparent focus:border-gray-400 focus:border rounded-xl"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-2xl py-2 font-bold" htmlFor="email">
              Email Address
            </label>
            <input
              className="py-3 px-2 focus:outline-none border-transparent focus:border-gray-400 focus:border rounded-xl"
              type="text"
              id="email"
              placeholder="hello@example.com..."
            />
          </div>
          <div className="flex flex-col">
            <label className="text-2xl py-2 font-bold" htmlFor="currentCompany">
              Current company
            </label>
            <input
              className="py-3 px-2 focus:outline-none border-transparent focus:border-gray-400 focus:border rounded-xl"
              type="text"
              id="currentCompany"
              placeholder="Current company name"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-2xl py-2 font-bold" htmlFor="phone">
              Phone
            </label>
            <input
              className="py-3 px-2 focus:outline-none border-transparent focus:border-gray-400 focus:border rounded-xl"
              type="text"
              id="phone"
              placeholder="Phone number"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-2xl py-2 font-bold" htmlFor="linkedinLink">
              Linkedin (optional)
            </label>
            <input
              className="py-3 px-2 focus:outline-none border-transparent focus:border-gray-400 focus:border rounded-xl"
              type="text"
              id="linkedinLink"
              placeholder="Your linkedin profile link"
            />
          </div>

          <div className="flex flex-col py-4 mb-2">
            <label className="text-2xl py-2 font-bold" htmlFor="linkedinText">
              Linkedin (optional)
            </label>
            <textarea
              rows={6}
              cols={6}
              id="linkedinText"
              placeholder="Example Text"
              className="py-3 px-2 focus:outline-none border-transparent focus:border-gray-400 focus:border rounded-xl"
            ></textarea>
          </div>

          <ButtonPills text="Apply For This Role" />
        </div>
      </form>
    </div>
  );
};

export default ApplyForThisRole;
