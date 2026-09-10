import { Component, inject, OnInit, signal } from '@angular/core';
import { BasketServices } from '../../services/basket-services';
import { single } from 'rxjs';

@Component({
  selector: 'app-basket',
  imports: [],
  templateUrl: './basket.html',
  styleUrl: './basket.css',
})
export class Basket implements OnInit {
   private basketService = inject(BasketServices);

   

   items = this.basketService.getAll();
   ngOnInit() {
    console.log(this.items());
    
   }
   deleteItem(slug: string){
    this.basketService.remove(slug)
   }
}
