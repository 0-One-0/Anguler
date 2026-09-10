import { Component, signal } from '@angular/core';
import { Basket } from "../../components/basket/basket";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-cart-page',
  imports: [Basket, RouterLink],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css',
})
export class CartPage {
  titel = signal("Cart");

  toCheckout(){
    this.titel.set("Checkout");
  }
}
