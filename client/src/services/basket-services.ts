import { Service, signal } from '@angular/core';
import { Product } from './products-service';

export interface BasketItem {
  slug: string;
  name: string;
  price: number;
  quantity: number;
}

@Service()
export class BasketServices {
  private items = signal<BasketItem[]>(JSON.parse(localStorage.getItem('basket') ?? '[]'));

  private save(updated: BasketItem[]) {
    this.items.set(updated);
    localStorage.setItem('basket', JSON.stringify(updated));
  }

  getAll() {
    return this.items.asReadonly();
  }

  updateQuantity(slug: string, quantity: number) {
    const updated = this.items().map((item) => (item.slug === slug ? { ...item, quantity } : item));
    this.save(updated);
  }

  add(product: Product) {
    const existing = this.items().find((i) => i.slug === product.slug);
    if (existing) {
      this.updateQuantity(product.slug, existing.quantity + 1);
    } else {
      this.save([
        ...this.items(),
        { slug: product.slug, name: product.name, price: product.price, quantity: 1 },
      ]);
    }
  }
  remove(slug: string) {
  const updated = this.items().filter((item) => item.slug !== slug);
  this.save(updated);
}
}
