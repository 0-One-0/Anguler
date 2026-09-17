import { Component, computed, inject } from '@angular/core';
import { Basket } from "../../components/basket/basket";
import { RouterLink } from "@angular/router";
import { BasketServices } from '../../services/basket-services';

@Component({
  selector: 'app-cart-page',
  imports: [Basket, RouterLink],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css',
})
export class CartPage {
  private basketService = inject(BasketServices);
  private items = this.basketService.getAll();

  itemCount = computed(() => this.items().length);
  subtotal = computed(() => this.items().reduce((sum, item) => sum + item.price * item.quantity, 0));
}
