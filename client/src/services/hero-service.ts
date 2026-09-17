import { Service, signal } from '@angular/core';
export interface HeroItem {
  slug: string;
  imageUrl: string;
  title: string;
  description: string;
}
@Service()
export class HeroService {

  private readonly heroitems = signal<HeroItem[]>([
    {
      slug: 'hero-1',
      imageUrl: 'assets/hero/hero1.jpg',
      title: 'About One Fashion',
      description:
        'One Fashion is an independent streetwear label built for the city. We work with a small roster of brands and in-house drops to bring considered, wearable pieces to your wardrobe.',
    },
  ]);

   private readonly currentIndex = signal(0);

    getAll() {
    return this.heroitems()[this.currentIndex()];
  }
}
