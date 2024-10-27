import React from "react";
import PillTabs from "../tabs/PillTabs";
import CardBlog from "./CardBlog";

const CardGroupBlog = () => {
  return (
    <div className="mx-auto max-w-screen-2xl px-10 py-10">
      <PillTabs />
      <CardBlog />
    </div>
  );
};

export default CardGroupBlog;
