import { PrismaClient } from '@prisma/client';
import { categories, products } from '../lib/products';

const prisma = new PrismaClient();

async function main() {
  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: {
        name: category.name,
        description: category.line,
      },
      create: {
        name: category.name,
        slug: category.slug,
        description: category.line,
      },
    });
  }

  for (const product of products) {
    const dbCategory = await prisma.category.findUnique({
      where: {
        slug: categories.find((c) => c.name === product.category)?.slug || 'other-chemicals',
      },
    });

    if (!dbCategory) continue;

    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {
        name: product.name,
        categoryId: dbCategory.id,
        shortDescription: product.short,
        description: product.description,
        applications: product.applications,
        features: product.features,
        packaging: product.packaging,
      },
      create: {
        name: product.name,
        slug: product.slug,
        categoryId: dbCategory.id,
        shortDescription: product.short,
        description: product.description,
        applications: product.applications,
        features: product.features,
        packaging: product.packaging,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
