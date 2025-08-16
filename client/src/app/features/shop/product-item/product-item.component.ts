import { MatButton } from '@angular/material/button';
import { Component, inject, Input } from '@angular/core';
import { Product } from '../../../shared/Models/product';
import {
  MatCard,
  MatCardContent,
  MatCardActions,
} from '@angular/material/card';

import { CurrencyPipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-product-item',
  imports: [
    MatCard,
    MatCardContent,
    CurrencyPipe,
    MatCardActions,
    MatButton,
    MatIcon,
    RouterLink,
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent {
  @Input() product?: Product;
  cartService = inject(CartService);
}
