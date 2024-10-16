"use client";
import React from "react";
import ButtonPills from "../button/ButtonPills";

const ApplyForThisRole = () => {
  return (
    <div className="bg-white w-1/3">
      <form onSubmit={() => alert("submitted form")}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Full name" />
        </div>

        <div>
          <label htmlFor="email">Email Address</label>
          <input type="text" id="email" placeholder="hello@example.com..." />
        </div>
        <div>
          <label htmlFor="currentCompany">Current company</label>
          <input
            type="text"
            id="currentCompany"
            placeholder="Current company name"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" placeholder="Phone number" />
        </div>

        <div>
          <label htmlFor="linkedinLink">Linkedin (optional)</label>
          <input
            type="text"
            id="linkedinLink"
            placeholder="Your linkedin profile link"
          />
        </div>

        <div>
          <label htmlFor="linkedinText">Linkedin (optional)</label>
          <input type="text" id="linkedinText" placeholder="Example Text" />
        </div>
        <ButtonPills text="Apply For This Role" />
      </form>
    </div>
  );
};

export default ApplyForThisRole;
