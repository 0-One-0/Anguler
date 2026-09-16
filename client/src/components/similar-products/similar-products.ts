import { Component, ElementRef, inject, input, viewChild } from '@angular/core';
import { ProductsService } from '../../services/products-service';
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

  products = this.productsService.getRandom(this.slug);

  private scroller = viewChild<ElementRef<HTMLDivElement>>('scroller');

  scrollPrev() {
    this.scroller()?.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollNext() {
    this.scroller()?.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
