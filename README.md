# Ved Chem Premium Redesign

A more premium public website scaffold for **Ved Chem Corporation**, rebuilt with a stronger visual direction inspired by the structure of large Indian corporate sites such as HZL, but with original Ved Chem branding, red/orange/white/black colors, product pages, RFQ flow, WhatsApp CTA, downloads placeholders and multilingual-ready routes.

## What changed in this version

- Removed admin-login-heavy direction from the main experience.
- Stronger corporate homepage layout: trust strip, big hero, stat band, product-at-a-glance, featured products, why-choose-us, industries, final CTA.
- Premium UI direction: large typography, high whitespace, dark radial sections, soft cards, chemical grid background, bold product cards.
- Real product categories and product names included in structured data.
- Dedicated product detail pages for every product.
- RFQ page, contact page, downloads placeholders and WhatsApp flow.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Prisma schema included for future database expansion
- API route for RFQ scaffold

## Run locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000/en
```

## Important GitHub upload note

When uploading to GitHub, upload the files/folders from inside this folder so your repo root contains:

```text
app
components
lib
prisma
package.json
README.md
```

Do not upload it so it becomes:

```text
repo/vedchem-premium/app
```
