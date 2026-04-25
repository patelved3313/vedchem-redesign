'use client';

import { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { products } from '@/lib/products';

export default function RFQForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-[2rem] border bg-white p-8 text-center shadow-sm">
        <CheckCircle2 className="mx-auto h-14 w-14 text-green-600" />
        <h3 className="mt-5 text-2xl font-black text-black">
          Inquiry received
        </h3>
        <p className="mt-3 text-gray-600">
          Thank you. Ved Chem will contact you shortly through email or WhatsApp.
        </p>
        <a
          href="https://wa.me/919925256056"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-7 py-3 font-bold text-white"
        >
          Continue on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-bold text-black">Name *</label>
          <input required className="w-full rounded-2xl border px-4 py-3 outline-none focus:border-red-500" placeholder="Your name" />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-black">Company</label>
          <input className="w-full rounded-2xl border px-4 py-3 outline-none focus:border-red-500" placeholder="Company name" />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-black">Email *</label>
          <input required type="email" className="w-full rounded-2xl border px-4 py-3 outline-none focus:border-red-500" placeholder="you@example.com" />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-black">Phone / WhatsApp *</label>
          <input required className="w-full rounded-2xl border px-4 py-3 outline-none focus:border-red-500" placeholder="+91..." />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-black">Country *</label>
          <input required className="w-full rounded-2xl border px-4 py-3 outline-none focus:border-red-500" placeholder="Country" />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-black">Product</label>
          <select className="w-full rounded-2xl border px-4 py-3 outline-none focus:border-red-500">
            <option>Select product</option>
            {products.map((product) => (
              <option key={product.slug}>{product.name}</option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-bold text-black">Quantity</label>
          <input className="w-full rounded-2xl border px-4 py-3 outline-none focus:border-red-500" placeholder="Example: 1 MT, 500 KG, container load" />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-bold text-black">Message *</label>
          <textarea required rows={5} className="w-full rounded-2xl border px-4 py-3 outline-none focus:border-red-500" placeholder="Tell us your requirement..." />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-bold text-black">Upload File</label>
          <input type="file" className="w-full rounded-2xl border border-dashed px-4 py-3 text-sm" />
        </div>
      </div>

      <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-7 py-4 font-black text-white shadow-lg transition hover:scale-[1.01]">
        <Send className="h-5 w-5" />
        Submit Inquiry
      </button>
    </form>
  );
}
