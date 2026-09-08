import { Component, computed, inject, input, OnInit } from '@angular/core';
import { Product, ProductsService } from '../../services/products-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-similar-products',
  imports: [RouterLink],
  templateUrl: './similar-products.html',
  styleUrl: './similar-products.css',
})
export class SimilarProducts {
  slug = input.required<string>();
  private productsService = inject(ProductsService);

  

  products = computed(() => this.productsService.getRandom(6, this.slug()));
  
}
