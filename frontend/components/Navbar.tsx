"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 glass-nav px-4 py-4 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="LinkedIn Analyzer"
            width={180}
            height={50}
            className="h-auto w-[180px] object-contain"
            priority
          />
        </Link>

        {/* Navigation */}
        <div className="flex flex-wrap items-center gap-3 text-sm font-medium md:gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`transition-colors ${
                  isActive
                    ? "text-indigo-300"
                    : "text-slate-200 hover:text-indigo-400"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/login"
            className="btn btn-ghost text-sm font-semibold text-slate-200 hover:bg-white/10"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="btn btn-primary border-none bg-indigo-600 px-5 text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-500"
          >
            Get Started
          </Link>
        </div>

      </div>
    </nav>
  );
}