import { Component, inject, signal } from '@angular/core';
import { PreviewProduct } from '../../components/preview-product/preview-product';
import { ProductsService } from '../../services/products-service';
import { HeroItem, HeroService } from '../../services/hero-service';

@Component({
  selector: 'app-home-page',
  imports: [PreviewProduct],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
 private productsService = inject(ProductsService);
 private heroService = inject(HeroService);
  Products = this.productsService.getAll();

  hero = this.heroService.getAll();

  
}
