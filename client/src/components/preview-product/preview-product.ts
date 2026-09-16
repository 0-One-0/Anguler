import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Product, ProductsService } from '../../services/products-service';

@Component({
  selector: 'app-preview-product',
  imports: [RouterLink],
  templateUrl: './preview-product.html',
  styleUrl: './preview-product.css',
})
export class PreviewProduct {
  private productsService = inject(ProductsService);

  product = input.required<Product>();
  newItem = computed( () => this.productsService.newItem(this.product().publishDate));
}
