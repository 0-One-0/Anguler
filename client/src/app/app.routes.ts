import { Routes } from '@angular/router';
import { HomePage } from '../pages/home-page/home-page';
import { SearchPage } from '../pages/search-page/search-page';
import { DetailPage } from '../pages/detail-page/detail-page';
import { CartPage } from '../pages/cart-page/cart-page';
import { AdminPage } from '../pages/admin-page/admin-page';
import { MainLayout } from '../layout/main-layout/main-layout';
import { CheckoutPage } from '../pages/checkout-page/checkout-page';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: HomePage },
      { path: 'search', component: SearchPage },
      { path: 'product/:slug', component: DetailPage },
      { path: 'basket', component: CartPage },
      { path: 'checkout', component: CheckoutPage },
    ],
  },
  { path: 'admin', component: AdminPage },
];
