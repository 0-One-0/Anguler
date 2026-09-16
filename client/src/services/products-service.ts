import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Service } from '@angular/core';

export interface Product {
  sku: string;
  slug: string;
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
  publishDate: string;
  description: string;
}

@Service()
export class ProductsService {
  private http = inject(HttpClient);
  getAll(limit: number) {
    return httpResource<Product[]>(() => `/api/products?limit=${limit}`);
  }

  getAllAdmin(page: () => number, pageSize: () => number) {
    return httpResource<{ products: Product[]; pages: number; totalRows: number }>(() => ({
      url: '/api/admin/products',
      params: {
        page: page(),
        pageSize: pageSize(),
      },
    }));
  }

  getBySlug(slug: () => string) {
    return httpResource<Product>(() => `/api/products/${slug()}`);
  }

  getRandom(excludeSlug: () => string) {
    return httpResource<Product[]>(() => `/api/products/${excludeSlug()}/similar`);
  }

  addProduct(newProduct: Product) {
    return this.http.post<Product>('/api/admin/products', newProduct);
  }

  deleteProduct(slug: string) {
    return this.http.delete(`/api/admin/products/${slug}`);
  }

  searchProducts(serachQuery: () => string, page: () => number, pageSize: () => number) {
    return httpResource<{ products: Product[]; pages: number; totalRows: number }>(() => ({
      url: '/api/products/search',
      params: {
        searchquery: serachQuery(),
        page: page(),
        pageSize: pageSize(),
      },
    }));
  }

  newItem(publishDate: string): boolean {
    const published = new Date(publishDate);
    const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
    return Date.now() - published.getTime() < sevenDaysMs;
  }
}
