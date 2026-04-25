import Link from 'next/link';
import { Mail, MapPin, Phone, Send, MessageCircle } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-red-100 bg-[#fff7f3]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] bg-gradient-to-r from-red-600 to-orange-500 p-8 text-white shadow-xl md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-white/80">
                Stay Updated
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
                Get product updates from Ved Chem.
              </h2>
              <p className="mt-3 max-w-2xl text-white/80">
                Receive updates about chemical products, sourcing support, and buyer assistance.
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-[2rem] bg-white p-3 shadow-lg sm:flex-row sm:rounded-full">
              <input
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-full px-5 py-3 text-black outline-none"
              />
              <button className="flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 font-bold text-white transition hover:bg-red-700">
                <Send className="h-4 w-4" />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm leading-relaxed text-gray-600">
              Ved Chem Corporation is a buyer-focused chemical supplier from India serving feed,
              pharma, nutraceutical, and speciality chemical markets.
            </p>

            <Link
              href="/en/contact"
              className="mt-6 inline-flex rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 text-sm font-black text-white shadow-md transition hover:scale-105"
            >
              Request Quote
            </Link>
          </div>

          <div>
            <h3 className="text-lg font-black text-black">Quick Links</h3>
            <div className="mt-5 space-y-3 text-gray-600">
              <Link className="block hover:text-red-600" href="/en/about">About Us</Link>
              <Link className="block hover:text-red-600" href="/en/products">Products</Link>
              <Link className="block hover:text-red-600" href="/en/quality">Quality</Link>
              <Link className="block hover:text-red-600" href="/en/infrastructure">Infrastructure</Link>
              <Link className="block hover:text-red-600" href="/en/contact">Contact Us</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-black text-black">Products</h3>
            <div className="mt-5 space-y-3 text-gray-600">
              <Link className="block hover:text-red-600" href="/en/products">Vitamins</Link>
              <Link className="block hover:text-red-600" href="/en/products">Mineral Salts</Link>
              <Link className="block hover:text-red-600" href="/en/products">Amino Acids</Link>
              <Link className="block hover:text-red-600" href="/en/products">Chelated Minerals</Link>
              <Link className="block hover:text-red-600" href="/en/products">Speciality Chemicals</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-black text-black">Contact</h3>

            <div className="mt-5 space-y-4">
              <a
                href="tel:+919925256056"
                className="flex gap-4 rounded-2xl bg-white p-4 text-gray-700 shadow-sm transition hover:-translate-y-1 hover:text-red-600 hover:shadow-md"
              >
                <Phone className="mt-1 h-5 w-5 shrink-0 text-red-600" />
                <span className="font-semibold">+91 9925256056</span>
              </a>

              <a
                href="mailto:vedchem2011@gmail.com"
                className="flex gap-4 rounded-2xl bg-white p-4 text-gray-700 shadow-sm transition hover:-translate-y-1 hover:text-red-600 hover:shadow-md"
              >
                <Mail className="mt-1 h-5 w-5 shrink-0 text-red-600" />
                <span className="break-all font-semibold">vedchem2011@gmail.com</span>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Ved%20Chem%20Corporation%20G%2F18%20Priya%20Avenue%20GIDC%20Chhatral%20Gandhinagar%20382729%20Gujarat%20India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 rounded-2xl bg-white p-4 text-gray-700 shadow-sm transition hover:-translate-y-1 hover:text-red-600 hover:shadow-md"
              >
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-red-600" />
                <span className="font-semibold leading-relaxed">
                  G/18, Priya Avenue, G. I. D. C.,
                  <br />
                  Chhatral, Gandhinagar - 382729,
                  <br />
                  Gujarat, India
                </span>
              </a>

              <a
                href="https://wa.me/919925256056"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-full bg-black px-6 py-4 font-black text-white transition hover:bg-red-600"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-red-100 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Ved Chem Corporation. All Rights Reserved.</p>

          <div className="flex gap-5">
            <Link className="hover:text-red-600" href="/en/privacy">
              Privacy Policy
            </Link>
            <Link className="hover:text-red-600" href="/en/terms">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
