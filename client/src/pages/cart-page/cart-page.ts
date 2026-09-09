import { Component } from '@angular/core';
import { Basket } from "../../components/basket/basket";

@Component({
  selector: 'app-cart-page',
  imports: [Basket],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css',
})
export class CartPage {}
