import { Routes } from '@angular/router';
import { ShopComponent } from './features/shop/shop.component';
import { HomeComponent } from './features/home/home.component';
import { ContactComponent } from './features/contact/contact.component';
import { UserComponent } from './features/user/user.component';
import { OrdersComponent } from './features/user/orders/orders.component';
import { ProductDetailsComponent } from './features/shop/product-details/product-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: 'shop/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'user/:id/',
    component: UserComponent,
  },
  {
    path: 'user/:id/order-history',
    component: OrdersComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
