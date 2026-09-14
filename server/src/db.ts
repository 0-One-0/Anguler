import Database from "better-sqlite3";

const db = new Database("e-shop.db");

//UNIQ SKU AND NAME
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    price REAL NOT NULL,
    sku TEXT NOT NULL UNIQUE, 
    slug TEXT NOT NULL UNIQUE, 
    image_url TEXT NOT NULL,
    description TEXT NOT NULL,
    brand TEXT NOT NULL,
    publish_date TEXT NOT NULL
  )
`);

export default db;
