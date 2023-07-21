import { Metadata } from "next";
import React from "react";
import ComposeTweet from "../components/ComposeTweet";

export const metadata: Metadata = {
  title: "Home | Tweeter",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className="text-xl mb-4 font-semibold">Home</h1>
      <ComposeTweet />
      <div>{children}</div>
    </>
  );
}
