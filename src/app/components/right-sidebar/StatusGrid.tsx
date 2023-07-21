import React from "react";

export default function StatusGrid() {
  return (
    <div className="flex flex-col w-full gap-y-1 rounded-2xl overflow-hidden">
      <div className="flex h-[96px] gap-x-1">
        <div className="flex-1 bg-sky-200"></div>
        <div className="flex-1 bg-sky-200"></div>
        <div className="flex-1 bg-sky-200"></div>
      </div>
      <div className="flex h-[96px] gap-x-1">
        <div className="flex-1 bg-sky-200"></div>
        <div className="flex-1 bg-sky-200"></div>
        <div className="flex-1 bg-sky-200"></div>
      </div>
    </div>
  );
}
