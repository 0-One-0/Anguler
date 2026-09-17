import { Component, effect, inject, input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProductsService } from '../../services/products-service';
import { ProductDetail } from '../../components/product-detail/product-detail';
import { SimilarProducts } from '../../components/similar-products/similar-products';

@Component({
  selector: 'app-detail-page',
  imports: [ProductDetail, SimilarProducts],
  templateUrl: './detail-page.html',
  styleUrl: './detail-page.css',
})
export class DetailPage {
  private productsService = inject(ProductsService);
  private titleService = inject(Title);

  slug = input.required<string>();
  product = this.productsService.getBySlug(this.slug);

  constructor() {
    effect(() => {
      if (this.product.error()) {
       this.titleService.setTitle("OneFashion");
      } else{
      const name = this.product.value()?.name;
      if (name) {
        this.titleService.setTitle(name);
      }
      }
    });
  }
}
