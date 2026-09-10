import { Component, inject, input } from '@angular/core';
import { Product } from '../../services/products-service';
import { BasketServices } from '../../services/basket-services';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  
  private basketService = inject(BasketServices);
  product = input.required<Product>();


  addToBasket() {
    this.basketService.add(this.product());
  }
}
