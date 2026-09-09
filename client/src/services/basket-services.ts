import { Service, signal } from '@angular/core';

export interface BasketItem {
  slug: string;
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

  add(slug: string) {
    const existing = this.items().find((i) => i.slug === slug);
    if (existing) {
      this.updateQuantity(slug, existing.quantity + 1);
    } else {
      this.save([...this.items(), { slug, quantity: 1 }]);
    }
  }
}
