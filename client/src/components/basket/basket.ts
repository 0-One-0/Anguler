import { Component, inject } from '@angular/core';
import { BasketServices } from '../../services/basket-services';

@Component({
  selector: 'app-basket',
  imports: [],
  templateUrl: './basket.html',
  styleUrl: './basket.css',
})
export class Basket {
   private basketService = inject(BasketServices);

   items = this.basketService.getAll();
}
