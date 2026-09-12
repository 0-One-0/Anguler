import { Component, inject, OnInit, signal } from '@angular/core';
import { BasketServices } from '../../services/basket-services';

@Component({
  selector: 'app-basket',
  imports: [],
  templateUrl: './basket.html',
  styleUrl: './basket.css',
})
export class Basket implements OnInit {
  private basketService = inject(BasketServices);

  amount = 10;

  amountArray: number[] = [];

  i = 0;

  items = this.basketService.getAll();
  ngOnInit() {
    console.log(this.items());

    for (this.i = 1; this.i <= 10; this.i++) {
      this.amountArray.push(this.i);
    }

    console.log(this.amountArray)
  }
  updateQuantity( slug: string, quantity: string){
    const parsedQuantity = Number(quantity);
    this.basketService.updateQuantity(slug, parsedQuantity)
  }
  deleteItem(slug: string) {
    this.basketService.remove(slug);
  }

}
