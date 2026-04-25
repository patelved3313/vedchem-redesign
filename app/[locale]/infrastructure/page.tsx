import { Boxes, Factory, PackageCheck, Truck } from 'lucide-react';

const items = [
  {
    title: 'Sourcing Coordination',
    text: 'Product availability and buyer requirements are coordinated through a clear inquiry process.',
    icon: Factory,
  },
  {
    title: 'Packaging Discussion',
    text: 'Packaging options are discussed based on product type, quantity, and export needs.',
    icon: PackageCheck,
  },
  {
    title: 'Dispatch Support',
    text: 'Shipment and dispatch details can be planned according to commercial requirements.',
    icon: Truck,
  },
  {
    title: 'Product Range',
    text: 'A broad portfolio across vitamins, minerals, amino acids, antibiotics, and chemicals.',
    icon: Boxes,
  },
];

export default function InfrastructurePage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-r from-red-600 to-orange-500 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-white/80">
            Infrastructure
          </p>
          <h1 className="mt-4 text-5xl font-black">
            Operations & supply support
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">
            A practical operations-focused page for warehousing, quality
            coordination, packaging, and dispatch support. Real photos can be
            added here when available.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[2rem] border bg-white p-6 shadow-sm"
              >
                <Icon className="h-9 w-9 text-orange-500" />
                <h2 className="mt-6 text-xl font-black text-black">
                  {item.title}
                </h2>
                <p className="mt-3 leading-relaxed text-gray-600">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-gray-50 p-8">
            <h2 className="text-3xl font-black text-black">
              Designed for B2B reliability
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Ved Chem’s digital experience is structured to support product
              discovery, RFQ submissions, WhatsApp communication, and buyer
              confidence.
            </p>
          </div>

          <div className="rounded-[2rem] bg-black p-8 text-white">
            <h2 className="text-3xl font-black">
              Add real facility images later
            </h2>
            <p className="mt-4 leading-relaxed text-gray-300">
              This section intentionally avoids fake building images. Actual
              warehouse, team, product, or packaging photos can be added when
              available.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
