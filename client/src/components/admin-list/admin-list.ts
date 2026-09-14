import { Component, inject, signal } from '@angular/core';
import { Product, ProductsService } from '../../services/products-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-list',
  imports: [],
  templateUrl: './admin-list.html',
  styleUrl: './admin-list.css',
})
export class AdminList {
  private productService = inject(ProductsService);

  items = this.productService.getAllAdmin();
}
