import { Award, Globe2, ShieldCheck, Truck } from 'lucide-react';

const values = [
  {
    title: 'Quality Focus',
    text: 'We support buyers with a quality-first sourcing mindset and clear product communication.',
    icon: ShieldCheck,
  },
  {
    title: 'Global Buyer Support',
    text: 'Our inquiry flow is built for international B2B buyers looking for reliable chemical supply.',
    icon: Globe2,
  },
  {
    title: 'Reliable Communication',
    text: 'We focus on fast responses, clear requirements, and practical quotation support.',
    icon: Truck,
  },
  {
    title: 'Professional Standards',
    text: 'We aim to build long-term trust through consistency, clarity, and dependable service.',
    icon: Award,
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-r from-red-600 to-orange-500 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-white/80">
            About Us
          </p>
          <h1 className="mt-4 text-5xl font-black">Ved Chem Corporation</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">
            Ved Chem Corporation is a buyer-focused chemical supplier from India
            serving feed, pharma, nutraceutical, and speciality chemical markets.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
            Company Overview
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-black">
            Building trust through clear sourcing and dependable support.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            We help B2B buyers source vitamins, mineral salts, amino acids,
            antibiotics, chelated minerals, and other speciality chemicals with
            professional communication and a smooth request-for-quote experience.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Our website is designed to make product discovery simple, inquiry
            faster, and communication easier for domestic and international
            customers.
          </p>
        </div>

        <div className="rounded-[2rem] bg-black p-8 text-white">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-orange-400">
            Why Buyers Choose Us
          </p>
          <h3 className="mt-4 text-3xl font-black">
            Practical sourcing support for serious buyers.
          </h3>
          <div className="mt-8 space-y-4">
            {[
              'Wide product portfolio',
              'Fast RFQ and WhatsApp inquiry flow',
              'Export-minded communication',
              'Clear product information and packaging discussion',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 p-4">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
              Our Values
            </p>
            <h2 className="mt-4 text-4xl font-black text-black">
              What we focus on
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-[2rem] border bg-white p-6 shadow-sm"
                >
                  <Icon className="h-9 w-9 text-orange-500" />
                  <h3 className="mt-5 text-xl font-black text-black">
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
