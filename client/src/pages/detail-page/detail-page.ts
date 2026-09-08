import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products-service';
import { ProductDetail } from "../../components/product-detail/product-detail";

@Component({
  selector: 'app-detail-page',
  imports: [ProductDetail],
  templateUrl: './detail-page.html',
  styleUrl: './detail-page.css',
})
export class DetailPage {
  private route = inject(ActivatedRoute);
  private productsService = inject(ProductsService);

  slug = this.route.snapshot.paramMap.get('slug') ?? '';
  product = this.productsService.getBySlug(this.slug);
  
  
  
}
