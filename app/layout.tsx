import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";
import ProfileHeader from "@/components/header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Adil C Web Developer",
  description: "Adil C Web Developer MERN Django Flutter",
};

const inter = Montserrat({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="max-w-7xl mx-auto h-full flex flex-col justify-center bg-mainBG">
        <ProfileHeader 
          name="Adil C" 
          description="Web developer" 
          profileImage="/images/adilc.png" 
        />
        <NavBar />
        <div className="mt-3 rounded-lg flex justify-center ">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
