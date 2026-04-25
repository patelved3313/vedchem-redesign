import Link from 'next/link';
import {
  ArrowLeft,
  Beaker,
  CheckCircle2,
  MessageCircle,
  Package,
  ShieldCheck,
} from 'lucide-react';
import { products } from '@/lib/products';

type PageProps = {
  params: {
    locale: string;
    slug: string;
  };
};

export default function ProductDetailPage({ params }: PageProps) {
  const base = `/${params.locale}`;

  const product =
    products.find((item) => item.slug === params.slug) || products[0];

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category && item.slug !== product.slug
    )
    .slice(0, 3);

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-6 py-10">
        <Link
          href={`${base}/products`}
          className="inline-flex items-center gap-2 font-bold text-red-600 hover:text-orange-500"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="flex h-[360px] items-center justify-center rounded-[2rem] bg-gradient-to-br from-orange-100 via-red-50 to-white shadow-inner md:h-[420px]">
              <Beaker className="h-28 w-28 text-orange-600 md:h-32 md:w-32" />
            </div>

            <div className="mt-5 grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="flex h-20 items-center justify-center rounded-2xl bg-orange-50"
                >
                  <Beaker className="h-8 w-8 text-orange-500" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
              {product.category}
            </p>

            <h1 className="mt-4 text-4xl font-black leading-tight text-black md:text-5xl">
              {product.name}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              {product.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={`${base}/contact`}
                className="rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 text-center font-black text-white shadow-lg transition hover:scale-105"
              >
                Request a Quote
              </Link>

              <a
                href={`https://wa.me/919925256056?text=Hello%20Ved%20Chem,%20I%20want%20to%20inquire%20about%20${encodeURIComponent(
                  product.name
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border px-8 py-4 font-black text-black transition hover:border-green-500 hover:text-green-600"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Inquiry
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border p-5">
                <ShieldCheck className="h-7 w-7 text-red-600" />
                <p className="mt-3 font-black">Quality Focused</p>
              </div>

              <div className="rounded-3xl border p-5">
                <Package className="h-7 w-7 text-red-600" />
                <p className="mt-3 font-black">Packaging Support</p>
              </div>

              <div className="rounded-3xl border p-5">
                <CheckCircle2 className="h-7 w-7 text-red-600" />
                <p className="mt-3 font-black">B2B Ready</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="rounded-[2rem] border bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-black text-black">
              Product Overview
            </h2>

            <p className="mt-4 leading-relaxed text-gray-600">
              {product.description}
            </p>

            <h3 className="mt-10 text-2xl font-black text-black">
              Applications
            </h3>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {product.applications.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-orange-50 p-4"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-red-600" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <h3 className="mt-10 text-2xl font-black text-black">
              Key Features
            </h3>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {product.features.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border p-4"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-red-600" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <h3 className="mt-10 text-2xl font-black text-black">
              Packaging / Availability
            </h3>

            <p className="mt-4 rounded-2xl bg-gray-50 p-5 text-gray-700">
              {product.packaging}
            </p>
          </div>

          <aside className="h-fit rounded-[2rem] bg-black p-7 text-white">
            <h3 className="text-2xl font-black">Quick Inquiry</h3>

            <p className="mt-3 text-gray-300">
              Interested in this product? Send your requirement now.
            </p>

            <Link
              href={`${base}/contact`}
              className="mt-6 flex justify-center rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-6 py-4 font-black text-white"
            >
              Request Quote Now
            </Link>

            <a
              href={`https://wa.me/919925256056?text=Hello%20Ved%20Chem,%20I%20want%20to%20inquire%20about%20${encodeURIComponent(
                product.name
              )}`}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex justify-center rounded-full bg-white px-6 py-4 font-black text-black"
            >
              WhatsApp
            </a>
          </aside>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-black text-black">
              Related Products
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((item) => (
                <Link
                  key={item.slug}
                  href={`${base}/products/${item.slug}`}
                  className="rounded-[2rem] border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-32 items-center justify-center rounded-3xl bg-orange-50">
                    <Beaker className="h-12 w-12 text-orange-600" />
                  </div>

                  <h3 className="mt-5 text-xl font-black">{item.name}</h3>

                  <p className="mt-3 line-clamp-2 text-gray-600">
                    {item.short}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
