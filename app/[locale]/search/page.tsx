'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Beaker, Search } from 'lucide-react';
import { products } from '@/lib/products';

export default function SearchPage({
  params,
}: {
  params: { locale: string };
}) {
  const base = `/${params.locale}`;
  const [query, setQuery] = useState('');

  const results = products.filter((product) => {
    const value = query.toLowerCase();

    return (
      product.name.toLowerCase().includes(value) ||
      product.category.toLowerCase().includes(value) ||
      product.short.toLowerCase().includes(value) ||
      product.description.toLowerCase().includes(value)
    );
  });

  return (
    <main className="bg-white">
      <section className="bg-gradient-to-r from-red-600 to-orange-500 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-white/80">
            Search
          </p>

          <h1 className="mt-4 text-5xl font-black">Search Products</h1>

          <p className="mt-5 max-w-3xl text-lg text-white/90">
            Find products by name, category, or application.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex items-center gap-3 rounded-full border bg-white px-5 py-4 shadow-sm">
          <Search className="h-5 w-5 text-gray-400" />

          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search vitamins, minerals, amino acids..."
            className="w-full bg-transparent text-gray-700 outline-none"
            autoFocus
          />
        </div>

        <p className="mb-6 font-bold text-gray-700">
          Showing {results.length} result{results.length !== 1 ? 's' : ''}
        </p>

        {results.length === 0 ? (
          <div className="rounded-[2rem] border bg-gray-50 p-10 text-center">
            <h2 className="text-2xl font-black text-black">
              No products found
            </h2>
            <p className="mt-3 text-gray-600">
              Try searching another product name or category.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((product) => (
              <Link
                key={product.slug}
                href={`${base}/products/${product.slug}`}
                className="group rounded-[2rem] border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-40 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-orange-100 to-red-100">
                  <Beaker className="h-14 w-14 text-orange-600" />
                </div>

                <p className="mt-6 text-sm font-black uppercase tracking-widest text-red-600">
                  {product.category}
                </p>

                <h3 className="mt-3 text-2xl font-black leading-tight text-black">
                  {product.name}
                </h3>

                <p className="mt-4 line-clamp-3 text-gray-600">
                  {product.short}
                </p>

                <p className="mt-6 inline-flex items-center gap-2 font-black text-red-600">
                  View details <ArrowRight className="h-4 w-4" />
                </p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
