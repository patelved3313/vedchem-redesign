import RFQForm from '@/components/RFQForm';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

export default function RFQ() {
  return (
    <main>
      <section className="dark-radial py-24 text-white">
        <div className="container">
          <p className="font-black uppercase tracking-[.2em] text-vedOrange">
            Request a Quote
          </p>

          <h1 className="mt-4 text-6xl font-black tracking-[-.05em]">
            Tell us what you need.
          </h1>

          <p className="mt-5 max-w-2xl text-white/60">
            Send product, grade, quantity and destination details. Ved Chem will
            respond through email or WhatsApp.
          </p>
        </div>
      </section>

      <section className="container grid gap-8 py-14 lg:grid-cols-[360px_1fr]">
        <aside className="grid h-fit gap-5">
          <div className="rounded-5xl bg-vedSoft p-8">
            <h2 className="text-2xl font-black">Get in touch</h2>

            <div className="mt-6 grid gap-4 text-sm text-black/60">
              <span className="flex gap-3">
                <Phone className="h-5 w-5 text-vedRed" />
                +91 9925256056
              </span>

              <span className="flex gap-3">
                <Mail className="h-5 w-5 text-vedRed" />
                vedchem2011@gmail.com
              </span>

              <span className="flex gap-3">
                <MapPin className="h-5 w-5 text-vedRed" />
                India
              </span>
            </div>
          </div>

          <a
            href="https://wa.me/919925256056"
            className="rounded-4xl bg-black p-7 font-black text-white"
          >
            <MessageCircle className="mb-4 h-8 w-8 text-green-400" />
            Chat directly on WhatsApp
          </a>
        </aside>

        <RFQForm />
      </section>
    </main>
  );
}
