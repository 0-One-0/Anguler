import db from "../db";
import { testData } from "../testData";

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

export function getAllProducts(){
  const products = db
    .prepare(
      `
    SELECT id, name, slug, sku, brand, price, description,
       image_url AS imageUrl,
       publish_date AS publishDate
        FROM products `,
    )
    .all() as Product[];

  if (!products) {
    throw new Error("Products not found");
  }
    return products;
}

export function getSimilarRandom(slug: string,limit: number) {
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

export function addTestData() {
  const insert = db.prepare(`
    INSERT INTO products (name, slug, sku, brand, price, description, image_url, publish_date)
    VALUES (@name, @slug, @sku, @brand, @price, @description, @imageUrl, @publishDate)
  `);

  for (const product of testData) {
    try {
      insert.run(product);
    } catch (error) {
      return "Products has already been added for testing";
    }
  }

  return "Products added for testing";
}
export function addProduct(newProduct: Omit<Product, 'id'>): Product {
  const insert = db.prepare(`
    INSERT INTO products (name, slug, sku, brand, price, description, image_url, publish_date)
    VALUES (@name, @slug, @sku, @brand, @price, @description, @imageUrl, @publishDate)
  `);

  const info = insert.run(newProduct);

  return { id: info.lastInsertRowid as number, ...newProduct };
}
