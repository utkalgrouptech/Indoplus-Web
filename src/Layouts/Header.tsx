import React, { useState, useEffect } from "react";
import { navArr } from "@/Utils/index";
import { useRouter } from "next/router";
import { logo, logo1 } from "@/assest/Home";

export default function Header() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  const listenScrollEvent = () => {
    setIsScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
      style={{
        height: isScrolled ? "4rem" : "5rem",
      }}
    >
      <section className="items-center hidden bg-transparent lg:block">
        <section className="flex h-16 items-center justify-between">
          <div className="flex w-full justify-start m-20">
            <img
              src={isScrolled ? logo.src : logo1.src}
              alt="Logo"
              className="h-auto w-48"
            />
          </div>
          <div className="items-center space-x-4 flex mr-11">
  {navArr.map((item) => (
    <span
      className={`flex cursor-pointer items-center px-2 py-1 ${
        isScrolled
          ? router.pathname === item.path
            ? "text-red-700 font-bold"
            : "text-black hover:text-red-700 "
          : router.pathname === item.path
          ? "text-red-700 font-bold"
          : "text-white hover:text-red-700 "
      }`}
      key={item.id}
      onClick={() => router.push(item.path)}
    >
      <h2 className="text-lg capitalize">{item.title}</h2>
    </span>
  ))}
</div>

        </section>
      </section>
    </header>
  );
}
