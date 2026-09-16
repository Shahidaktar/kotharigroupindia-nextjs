// src/app/[catSlug]/[prodSlug]/page.tsx

import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import AppShell from '@/components/AppShell';
import { ProductDetailPage } from '@/components/ProductDetailPage';
import { ProductDetailSkeleton } from '@/components/ProductDetailSkeleton';
import ProductPageLayout from '@/components/ProductPageLayout';
import { productsData } from '@/data/products';
import { findProductBySlugs, getCategorySlug, getProductSlug, isPipeCategorySlug } from '@/lib/slug';
import { fetchWpProductBySlug } from '@/lib/wp-product';
import type { ProductItem } from '@/lib/types';

type Params = { catSlug: string; prodSlug: string };

export const revalidate = 600;
export const dynamicParams = true;

export function generateStaticParams() {
  return productsData.map((p) => ({
    catSlug: getCategorySlug(p.category),
    prodSlug: getProductSlug(p),
  }));
}

export async function generateMetadata({ params }: { params: Params | Promise<Params> }) {
  const { catSlug, prodSlug } = await Promise.resolve(params);

  // Cached — shares one request with the page body below
  try {
    const wpProduct = await fetchWpProductBySlug(prodSlug);
    if (wpProduct) {
      // Use Yoast SEO title if it exists, otherwise fallback to product name
      const title = wpProduct.seoTitle || `${wpProduct.name} | Kothari Group`;

      // Use Yoast SEO description if it exists, otherwise fallback to stripped specifications HTML
      const description = wpProduct.seoDescription ||
        (wpProduct.specificationsHtml?.replace(/<[^>]*>/g, '').slice(0, 160) || '');

      return {
        title,
        description,
        openGraph: {
          title,
          description,
          images: [wpProduct.mainImage],
        },
      };
    }
  } catch {
    // Fall through to static metadata on WP failure
  }

  // Fallback to static data (instant, no network)
  const product = findProductBySlugs(catSlug, prodSlug, productsData);
  if (!product) return { title: 'Product Not Found | Kothari Group' };
  return {
    title: `${product.name} | Kothari Group`,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [product.image],
    },
  };
}

// Async island: streams in after the shell (header/footer) is already visible.
async function ProductDetailLoader({ catSlug, prodSlug, staticProduct }: { catSlug: string; prodSlug: string; staticProduct: ProductItem | undefined }) {
  const wpProduct = await fetchWpProductBySlug(prodSlug).catch(() => null);

  if (!wpProduct && !staticProduct) notFound();

  return (
    <ProductDetailPage
      product={staticProduct || undefined}
      wp={wpProduct || undefined}
      theme={isPipeCategorySlug(catSlug) ? 'blue' : 'green'}
    />
  );
}

export default async function CategoryProductPage({ params }: { params: Params | Promise<Params> }) {
  const { catSlug, prodSlug } = await Promise.resolve(params);

  // Sync + instant — no network, so the shell renders immediately.
  const staticProduct = findProductBySlugs(catSlug, prodSlug, productsData);

  return (
    <AppShell>
      <ProductPageLayout catSlug={catSlug}>
        <Suspense fallback={<ProductDetailSkeleton />}>
          <ProductDetailLoader catSlug={catSlug} prodSlug={prodSlug} staticProduct={staticProduct} />
        </Suspense>
      </ProductPageLayout>
    </AppShell>
  );
}
