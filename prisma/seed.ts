import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const products = [
  {
    name: 'Dicalcium Phosphate',
    slug: 'dcp',
    category: 'Feed Additives',
    short: 'High-quality DCP for animal nutrition.',
    description: 'Used as a dietary supplement in animal feed to provide calcium and phosphorus.',
    applications: ['Poultry Feed', 'Cattle Feed', 'Aquaculture'],
    features: ['High Purity', 'Excellent Bioavailability'],
    packaging: '25kg / 50kg bags',
  },
  {
    name: 'Tricalcium Phosphate',
    slug: 'tcp',
    category: 'Feed Additives',
    short: 'Premium TCP for feed and industrial use.',
    description: 'Provides essential minerals for livestock and industrial applications.',
    applications: ['Feed Industry', 'Food Industry'],
    features: ['Stable Composition', 'High Quality'],
    packaging: '25kg / 50kg bags',
  },
];

async function main() {
  for (const p of products) {
    // create category if not exists
    const dbCategory = await prisma.category.upsert({
      where: { name: p.category },
      update: {},
      create: { name: p.category },
    });

    // create product
    await prisma.product.upsert({
      where: { slug: p.slug },
      update: {},
      create: {
        name: p.name,
        slug: p.slug,
        categoryId: dbCategory.id,
        shortDescription: p.short,
        description: p.description,
        applications: p.applications,
        features: p.features,
        packaging: p.packaging,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log('✅ Seed completed');
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
