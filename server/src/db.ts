import Database from "better-sqlite3";

const db = new Database("e-shop.db");

//UNIQ SKU AND NAME
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price INTEGER NOT NULL,
    sku TEXT NOT NULL, 
    image_url TEXT NOT NULL,
    description TEXT NOT NULL,
    brand TEXT NOT NULL,
  )
`);

export default db;
