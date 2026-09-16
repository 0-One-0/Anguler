import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products-service';
import { PreviewProduct } from '../../components/preview-product/preview-product';

@Component({
  selector: 'app-search-page',
  imports: [PreviewProduct],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css',
})
export class SearchPage {
  private route = inject(ActivatedRoute);
  private productsService = inject(ProductsService);

  page = signal(1);
  pageSize = signal(10);

  private queryParams = toSignal(this.route.queryParamMap);
  q = computed(() => this.queryParams()?.get('q') ?? '');
  results = this.productsService.searchProducts(this.q, this.page, this.pageSize);

  pageNumbers = computed(() => {
    const totalPages = this.results.value()?.pages ?? 0;
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  });

  constructor() {
    effect(() => {
      this.q();
      this.page.set(1);
    });
  }

  setPage(page: number) {
    if (this.page() === page) {
      return;
    }
    this.page.set(page);
  }
  increment() {
    if (this.page() === this.results.value()?.pages) {
      return;
    }
    this.page.update((current) => current + 1);
  }
  decrement() {
    if (this.page() === 1) {
      return;
    }
    this.page.update((current) => current - 1);
  }
}
