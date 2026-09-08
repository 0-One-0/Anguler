import { Service, signal } from '@angular/core';

export interface Product {
  slug: string;
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
  news: boolean;
  description: string;
}

@Service()
export class ProductsService {
  private readonly products = signal<Product[]>([
    {
      slug: 'denim-jacket',
      name: 'Denim Jacket',
      brand: "Levi's",
      price: 899,
      imageUrl: 'assets/Clothes1.jpg',
      news: true,
      description:
        'A classic denim jacket with a relaxed fit, built to layer over any outfit and get better with every wash.',
    },
    {
      slug: 'wool-sweater',
      name: 'Wool Sweater',
      brand: 'H&M',
      price: 349,
      imageUrl: 'assets/Clothes1.jpg',
      news: false,
      description:
        'A soft wool-blend sweater that keeps you warm without the bulk, perfect for cooler days.',
    },
    {
      slug: 'cargo-pants',
      name: 'Cargo Pants',
      brand: 'Carhartt',
      price: 599,
      imageUrl: 'assets/Clothes1.jpg',
      news: true,
      description:
        'Durable cargo pants with multiple utility pockets, made for everyday wear and tear.',
    },
    {
      slug: 'cotton-hoodie',
      name: 'Cotton Hoodie',
      brand: 'Nike',
      price: 449,
      imageUrl: 'assets/Clothes1.jpg',
      news: false,
      description:
        'A midweight cotton hoodie with a brushed interior, ideal for casual, everyday comfort.',
    },
    {
      slug: 'linen-shirt',
      name: 'Linen Shirt',
      brand: 'Zara',
      price: 299,
      imageUrl: 'assets/Clothes1.jpg',
      news: false,
      description:
        'A breathable linen shirt with a relaxed cut, made to keep you cool in warm weather.',
    },
    {
      slug: 'puffer-vest',
      name: 'Puffer Vest',
      brand: 'The North Face',
      price: 799,
      imageUrl: 'assets/Clothes1.jpg',
      news: true,
      description:
        'A lightweight insulated puffer vest that adds warmth without restricting movement.',
    },
    {
      slug: 'flannel-shirt',
      name: 'Flannel Shirt',
      brand: 'Uniqlo',
      price: 379,
      imageUrl: 'assets/Clothes1.jpg',
      news: false,
      description:
        'A soft brushed-flannel shirt in a classic check pattern, great on its own or as a layer.',
    },
    {
      slug: 'chino-shorts',
      name: 'Chino Shorts',
      brand: 'Gap',
      price: 249,
      imageUrl: 'assets/Clothes1.jpg',
      news: true,
      description:
        'Lightweight chino shorts with a tailored fit, suited for warm-weather everyday wear.',
    },
  ]);

  getAll() {
    return this.products.asReadonly();
  }

  getBySlug(slug: string) {
    return this.products().find((p: { slug: string }) => p.slug === slug);
  }

  getRandom(count: number, excludeSlug: string): Product[] {
    const others = this.products().filter((p) => p.slug !== excludeSlug);
    const shuffled = [...others].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }
}
