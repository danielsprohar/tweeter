import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tweeter',
  description: 'Another Twitter clone',
  keywords: 'Twitter clone, Next.js, JavaScript, Supabase',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-full flex justify-center items-center relative">
          <div className="max-w-screen-xl w-full h-full flex relative">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
