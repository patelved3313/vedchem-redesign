export default function PrivacyPage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-r from-red-600 to-orange-500 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-white/80">
            Privacy Policy
          </p>
          <h1 className="mt-4 text-5xl font-black">Privacy Policy</h1>
          <p className="mt-5 max-w-3xl text-lg text-white/90">
            This page explains how Ved Chem Corporation handles basic inquiry
            information submitted through the website.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="space-y-8 text-gray-700">
          <div>
            <h2 className="text-2xl font-black text-black">
              Information We Collect
            </h2>
            <p className="mt-3 leading-relaxed">
              We may collect your name, company name, email address, phone
              number, country, product requirement, quantity, and message when
              you submit an inquiry form.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-black">
              How We Use Information
            </h2>
            <p className="mt-3 leading-relaxed">
              Submitted information is used only to respond to product inquiries,
              quotation requests, and business communication related to Ved Chem
              Corporation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-black">Contact</h2>
            <p className="mt-3 leading-relaxed">
              For privacy-related questions, contact us at
              vedchem2011@gmail.com.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
