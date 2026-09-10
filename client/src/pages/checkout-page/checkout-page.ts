import { Component } from '@angular/core';
import { Basket } from "../../components/basket/basket";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-checkout-page',
  imports: [Basket, RouterLink],
  templateUrl: './checkout-page.html',
  styleUrl: './checkout-page.css',
})
export class CheckoutPage {

}
