import { Component, computed, inject, input, signal } from '@angular/core';
import { Product, ProductsService } from '../../services/products-service';
import { BasketServices } from '../../services/basket-services';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  private basketService = inject(BasketServices);
  private productsService = inject(ProductsService);

  product = input.required<Product>();
  newItem = computed(() => this.productsService.newItem(this.product().publishDate));

  detailsOpen = signal(true);

  addToBasket() {
    this.basketService.add(this.product());
  }

  toggleDetails() {
    this.detailsOpen.update((open) => !open);
  }
}
