import React from "react";
import Prophet from "./Prophet";

interface Prophet {
  username: string;
  handle: string;
}

const PROPHETS: Prophet[] = [
  { username: "Alice", handle: "alice" },
  { username: "Bob", handle: "bob" },
  { username: "Foo", handle: "foo" },
];

export default function SuggestedProphets() {
  return (
    <div className="rounded-2xl overflow-hidden flex flex-col dark:bg-white/10 bg-silver">
      <div className="p-3">
        <h2 className="text-lg font-bold">You might like</h2>
      </div>
      <div data-testid="prophets" className="flex flex-col gap-y-4 px-3 py-2">
        {PROPHETS.map((prophet) => (
          <Prophet
            key={prophet.username}
            username={prophet.username}
            handle={prophet.handle}
          />
        ))}
      </div>
      <div
        role="button"
        className="p-3 dark:text-blue-500 text-blue-700 dark:hover:bg-white/10  hover:bg-black/10 cursor-pointer"
      >
        Show more
      </div>
    </div>
  );
}
