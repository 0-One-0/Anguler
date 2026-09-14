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

    if(!products){
      return "error";
    }else{
      return products;
    }
}

export function addTestData( ){
  const insert = db.prepare(`
    INSERT INTO products (name, slug, sku, brand, price, description, image_url, publish_date)
    VALUES (@name, @slug, @sku, @brand, @price, @description, @imageUrl, @publishDate)
  `);

  for (const product of testData) {
    try{
      insert.run(product);
    }catch(error){
      return "Products has already been added for testing";
    }
    
    
  }

  return "Products added for testing";

}
