import { Component, computed, inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { BasketServices } from '../../services/basket-services';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  private router = inject(Router);
  private basketService = inject(BasketServices);

  items = this.basketService.getAll();

  amountItems = computed(() => this.items().reduce((total, item) => total + item.quantity, 0));
  onSearch(query: string) {
    if(!query){
      return
    }
    console.log(query);
    this.router.navigate(['/search'], { queryParams: { q: query } });
  }
}
