import { Award, Building2, Globe2, ShieldCheck, Truck } from 'lucide-react';

const values = [
  {
    title: 'Quality Focus',
    text: 'We prioritize consistent quality, safe usage, and dependable product performance.',
    icon: ShieldCheck,
  },
  {
    title: 'Customer Feedback',
    text: 'Our growth is driven by client feedback, continuous improvement, and long-term trust.',
    icon: Globe2,
  },
  {
    title: 'Reliable Supply',
    text: 'We support buyers with clear communication, practical sourcing, and quotation support.',
    icon: Truck,
  },
  {
    title: 'Reasonable Pricing',
    text: 'We aim to deliver quality products at competitive and practical business pricing.',
    icon: Award,
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-r from-red-600 to-orange-500 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-white/80">
            About Us
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Ved Chem Corporation
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">
            Trusted chemical supply from Chhatral, Gujarat, delivering quality
            products and dependable service since 2011.
          </p>
        </div>
      </section>

      {/* COMPANY CONTENT */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
            Company Overview
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight text-black">
            Built on hard work, quality, and customer trust.
          </h2>

          <div className="mt-7 space-y-5 text-lg leading-relaxed text-gray-600">
            <p>
              Ved Chem Corporation is a Gujarat-based company operating from
              Chhatral, incorporated in 2011. Over the years, we have built a
              strong presence as a reliable manufacturer, wholesaler,
              distributor, supplier, and trader of pharmaceutical raw materials,
              vitamins, poultry veterinary chemicals, animal feed supplements,
              and minerals.
            </p>

            <p>
              Our growth has been shaped by consistent hard work, research and
              development focus, and close attention to customer feedback. We aim
              to provide products that support dependable performance, longer
              shelf life, high effectiveness, and safe usage.
            </p>

            <p>
              With a customer-first mindset, we work to deliver quality products
              at reasonable prices while building long-term relationships based
              on trust, service, and consistency.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] bg-black p-8 text-white shadow-2xl">
          <Building2 className="h-12 w-12 text-orange-400" />

          <h3 className="mt-6 text-3xl font-black">
            Ved Chem at a glance
          </h3>

          <div className="mt-8 grid gap-4">
            {[
              ['2011', 'Year Incorporated'],
              ['Chhatral', 'Gujarat, India'],
              ['B2B', 'Manufacturer, Supplier & Trader'],
              ['Quality', 'Focused Product Range'],
            ].map(([big, small]) => (
              <div
                key={big}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-3xl font-black text-orange-400">{big}</p>
                <p className="mt-1 text-sm text-gray-300">{small}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
              Our Strengths
            </p>

            <h2 className="mt-4 text-4xl font-black text-black">
              What makes us dependable
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-[2rem] border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <Icon className="h-10 w-10 text-orange-500" />

                  <h3 className="mt-6 text-xl font-black text-black">
                    {value.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-gray-600">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
