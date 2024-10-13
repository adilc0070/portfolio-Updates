import type { Metadata } from "next"
import { Montserrat } from 'next/font/google';
import "./globals.css";
import ProfileHeader from "@/components/header";

export const metadata: Metadata = {
  title: "Adil C Web Developer",
  description: "Adil C Web Developer  MERN DJango Flutter ",
};
const inter = Montserrat({ subsets: ["latin"] ,display: "swap" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body >

        <ProfileHeader name="Adil C" description="Web developer" profileImage="/images/adilc.png" />

        <div className="mt-3 border-2 rounded-lg">
          <div className="flex flex-col items-center justify-center">
            <main className="flex flex-col items-center justify-center w-full flex-1  text-center">
              {children}
            </main>

          </div>
        </div>
      </body>
    </html>
  );
}