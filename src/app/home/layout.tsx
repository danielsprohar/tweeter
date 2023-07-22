import { Metadata } from 'next';
import React from 'react';
import ComposeTweet from '../components/ComposeTweet';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/right-sidebar/RightSidebar';

export const metadata: Metadata = {
  title: 'Home | Tweeter',
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LeftSidebar />
      <main className="p-2">
        <h1 className="text-xl mb-4 font-semibold">Home</h1>
        <ComposeTweet />
        <div>{children}</div>
      </main>
      <RightSidebar />
    </>
  );
}
