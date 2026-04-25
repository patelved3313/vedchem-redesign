import Link from 'next/link';

export default function HomePage() {
  const items = [
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

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Innovating Chemical Solutions for a{' '}
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              Better Tomorrow
            </span>
          </h1>

          <p className="mt-4 text-gray-600">
            Ved Chem Corporation supplies high-quality vitamins, minerals,
            amino acids, antibiotics, and specialty chemicals worldwide.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              href="/products"
              className="rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 text-white font-semibold"
            >
              Explore Products
            </Link>

            <Link
              href="/contact"
              className="rounded-full border px-6 py-3 font-semibold"
            >
              Request Quote
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE CLEAN CARDS */}
        <div className="mx-auto w-full max-w-sm space-y-4">
          {items.map((item) => (
            <div
              key={item.num}
              className="flex items-start justify-between rounded-3xl bg-white p-5 shadow-lg border"
            >
              <div>
                <h3 className="text-lg font-bold text-black">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  {item.text}
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-orange-500 text-sm font-bold text-white">
                {item.num}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-black text-white py-10">
        <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 text-center gap-6">
          <div>
            <p className="text-2xl font-bold">13+</p>
            <p className="text-sm text-gray-400">Years Experience</p>
          </div>
          <div>
            <p className="text-2xl font-bold">250+</p>
            <p className="text-sm text-gray-400">Products</p>
          </div>
          <div>
            <p className="text-2xl font-bold">45+</p>
            <p className="text-sm text-gray-400">Countries</p>
          </div>
          <div>
            <p className="text-2xl font-bold">100%</p>
            <p className="text-sm text-gray-400">Satisfaction</p>
          </div>
        </div>
      </section>
    </main>
  );
}
