import { MatIcon } from '@angular/material/icon';
import { Component, inject } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { CartService } from '../../core/services/cart.service';
import { CartItemComponent } from "./cart-item/cart-item.component";
import { OrderSummaryComponent } from "../../shared/components/order-summary/order-summary.component";

@Component({
  selector: 'app-cart',
  imports: [MatBadge, MatIcon, CartItemComponent, OrderSummaryComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartService = inject(CartService);
}
