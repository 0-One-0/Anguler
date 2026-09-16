import { Component, computed, inject, signal } from '@angular/core';
import { ProductsService } from '../../services/products-service';

@Component({
  selector: 'app-admin-list',
  imports: [],
  templateUrl: './admin-list.html',
  styleUrl: './admin-list.css',
})
export class AdminList {
  private productService = inject(ProductsService);
  page = signal(1);
  pageSize = signal(10);

  results = this.productService.getAllAdmin( this.page, this.pageSize);

  pageNumbers = computed(() => {
    const totalPages = this.results.value()?.pages ?? 0;
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  });

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

  deleteProduct(slug: string) {
    this.productService.deleteProduct(slug).subscribe({
      next: () => {
        this.results.reload();
      },
      error: (err) => {
        console.error('Failed to delete product:', err);
      },
    });
  }
}
