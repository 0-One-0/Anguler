# inlämning-ng

An e-shop style school project with an Angular client and an Express + SQLite server.

## Project structure

```
client/   Angular frontend (Angular CLI, standalone components)
server/   Express backend with a better-sqlite3 database
```

## Getting started

### Server

```bash
cd server
npm install
npm run dev     # starts the API with tsx watch on http://localhost:8000
```

Other server scripts:
- `npm run build` — compiles TypeScript to `dist/`
- `npm run start` — runs the compiled server from `dist/server.js`

The database is a local SQLite file (`e-shop.db`) created automatically on first run, with a single `products` table (`name`, `price`, `sku`, `slug`, `image_url`, `description`, `brand`, `publish_date`).

### Client

```bash
cd client
npm install
ng serve, # http://localhost:4200
```

## API endpoints

All routes are mounted under `/api`.

### Products — `/api/products`

| Method | Path              | Description |
|--------|--------------------|--------------|
| GET    | `/`                | Front page products. Query param `limit` (required, must be > 0). |
| GET    | `/search`          | Search products by name. Query params: `searchquery`, `pageSize`, `page`. Returns `{ products, totalRows, pages }`. |
| GET    | `/:slug`           | Get a single product by its slug. |
| GET    | `/:slug/similar`   | Get 6 random products similar to the given slug. |

### Admin — `/api/admin`

| Method | Path                | Description |
|--------|----------------------|--------------|
| GET    | `/products`          | Paginated list of all products for the admin view. Query params: `pageSize`, `page`. Returns `{ products, totalRows, pages }`. |
| POST   | `/products`          | Create a new product from the request body. Returns the created product (`201`), or `409` if it violates a unique constraint (name/sku/slug). |
| POST   | `/products/testdata` | Seeds the database with a fixed set of test products (see `server/src/testData.ts`). Useful for populating the shop with demo data without using the add-product form. Returns `201` with a message: `"Products added for testing"`, or `"Products has already been added for testing"` if that data is already in the database (insert fails silently per row and reports the conflict instead of throwing). |
| DELETE | `/products/:slug`     | Delete a product by slug. Returns `{ deleted: slug }`, or `404` if no product matched. |

## Notes

- `name`, `sku`, and `slug` are all `UNIQUE` columns, so re-adding the same test data (or a product with a duplicate name/SKU/slug) will fail instead of creating duplicates.
- The admin "add test data" endpoint (`POST /api/admin/products/testdata`) is a shortcut for development/testing — it lets you quickly fill the shop with sample products instead of adding them one by one through the admin form.
