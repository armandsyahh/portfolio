"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
    ];

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-6">

        <Link
          href="/"
          className="text-2xl font-bold text-slate-900"
        >
          AY.
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
            <Link
            key={item.label}
            href={item.href}
            className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
            >
            {item.label}
            </Link>
        ))}
        </nav>

        <button className="md:hidden">

          <Menu size={28} />

        </button>

      </div>
    </header>
  );
}