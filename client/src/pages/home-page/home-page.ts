import { Component, inject } from '@angular/core';
import { PreviewProduct } from '../../components/preview-product/preview-product';
import { ProductsService } from '../../services/products-service';

@Component({
  selector: 'app-home-page',
  imports: [PreviewProduct],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
 private productsService = inject(ProductsService);
  Products = this.productsService.getAll();

  hero = this.productsService.getRandom();
}
