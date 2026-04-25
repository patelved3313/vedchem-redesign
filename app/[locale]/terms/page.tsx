export default function TermsPage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-r from-red-600 to-orange-500 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-white/80">
            Terms & Conditions
          </p>
          <h1 className="mt-4 text-5xl font-black">Terms & Conditions</h1>
          <p className="mt-5 max-w-3xl text-lg text-white/90">
            These terms apply to general use of the Ved Chem Corporation website.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="space-y-8 text-gray-700">
          <div>
            <h2 className="text-2xl font-black text-black">Website Use</h2>
            <p className="mt-3 leading-relaxed">
              The information on this website is provided for general business
              inquiry and product discovery purposes only.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-black">
              Product Information
            </h2>
            <p className="mt-3 leading-relaxed">
              Product descriptions, packaging details, and availability are
              subject to confirmation during quotation and commercial discussion.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-black">Contact</h2>
            <p className="mt-3 leading-relaxed">
              For business inquiries, contact Ved Chem Corporation at
              vedchem2011@gmail.com or +91 9925256056.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
