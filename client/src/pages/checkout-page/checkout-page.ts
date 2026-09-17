import { Component, computed, inject } from '@angular/core';
import { Basket } from '../../components/basket/basket';
import { PurchaseForm } from '../../components/purchase-form/purchase-form';
import { BasketServices } from '../../services/basket-services';

@Component({
  selector: 'app-checkout-page',
  imports: [Basket, PurchaseForm],
  templateUrl: './checkout-page.html',
  styleUrl: './checkout-page.css',
})
export class CheckoutPage {
  private basketService = inject(BasketServices);

  items = this.basketService.getAll();
  subtotal = computed(() => this.items().reduce((sum, item) => sum + item.price * item.quantity, 0));
}
