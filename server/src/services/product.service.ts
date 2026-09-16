import db from "../db";

export interface Product {
  id: number;
  sku: string;
  slug: string;
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
  publishDate: string;
  description: string;
}

export function getFrontPage(limit: number) {
  const products = db
    .prepare(
      `
    SELECT id, name, slug, sku, brand, price, description,
       image_url AS imageUrl,
       publish_date AS publishDate
        FROM products
    WHERE  publish_date <= datetime('now')
    ORDER BY RANDOM()
    LIMIT ? `,
    )
    .all(limit) as Product[];

  if (!products) {
    throw new Error("Products not found");
  }
  return products;
}

export function getSimilarRandom(slug: string, limit: number) {
  const products = db
    .prepare(
      `
    SELECT id, name, slug, sku, brand, price, description,
       image_url AS imageUrl,
       publish_date AS publishDate
        FROM products
    WHERE  publish_date <= datetime('now')
    AND slug != ?
    ORDER BY RANDOM()
    LIMIT ? `,
    )
    .all(slug, limit) as Product[];

  if (!products) {
    throw new Error("Products not found");
  }
  return products;
}
export function getProductBySlug(slug: string) {
  const product = db
    .prepare(
      `
    SELECT id, name, slug, sku, brand, price, description,
       image_url AS imageUrl,
       publish_date AS publishDate
        FROM products
    WHERE  slug = ?`,
    )
    .get(slug) as Product | undefined;

  if (!product) {
    throw new Error("Product not found");
  }
  return product;
}

export function rowCount(query?: string) {
  if (query) {
    const { total } = db
      .prepare(`SELECT COUNT(*) as total FROM products WHERE name LIKE ?`)
      .get(`%${query}%`) as { total: number };
    return total;
  }
  const { total } = db
    .prepare(`SELECT COUNT(*) as total FROM products`)
    .get() as { total: number };

  return total;
}

export function searchByName(query: string, limit: number, page: number) {
  const offset = (page - 1) * limit;
  const products = db
    .prepare(
      `
    SELECT id, name, slug, sku, brand, price, description,
       image_url AS imageUrl,
       publish_date AS publishDate
        FROM products
    WHERE  name LIKE ?
    ORDER BY id
    LIMIT ? OFFSET ?`,
    )
    .all(`%${query}%`, limit, offset) as Product[] | undefined;

  return products;
}

