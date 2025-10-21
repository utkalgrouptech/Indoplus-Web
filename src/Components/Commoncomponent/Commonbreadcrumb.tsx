import React from "react";
import { Home } from "lucide-react"; // using lucide-react icons (modern, lightweight)
import Link from "next/link";

type Prop = {
  data: {
    cont1: string;
    cont2?: string; // Subtitle or extra description
  };
  img: string;
  path?: { name: string; href: string }[]; // Breadcrumb trail
};

export default function CommonBreadcrumb({ data, img, path }: Prop) {
  return (
    <section className="relative h-[50vh] lg:h-[60vh] flex items-center justify-center">
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Breadcrumb navigation */}
        {path && path.length > 0 && (
          <nav className="flex items-center justify-center space-x-2 text-gray-300 mb-4 text-sm md:text-base">
            <Link href="/" className="flex items-center gap-1 hover:text-white transition">
              <Home size={18} /> Home
            </Link>
            {path.map((p, i) => (
              <React.Fragment key={i}>
                <span className="text-gray-400">/</span>
                <Link
                  href={p.href}
                  className="hover:text-white transition"
                >
                  {p.name}
                </Link>
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Title */}
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-lg animate-fade-in">
          {data.cont1}
        </h1>

        {/* Subtitle */}
        {data.cont2 && (
          <p className="mt-3 text-gray-200 text-base md:text-lg lg:text-xl animate-fade-in-up">
            {data.cont2}
          </p>
        )}
      </div>
    </section>
  );
}
