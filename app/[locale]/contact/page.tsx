import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import RFQForm from '@/components/RFQForm';

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-r from-red-600 to-orange-500 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-white/80">
            Contact Us
          </p>
          <h1 className="mt-4 text-5xl font-black">Request a Quote</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90">
            Send your product requirement and our team will respond with focused
            support for sourcing, packaging, availability, and export needs.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-6">
          <div className="rounded-[2rem] border bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-black text-black">Get in Touch</h2>
            <p className="mt-3 text-gray-600">
              Have a requirement? Send your inquiry and our team will get back
              to you shortly.
            </p>

            <div className="mt-7 space-y-5 text-gray-700">
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-600" />
                +91 9925256056
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-600" />
                vedchem2011@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-red-600" />
                India
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] bg-black p-7 text-white">
            <MessageCircle className="h-8 w-8 text-orange-400" />
            <h3 className="mt-4 text-2xl font-black">Need Help?</h3>
            <p className="mt-2 text-gray-300">
              Chat with us directly on WhatsApp for faster communication.
            </p>
            <a
              href="https://wa.me/919925256056"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 font-bold text-white"
            >
              Chat Now
            </a>
          </div>
        </div>

        <RFQForm />
      </section>
    </main>
  );
}
