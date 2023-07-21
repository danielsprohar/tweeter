import React from "react";
import CreateTweet from "./components/CreateTweet";

export default function Page() {
  return (
    <div>
      <h1 className="text-xl mb-4 font-semibold">Home</h1>
      <CreateTweet />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
        commodi libero totam temporibus perferendis modi rem, veritatis corrupti
        sint maxime voluptate eaque ducimus, quod harum non ratione in, labore
        accusamus?
      </p>
    </div>
  );
}
