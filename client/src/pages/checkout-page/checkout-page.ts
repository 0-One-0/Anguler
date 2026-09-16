import { Component } from '@angular/core';
import { Basket } from "../../components/basket/basket";
import { PurchaseForm } from '../../components/purchase-form/purchase-form';

@Component({
  selector: 'app-checkout-page',
  imports: [Basket, PurchaseForm],
  templateUrl: './checkout-page.html',
  styleUrl: './checkout-page.css',
})
export class CheckoutPage {

}
