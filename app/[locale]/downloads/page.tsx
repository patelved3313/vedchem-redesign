import { Download, FileText } from 'lucide-react';

const files = [
  {
    title: 'Full Product Catalog',
    text: 'Complete Ved Chem product catalog placeholder.',
  },
  {
    title: 'Vitamins Catalog',
    text: 'Vitamin product category PDF placeholder.',
  },
  {
    title: 'Mineral Salts Catalog',
    text: 'Mineral salts product category PDF placeholder.',
  },
];

export default function DownloadsPage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-r from-red-600 to-orange-500 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-white/80">
            Downloads
          </p>
          <h1 className="mt-4 text-5xl font-black">Catalog Downloads</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">
            Download product catalogs and category brochures. Replace these
            placeholders with actual PDFs when available.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {files.map((file) => (
            <div
              key={file.title}
              className="rounded-[2rem] border bg-white p-7 shadow-sm"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50">
                <FileText className="h-8 w-8 text-orange-500" />
              </div>

              <h2 className="mt-6 text-2xl font-black text-black">
                {file.title}
              </h2>
              <p className="mt-3 leading-relaxed text-gray-600">
                {file.text}
              </p>

              <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 font-bold text-white">
                <Download className="h-4 w-4" />
                Download PDF
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
