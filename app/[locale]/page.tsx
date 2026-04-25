import Link from 'next/link';
import {
  ArrowRight,
  Award,
  Beaker,
  Boxes,
  Factory,
  FlaskConical,
  Globe2,
  ShieldCheck,
  Sparkles,
  Truck,
  Zap,
} from 'lucide-react';
import { categories, featuredProducts } from '@/lib/products';

const stats = [
  ['13+', 'Years of Excellence'],
  ['250+', 'Quality Products'],
  ['45+', 'Countries Served'],
  ['100%', 'Customer Focus'],
];

const heroCards = [
  {
    title: 'Premium Quality',
    text: 'Reliable sourcing for global B2B buyers.',
    num: '01',
  },
  {
    title: 'Fast RFQ Response',
    text: 'Quick quotations and smooth communication.',
    num: '02',
  },
  {
    title: 'Export Support',
    text: 'Packaging and documentation support.',
    num: '03',
  },
];

const industries = [
  'Pharmaceuticals',
  'Animal Nutrition',
  'Nutraceuticals',
  'Food & Beverages',
  'Personal Care',
  'Chemical Industry',
];

const categoryIcons = [Beaker, Boxes, Zap, ShieldCheck, Sparkles, Factory];

export default function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const base = `/${params.locale}`;

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-14 md:grid-cols-2 md:pt-20">
        <div>
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.25em] text-red-600">
            Trusted. Quality. Results.
          </p>

          <h1 className="text-5xl font-black leading-tight tracking-tight text-black md:text-6xl">
            Innovating Chemical Solutions for a{' '}
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              Better Tomorrow
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-xl leading-relaxed text-gray-600">
            Ved Chem Corporation supplies high-quality vitamins, minerals,
            amino acids, antibiotics, and specialty chemicals worldwide.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href={`${base}/products`}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:scale-105"
            >
              Explore Products
            </Link>

            <Link
              href={`${base}/contact`}
              className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-8 py-4 text-lg font-bold text-black transition hover:border-red-500 hover:text-red-600"
            >
              Request Quote
            </Link>
          </div>
        </div>

        <div className="space-y-5">
          {heroCards.map((item) => (
            <div
              key={item.num}
              className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-xl"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h3 className="text-2xl font-black text-black">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-gray-600">
                    {item.text}
                  </p>
                </div>

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-orange-500 text-lg font-black text-white">
                  {item.num}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-2 gap-4 rounded-[2rem] bg-black p-6 text-white md:grid-cols-4">
          {stats.map(([num, label]) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-black">{num}</p>
              <p className="mt-1 text-sm text-gray-400">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-24 md:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-red-600">
            About Ved Chem Corporation
          </p>
          <h2 className="mt-3 text-4xl font-black text-black">
            Quality you can trust, partnerships you can rely on.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            A premium buyer experience focused on clear product information,
            fast inquiry flow, dependable communication, and export-ready
            support.
          </p>

          <div className="mt-6 space-y-3">
            {[
              'Premium quality raw materials',
              'Documentation-ready sourcing support',
              'Global export standards mindset',
              'Fast RFQ and WhatsApp inquiry flow',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-600">
                  ✓
                </span>
                <span className="font-medium text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <Link
            href={`${base}/about`}
            className="mt-8 inline-flex rounded-full bg-black px-7 py-3 font-bold text-white transition hover:bg-red-600"
          >
            Know More About Us
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ['Quality Assured', Award],
            ['Reliable Supply', Truck],
            ['Global Buyers', Globe2],
            ['Technical Focus', FlaskConical],
          ].map(([title, Icon]: any) => (
            <div
              key={title}
              className="rounded-[2rem] border bg-gradient-to-br from-white to-orange-50 p-6 shadow-sm"
            >
              <Icon className="h-8 w-8 text-orange-500" />
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <p className="mt-2 text-gray-600">
                Professional support for serious B2B chemical sourcing.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-red-600">
              Product Categories
            </p>
            <h2 className="mt-3 text-4xl font-black text-black">
              High quality chemical solutions
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => {
              const Icon = categoryIcons[index];

              return (
                <Link
                  key={category.slug}
                  href={`${base}/products`}
                  className="group rounded-[2rem] border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <Icon className="h-9 w-9 text-orange-500" />
                  <h3 className="mt-5 text-2xl font-black">{category.name}</h3>
                  <p className="mt-3 text-gray-600">{category.line}</p>
                  <p className="mt-5 inline-flex items-center gap-2 font-bold text-red-600">
                    Explore <ArrowRight className="h-4 w-4" />
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-red-600">
              Featured Products
            </p>
            <h2 className="mt-3 text-4xl font-black text-black">
              Fast paths to popular products.
            </h2>
          </div>

          <Link
            href={`${base}/products`}
            className="font-bold text-red-600 hover:text-orange-500"
          >
            View all products →
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <Link
              key={product.slug}
              href={`${base}/products/${product.slug}`}
              className="group rounded-[2rem] border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-32 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-100 to-red-100">
                <FlaskConical className="h-14 w-14 text-orange-600" />
              </div>
              <p className="mt-5 text-sm font-bold text-red-600">
                {product.category}
              </p>
              <h3 className="mt-2 text-xl font-black">{product.name}</h3>
              <p className="mt-3 line-clamp-3 text-sm text-gray-600">
                {product.short}
              </p>
              <p className="mt-5 font-bold text-red-600">View details →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-gradient-to-br from-black via-[#1a0803] to-red-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-400">
            Why Choose Us?
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Your success is our commitment.
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [ShieldCheck, 'Premium Quality'],
              [Truck, 'Timely Delivery'],
              [Globe2, 'Competitive Pricing'],
              [Sparkles, 'Customer Support'],
            ].map(([Icon, label]: any) => (
              <div key={label} className="rounded-[2rem] border border-white/10 p-6">
                <Icon className="mx-auto h-9 w-9 text-orange-400" />
                <h3 className="mt-5 text-xl font-black">{label}</h3>
                <p className="mt-3 text-gray-300">
                  Dedicated support for your business requirements.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-red-600">
            Industries We Serve
          </p>
          <h2 className="mt-3 text-4xl font-black text-black">
            Chemical inputs for growth sectors.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-full border bg-white px-6 py-4 text-center font-bold shadow-sm"
            >
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="rounded-[2rem] bg-gradient-to-r from-red-600 to-orange-500 p-10 text-white md:p-14">
          <p className="font-bold uppercase tracking-widest text-white/80">
            Ready to source?
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl font-black">
            Send product requirements and get a focused response.
          </h2>
          <Link
            href={`${base}/contact`}
            className="mt-8 inline-flex rounded-full bg-black px-8 py-4 font-bold text-white transition hover:bg-white hover:text-black"
          >
            Start RFQ →
          </Link>
        </div>
      </section>
    </main>
  );
}
