import { Component, inject } from '@angular/core';
import { BasketItem, BasketServices } from '../../services/basket-services';

@Component({
  selector: 'app-basket',
  imports: [],
  templateUrl: './basket.html',
  styleUrl: './basket.css',
})
export class Basket {
  private basketService = inject(BasketServices);

  items = this.basketService.getAll();

  increment(item: BasketItem) {
    this.basketService.updateQuantity(item.slug, item.quantity + 1);
  }

  decrement(item: BasketItem) {
    if (item.quantity <= 1) {
      return;
    }
    this.basketService.updateQuantity(item.slug, item.quantity - 1);
  }

  deleteItem(slug: string) {
    this.basketService.remove(slug);
  }
}
