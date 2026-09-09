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
  // publishDate = input.required<string>();
  // name = input.required<string>();
  // brand = input.required<string>();
  // price = input.required<number>();
  // imageUrl = input.required<string>();
  // slug = input.required<string>();

  private productsService = inject(ProductsService);

  product = input.required<Product>();
  newItem = computed( () => this.productsService.newItem(this.product().publishDate));
}
