import Link from 'next/link';
import { ArrowRight, Beaker, Search } from 'lucide-react';
import { categories, products } from '@/lib/products';

export default function ProductsPage({
  params,
}: {
  params: { locale: string };
}) {
  const base = `/${params.locale}`;

  return (
    <main className="bg-white">
      <section className="bg-gradient-to-r from-red-600 to-orange-500 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-white/80">
            Product Portfolio
          </p>
          <h1 className="mt-4 text-5xl font-black">Our Products</h1>
          <p className="mt-5 max-w-3xl text-lg text-white/90">
            Explore Ved Chem’s structured range of vitamins, mineral salts,
            amino acids, antibiotics, chelated minerals, and specialty chemicals.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[280px_1fr]">
        <aside className="h-fit rounded-[2rem] border bg-white p-5 shadow-sm">
          <h2 className="text-xl font-black">Categories</h2>

          <div className="mt-5 space-y-2">
            {categories.map((category) => (
              <a
                key={category.slug}
                href={`#${category.slug}`}
                className="block rounded-2xl px-4 py-3 font-bold text-gray-700 transition hover:bg-orange-50 hover:text-red-600"
              >
                {category.name}
              </a>
            ))}
          </div>
        </aside>

        <div>
          <div className="mb-8 flex items-center gap-3 rounded-full border bg-white px-5 py-4 shadow-sm">
            <Search className="h-5 w-5 text-gray-400" />
            <span className="text-gray-500">Search by product name, category, or application...</span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
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
        </div>
      </section>
    </main>
  );
}
