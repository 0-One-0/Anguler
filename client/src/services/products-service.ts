import { Service, signal } from '@angular/core';

export interface Product {
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
  private readonly products = signal<Product[]>([
    {
      slug: 'satin-bomber-jacket',
      name: 'Satin Bomber Jacket',
      brand: "Levi's",
      price: 1099,
      imageUrl: 'assets/clothes/jc-gellidon-81fEanp-xXc-unsplash.jpg',
      publishDate: '2026-09-07',
      description:
        'A glossy satin bomber jacket with a bold script graphic and contrast lining, built to be the loudest layer in the room.',
    },
    {
      slug: 'oversized-graphic-sweatshirt',
      name: 'Oversized Graphic Sweatshirt',
      brand: 'H&M',
      price: 459,
      imageUrl: 'assets/clothes/jc-gellidon-4TQJPykwpR0-unsplash.jpg',
      publishDate: '2026-08-15',
      description:
        'A boxy, oversized sweatshirt with a retro varsity print, paired easily with joggers for an off-duty look.',
    },
    {
      slug: 'vintage-graphic-tee',
      name: 'Vintage Graphic T-Shirt',
      brand: 'Carhartt',
      price: 299,
      imageUrl: 'assets/clothes/bailey-alexander-x3x6yWSBCjU-unsplash.jpg',
      publishDate: '2026-09-08',
      description:
        'A relaxed cotton tee with a faded vintage-style graphic print, soft-washed for a broken-in feel from day one.',
    },
    {
      slug: 'oversized-cotton-tee',
      name: 'Oversized Cotton Tee',
      brand: 'Nike',
      price: 349,
      imageUrl: 'assets/clothes/maria-fernanda-pissioli-rb8j-h12fJs-unsplash.jpg',
      publishDate: '2026-07-20',
      description:
        'A heavyweight cotton tee with a clean back print, cut long and oversized for an easy, laid-back silhouette.',
    },
    {
      slug: 'colorblock-windbreaker',
      name: 'Color-Block Windbreaker',
      brand: 'Zara',
      price: 699,
      imageUrl: 'assets/clothes/mark-adriane-bO3S03I2Aw8-unsplash.jpg',
      publishDate: '2026-09-04',
      description:
        'A lightweight color-block windbreaker with a fleece-lined hood, made to stand out on cold-weather city walks.',
    },
    {
      slug: 'vintage-oversized-shirt',
      name: 'Vintage Oversized Shirt',
      brand: 'Uniqlo',
      price: 399,
      imageUrl: 'assets/clothes/mike-von-dwvtsZsyTZw-unsplash.jpg',
      publishDate: '2026-06-10',
      description:
        'A dark, oversized vintage shirt with a faded emblem print, styled loose for a worn-in, thrifted feel.',
    },
    {
      slug: 'yellow-puffer-jacket',
      name: 'Yellow Puffer Jacket',
      brand: 'The North Face',
      price: 899,
      imageUrl: 'assets/clothes/mike-von-WcwCGMETMaM-unsplash.jpg',
      publishDate: '2026-09-09',
      description:
        'A high-shine puffer jacket in a statement yellow, insulated for warmth without weighing you down.',
    },
    {
      slug: 'alien-graphic-hoodie',
      name: 'Alien Graphic Hoodie',
      brand: 'Gap',
      price: 429,
      imageUrl: 'assets/clothes/minh-dang-20Bxjm6XrYM-unsplash.jpg',
      publishDate: '2026-05-01',
      description:
        'A cropped graphic hoodie with a neon alien print, paired here with matching neon joggers for a full set look.',
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

  newItem(publishDate: string): boolean {
    const published = new Date(publishDate);
    const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
    return Date.now() - published.getTime() < sevenDaysMs;
  }
}
