import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-preview-product',
  imports: [RouterLink],
  templateUrl: './preview-product.html',
  styleUrl: './preview-product.css',
})
export class PreviewProduct {
  News = input.required<boolean>();
  name = input.required<string>();
  brand = input.required<string>();
  price = input.required<number>();
  imageUrl = input.required<string>();
  slug = input.required<string>();
}
