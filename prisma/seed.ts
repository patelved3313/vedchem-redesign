import { PrismaClient } from '@prisma/client';
import { categories, products } from '../lib/products';

const prisma = new PrismaClient();

async function main() {
  for (const c of categories) {
    await prisma.category.upsert({
      where: { slug: c.slug },
      update: { name: c.name, description: c.line },
      create: { name: c.name, slug: c.slug, description: c.line }
    });
  }

  for (const p of products) {
    const category = categories.find(c => c.name === p.category);
    if (!category) continue;
    const dbCategory = await prisma.category.findUniqueOrThrow({ where: { slug: category.slug } });
    await prisma.product.upsert({
      where: { slug: p.slug },
      update: {
        name: p.name,
        categoryId: dbCategory.id,
        shortDescription: p.short,
        description: p.details,
        applications: p.applications,
        features: p.features,
        packaging: p.packaging.join('\n')
      },
      create: {
        name: p.name,
        slug: p.slug,
        categoryId: dbCategory.id,
        shortDescription: p.short,
        description: p.details,
        applications: p.applications,
        features: p.features,
        packaging: p.packaging.join('\n'),
        isFeatured: products.indexOf(p) < 8
      }
    });
  }
}

main().finally(() => prisma.$disconnect());
