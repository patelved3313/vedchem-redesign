import { NextResponse } from 'next/server';
import { products, categories } from '@/lib/products';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const search = searchParams.get('search')?.toLowerCase() || '';
  const category = searchParams.get('category') || '';

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      !search ||
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search) ||
      product.short.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search);

    const matchesCategory = !category || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return NextResponse.json({
    success: true,
    count: filteredProducts.length,
    categories,
    products: filteredProducts,
  });
}
