import { CheckCircle2, ClipboardCheck, PackageCheck, ShieldCheck } from 'lucide-react';

const steps = [
  {
    title: 'Supplier Screening',
    text: 'We focus on working with reliable supply channels and clear product requirements.',
    icon: ShieldCheck,
  },
  {
    title: 'Documentation Support',
    text: 'We help buyers discuss specifications, packaging, and documentation needs during inquiry.',
    icon: ClipboardCheck,
  },
  {
    title: 'Packaging Clarity',
    text: 'Packaging details are confirmed based on product type, quantity, and shipment plan.',
    icon: PackageCheck,
  },
];

export default function QualityPage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-r from-red-600 to-orange-500 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-white/80">
            Quality
          </p>
          <h1 className="mt-4 text-5xl font-black">Quality-first process</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">
            Our process is designed to create confidence for international B2B
            buyers through clear communication, structured inquiry, and
            documentation-focused support.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-[2rem] border bg-white p-8 shadow-sm"
              >
                <Icon className="h-10 w-10 text-orange-500" />
                <h2 className="mt-6 text-2xl font-black text-black">
                  {step.title}
                </h2>
                <p className="mt-4 leading-relaxed text-gray-600">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-[2rem] bg-black p-8 text-white md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-orange-400">
            Buyer Confidence
          </p>
          <h2 className="mt-4 text-4xl font-black">
            Clear product communication from inquiry to quotation.
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'Product requirement discussion',
              'Packaging and availability confirmation',
              'Documentation-oriented communication',
              'Responsive quotation support',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 p-4">
                <CheckCircle2 className="h-5 w-5 text-orange-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
