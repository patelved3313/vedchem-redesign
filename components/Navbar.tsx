'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Menu, Phone, X } from 'lucide-react';
import Logo from './Logo';

const nav = [
  ['Home', '/en'],
  ['About Us', '/en/about'],
  ['Products', '/en/products'],
  ['Industries', '/en/industries'],
  ['Quality', '/en/quality'],
  ['Infrastructure', '/en/infrastructure'],
  ['Contact Us', '/en/contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
      <div className="hidden bg-black text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
          <span>Trusted. Quality. Results.</span>

          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-orange-400" />
              +91 9925256056
            </span>

            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-orange-400" />
              vedchem2011@gmail.com
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/en">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-bold text-black transition hover:text-red-600"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/en/contact"
          className="hidden rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:scale-105 md:inline-flex"
        >
          Request Quote
        </Link>

        <button
          onClick={() => setOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full border bg-white shadow-sm lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-7 w-7 text-black" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[999] bg-black/50 lg:hidden">
          <div className="ml-auto h-full w-[82%] max-w-sm bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <Logo />

              <button
                onClick={() => setOpen(false)}
                className="flex h-12 w-12 items-center justify-center rounded-full border"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-black" />
              </button>
            </div>

            <nav className="mt-10 space-y-2">
              {nav.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-4 text-lg font-black text-black hover:bg-orange-50 hover:text-red-600"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <Link
              href="/en/contact"
              onClick={() => setOpen(false)}
              className="mt-8 flex justify-center rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-6 py-4 font-black text-white"
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
