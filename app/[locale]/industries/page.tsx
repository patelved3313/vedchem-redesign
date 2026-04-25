import { Beaker, Factory, HeartPulse, Leaf, Pill, Wheat } from 'lucide-react';

const industries = [
  {
    title: 'Pharmaceuticals',
    text: 'Chemical ingredients and sourcing support for pharma-focused buyers.',
    icon: Pill,
  },
  {
    title: 'Animal Nutrition',
    text: 'Vitamins, minerals, amino acids, and feed-related product support.',
    icon: Wheat,
  },
  {
    title: 'Nutraceuticals',
    text: 'Nutrition-focused ingredients for wellness and supplement applications.',
    icon: HeartPulse,
  },
  {
    title: 'Food & Beverages',
    text: 'Selected ingredients for formulation and fortification needs.',
    icon: Leaf,
  },
  {
    title: 'Chemical Industry',
    text: 'Speciality chemical sourcing support for industrial requirements.',
    icon: Beaker,
  },
  {
    title: 'Manufacturing',
    text: 'Reliable B2B inquiry flow for manufacturing and bulk buyers.',
    icon: Factory,
  },
];

export default function IndustriesPage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-r from-red-600 to-orange-500 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-white/80">
            Industries
          </p>
          <h1 className="mt-4 text-5xl font-black">Industries We Serve</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">
            Ved Chem supports buyers across pharma, animal nutrition,
            nutraceutical, food, and speciality chemical markets.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="rounded-[2rem] border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Icon className="h-10 w-10 text-orange-500" />
                <h2 className="mt-6 text-2xl font-black text-black">
                  {industry.title}
                </h2>
                <p className="mt-4 leading-relaxed text-gray-600">
                  {industry.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
