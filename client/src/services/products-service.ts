import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';

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
  private readonly products = signal<Product[]>([
    {
      sku: 'LEV-SBJ-001',
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
      sku: 'HM-OGS-002',
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
      sku: 'CHT-VGT-003',
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
      sku: 'NIK-OCT-004',
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
      sku: 'ZRA-CBW-005',
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
      sku: 'UNQ-VOS-006',
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
      sku: 'TNF-YPJ-007',
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
      sku: 'GAP-AGH-008',
      slug: 'alien-graphic-hoodie',
      name: 'Alien Graphic Hoodie',
      brand: 'Gap',
      price: 429,
      imageUrl: 'assets/clothes/minh-dang-20Bxjm6XrYM-unsplash.jpg',
      publishDate: '2026-05-01',
      description:
        'A cropped graphic hoodie with a neon alien print, paired here with matching neon joggers for a full set look.',
    },
    {
      sku: 'BSK-KFC-009',
      slug: 'knot-front-cami-top',
      name: 'Knot-Front Cami Top',
      brand: 'Bershka',
      price: 199,
      imageUrl: 'assets/clothes/Clothes1.jpg',
      publishDate: '2026-09-10',
      description:
        'A neon pink cami top with a knotted front hem, cut slim on top for an easy pairing with wide-leg cargos.',
    },
    {
      sku: 'MDT-OTC-010',
      slug: 'oversized-camel-trench-coat',
      name: 'Oversized Camel Trench Coat',
      brand: 'Massimo Dutti',
      price: 1299,
      imageUrl: 'assets/clothes/trench-coat-camel.jpg',
      publishDate: '2026-08-25',
      description:
        'A wool-blend trench in warm camel with a relaxed, oversized cut, tailored enough to layer over both denim and trousers.',
    },
    {
      sku: 'COS-OUT-011',
      slug: 'oversized-utility-trench-coat',
      name: 'Oversized Utility Trench Coat',
      brand: 'COS',
      price: 1499,
      imageUrl: 'assets/clothes/trench-coat-brown.jpg',
      publishDate: '2026-09-11',
      description:
        'A brown cotton trench with patch pockets and a boxy, oversized silhouette, built for layering over knitwear in colder months.',
    },
    {
      sku: 'HM-CBJ-012',
      slug: 'cropped-bomber-jacket',
      name: 'Cropped Bomber Jacket',
      brand: 'H&M',
      price: 649,
      imageUrl: 'assets/clothes/jc-gellidon-81fEanp-xXc-unsplash.jpg',
      publishDate: '2026-08-18',
      description:
        'A cropped bomber cut short at the waist, finished with ribbed trims and a smooth matte shell for everyday layering.',
    },
    {
      sku: 'ZRA-GPT-013',
      slug: 'graphic-print-tee',
      name: 'Graphic Print Tee',
      brand: 'Zara',
      price: 249,
      imageUrl: 'assets/clothes/bailey-alexander-x3x6yWSBCjU-unsplash.jpg',
      publishDate: '2026-06-05',
      description:
        'A soft cotton tee with a bold front graphic, cut with a regular fit for a simple, everyday staple.',
    },
    {
      sku: 'NIK-TFH-014',
      slug: 'tech-fleece-hoodie',
      name: 'Tech Fleece Hoodie',
      brand: 'Nike',
      price: 549,
      imageUrl: 'assets/clothes/minh-dang-20Bxjm6XrYM-unsplash.jpg',
      publishDate: '2026-09-10',
      description:
        'A lightweight tech fleece hoodie with a brushed interior, built for warmth on cool days without the bulk.',
    },
    {
      sku: 'UNQ-PPV-015',
      slug: 'packable-puffer-vest',
      name: 'Packable Puffer Vest',
      brand: 'Uniqlo',
      price: 389,
      imageUrl: 'assets/clothes/mike-von-WcwCGMETMaM-unsplash.jpg',
      publishDate: '2026-04-12',
      description:
        'A lightweight puffer vest that packs down into its own pocket, giving you an easy extra layer for on-and-off days.',
    },
    {
      sku: 'GAP-OTS-016',
      slug: 'oversized-tee',
      name: 'Oversized Tee',
      brand: 'Gap',
      price: 199,
      imageUrl: 'assets/clothes/maria-fernanda-pissioli-rb8j-h12fJs-unsplash.jpg',
      publishDate: '2026-07-22',
      description:
        'A plain oversized tee in heavyweight cotton, left unprinted for a clean, minimal base layer.',
    },
    {
      sku: 'ZRA-WBT-017',
      slug: 'wool-blend-trench-coat',
      name: 'Wool-Blend Trench Coat',
      brand: 'Zara',
      price: 999,
      imageUrl: 'assets/clothes/trench-coat-camel.jpg',
      publishDate: '2026-08-30',
      description:
        'A tailored wool-blend trench with a classic collar and belted waist, dressed here in a warm camel tone.',
    },
    {
      sku: 'HM-RCT-018',
      slug: 'ribbed-cami-top',
      name: 'Ribbed Cami Top',
      brand: 'H&M',
      price: 149,
      imageUrl: 'assets/clothes/Clothes1.jpg',
      publishDate: '2026-09-06',
      description:
        'A ribbed jersey cami with adjustable straps, made to layer under jackets or wear alone in warmer weather.',
    },
  ]);
  private http = inject(HttpClient);
  getAll(limit: number) {
    return httpResource<Product[]>(() => `/api/products?limit=${limit}`);
  }

  getAllAdmin() {
    return httpResource<Product[]>(() => `/api/admin/products`);
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

  newItem(publishDate: string): boolean {
    const published = new Date(publishDate);
    const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
    return Date.now() - published.getTime() < sevenDaysMs;
  }
}
