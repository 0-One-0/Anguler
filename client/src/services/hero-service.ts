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
      title: 'Everyday Style, Redefined',
      description:
        'Everyday fashion for every season — curated pieces that keep you looking sharp, no matter where the day takes you.',
    },
  ]);

   private readonly currentIndex = signal(0);

    getAll() {
    return this.heroitems()[this.currentIndex()];
  }
}
