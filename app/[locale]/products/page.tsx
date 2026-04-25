'use client';

import Link from 'next/link';
import { ArrowRight, Beaker, Search } from 'lucide-react';
import { categories, products } from '@/lib/products';
import { useState } from 'react';

export default function ProductsPage({
  params,
}: {
  params: { locale: string };
}) {
  const base = `/${params.locale}`;
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase()) ||
      product.short.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === 'All' || product.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="bg-white">
      <section className="bg-gradient-to-r from-red-600 to-orange-500 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-white/80">
            Product Portfolio
          </p>

          <h1 className="mt-4 text-5xl font-black">Our Products</h1>

          <p className="mt-5 max-w-3xl text-lg text-white/90">
            Search and explore Ved Chem’s range of vitamins, mineral salts,
            amino acids, antibiotics, chelated minerals, and specialty chemicals.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[280px_1fr]">
        <aside className="h-fit rounded-[2rem] border bg-white p-5 shadow-sm">
          <h2 className="text-xl font-black">Categories</h2>

          <div className="mt-5 space-y-2">
            <button
              onClick={() => setActiveCategory('All')}
              className={`block w-full rounded-2xl px-4 py-3 text-left font-bold transition ${
                activeCategory === 'All'
                  ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white'
                  : 'text-gray-700 hover:bg-orange-50 hover:text-red-600'
              }`}
            >
              All Products
            </button>

            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setActiveCategory(category.name)}
                className={`block w-full rounded-2xl px-4 py-3 text-left font-bold transition ${
                  activeCategory === category.name
                    ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white'
                    : 'text-gray-700 hover:bg-orange-50 hover:text-red-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </aside>

        <div>
          <div className="mb-8 flex items-center gap-3 rounded-full border bg-white px-5 py-4 shadow-sm">
            <Search className="h-5 w-5 text-gray-400" />

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by product name, category, or application..."
              className="w-full bg-transparent text-gray-700 outline-none"
            />
          </div>

          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="font-bold text-gray-700">
              Showing {filteredProducts.length} product
              {filteredProducts.length !== 1 ? 's' : ''}
            </p>

            {(search || activeCategory !== 'All') && (
              <button
                onClick={() => {
                  setSearch('');
                  setActiveCategory('All');
                }}
                className="rounded-full border px-5 py-2 text-sm font-bold text-red-600 hover:bg-red-50"
              >
                Clear Filters
              </button>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="rounded-[2rem] border bg-gray-50 p-10 text-center">
              <h2 className="text-2xl font-black text-black">
                No products found
              </h2>
              <p className="mt-3 text-gray-600">
                Try searching another product name or select a different
                category.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <Link
                  key={product.slug}
                  href={`${base}/products/${product.slug}`}
                  className="group rounded-[2rem] border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-44 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-orange-100 to-red-100">
                    <Beaker className="h-16 w-16 text-orange-600" />
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
        </div>
      </section>
    </main>
  );
}
