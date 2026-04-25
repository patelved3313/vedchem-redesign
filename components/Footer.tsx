import Link from 'next/link';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="mt-10 border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Subscribe */}
        <div className="mb-16 rounded-[2rem] bg-gradient-to-r from-red-600 to-orange-500 p-8 text-white md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-white/80">
            Stay Updated
          </p>

          <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <h2 className="max-w-2xl text-4xl font-black leading-tight">
              Get product updates from Ved Chem.
            </h2>

            <div className="flex rounded-full bg-white p-2 shadow-lg">
              <input
                placeholder="Enter your email"
                className="w-full rounded-full px-5 text-black outline-none md:w-64"
              />
              <button className="flex items-center gap-2 rounded-full bg-black px-6 py-3 font-bold text-white">
                <Send className="h-4 w-4" />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-5 leading-relaxed text-gray-600">
              Ved Chem Corporation is a buyer-focused chemical supplier from
              India serving feed, pharma, nutraceutical, and speciality chemical
              markets.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-black text-black">Quick Links</h3>
            <div className="mt-5 space-y-3 text-gray-600">
              <Link className="block hover:text-red-600" href="/en/about">
                About Us
              </Link>
              <Link className="block hover:text-red-600" href="/en/products">
                Products
              </Link>
              <Link className="block hover:text-red-600" href="/en/quality">
                Quality
              </Link>
              <Link className="block hover:text-red-600" href="/en/contact">
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black text-black">Products</h3>
            <div className="mt-5 space-y-3 text-gray-600">
              <Link className="block hover:text-red-600" href="/en/products">
                Vitamins
              </Link>
              <Link className="block hover:text-red-600" href="/en/products">
                Mineral Salts
              </Link>
              <Link className="block hover:text-red-600" href="/en/products">
                Amino Acids
              </Link>
              <Link className="block hover:text-red-600" href="/en/products">
                Chelated Minerals
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black text-black">Contact</h3>
            <div className="mt-5 space-y-4 text-gray-600">
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-600" />
                +91 9925256056
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-600" />
                vedchem2011@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-red-600" />
                India
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Ved Chem Corporation. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link href="/en/privacy">Privacy Policy</Link>
            <Link href="/en/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
