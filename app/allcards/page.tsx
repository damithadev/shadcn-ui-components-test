import React from "react";
import { NewCard } from "../../components/card/newcard";

const AllCards = () => {
  return (
    <div className="mx-20 my-10 flex flex-wrap gap-8 justify-center">
      <NewCard />
      <NewCard />
      <NewCard />
      <NewCard />
      <NewCard />
      <NewCard />
      <NewCard />
      <NewCard />
    </div>
  );
};

export default AllCards;
