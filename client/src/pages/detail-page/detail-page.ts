import { Component, computed, inject, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products-service';
import { ProductDetail } from "../../components/product-detail/product-detail";
import { SimilarProducts } from "../../components/similar-products/similar-products";

@Component({
  selector: 'app-detail-page',
  imports: [ProductDetail, SimilarProducts],
  templateUrl: './detail-page.html',
  styleUrl: './detail-page.css',
})
export class DetailPage {
  
  private productsService = inject(ProductsService);

  

  slug = input.required<string>();
  product = computed(() => this.productsService.getBySlug(this.slug()))
  
  
  
}
