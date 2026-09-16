import db from "../db";
import { testData } from "../testData";
import { Product } from "./product.service";

export function getAllProducts(limit: number, page: number) {
  const offset = (page - 1) * limit;

  const products = db
    .prepare(
      `
    SELECT id, name, slug, sku, brand, price, description,
       image_url AS imageUrl,
       publish_date AS publishDate
        FROM products
        ORDER BY id
    LIMIT ? OFFSET ?`,
    )
    .all(limit, offset) as Product[];

  if (!products) {
    throw new Error("Products not found");
  }
  return products;
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

export function addProduct(newProduct: Omit<Product, "id">): Product {
  const insert = db.prepare(`
    INSERT INTO products (name, slug, sku, brand, price, description, image_url, publish_date)
    VALUES (@name, @slug, @sku, @brand, @price, @description, @imageUrl, @publishDate)
  `);

  const info = insert.run(newProduct);

  return { id: info.lastInsertRowid as number, ...newProduct };
}

export function deleteProduct(slug: string) {
  const result = db.prepare(`DELETE FROM products WHERE slug = ?`).run(slug);

  if (result.changes === 0) {
    throw new Error("Product not found");
  }

  return { deleted: slug };
}
