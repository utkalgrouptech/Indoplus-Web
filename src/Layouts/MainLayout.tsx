import React, { ReactElement } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ResponsiveNaveBar from "./ResponsiveNavBar";
import Head from "next/head";

type Prop = {
  title?: string;
  children: ReactElement | ReactElement[];
  
};

export default function MainLayout({ children }: Prop) {
  return (
    <>
   <Head>
      <link rel="icon" href="./indo.png "></link> 
    </Head>
      <header className="sticky top-0 z-50 bg-white shadow-md"> 
        <Header />
      </header>

      <ResponsiveNaveBar/>
      <main>{children}</main>
      <Footer />
    </>
  );
}
