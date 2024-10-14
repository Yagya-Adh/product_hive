"use client";

import React from "react";
import ButtonPills from "../button/ButtonPills";

const ContactUsForm = () => {
  return (
    <form>
      <div>
        <h1 className="font-bold text-6xl">Contact Us</h1>

        <div className="flex py-4 text-xl justify-between items-center">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              className="border rounded-full p-2 focus:outline-none"
              type="text"
              id="firstName"
              placeholder="First Name"
            />
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              className="border rounded-full p-2 focus:outline-none"
              type="text"
              id="lastName"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="flex py-4 text-xl justify-between items-center">
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="border rounded-full p-2 focus:outline-none"
              type="text"
              id="email"
              placeholder="Email address"
            />
          </div>

          <div>
            <label htmlFor="phoneNumber">Phone number</label>
            <input
              className="border rounded-full p-2 focus:outline-none"
              type="text"
              id="phoneNumber"
              placeholder="Phone number"
            />
          </div>
        </div>

        <div className="flex flex-col py-4 text-xl justify-between ">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Write your message"
            rows={6}
            className="focus:outline-none border rounded-2xl p-2"
          ></textarea>
        </div>
      </div>

      <ButtonPills text="Send Inquiry" />
    </form>
  );
};

export default ContactUsForm;
