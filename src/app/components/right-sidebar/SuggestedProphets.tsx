import React from "react";

export default function SuggestedProphets() {
  return (
    <div className="rounded-2xl overflow-hidden flex flex-col dark:bg-white/10 bg-black/10">
      <div className="p-3">
        <h2 className="text-lg font-bold">You might like</h2>
      </div>
      {/* TODO: Create Prophet component */}
      <div data-testid="prophets"></div>
      <div className="p-3 dark:text-blue-500 text-blue-700 dark:hover:bg-white/10  hover:bg-black/10 cursor-pointer">
        Show more
      </div>
    </div>
  );
}
