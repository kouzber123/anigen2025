import {
  loadStripe,
  Stripe,
  StripeAddressElement,
  StripeAddressElementOptions,
  StripeElements,
} from '@stripe/stripe-js';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { CartService } from './cart.service';
import { Cart } from '../../shared/Models/cart';
import { firstValueFrom, map } from 'rxjs';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root',
})
export class StripeService {
  baseUrl = environment.apiUrl;
  private cartService = inject(CartService);
  private http = inject(HttpClient);
  private stripePromise: Promise<Stripe | null>;
  private elements?: StripeElements;
  private addressElement?: StripeAddressElement;
  private accountService = inject(AccountService);
  constructor() {
    this.stripePromise = loadStripe(environment.stripePublicKey);
  }

  getStripeInstance() {
    return this.stripePromise;
  }

  async initializeElements() {
    if (!this.elements) {
      const stripe = await this.getStripeInstance();
      if (stripe) {
        const cart = await firstValueFrom(this.createOrUpdatePaymentIntent());

        this.elements = stripe.elements({
          clientSecret: cart.clientSecret,
          appearance: { labels: 'floating' },
        });
      } else {
        throw new Error('Stripe has not been loaded');
      }
    }
    return this.elements;
  }

  async createAddressElement() {
    if (!this.addressElement) {
      const elements = await this.initializeElements();
      const user = this.accountService.currentUser();

      if (elements) {
        if (user) {
          const options: StripeAddressElementOptions = {
            mode: 'shipping',
            defaultValues: {
              name: `${user.firstName} ${user.lastName}`,
              address: {
                line1: user.address?.line1 || '',
                line2: user.address?.line2 || '',
                country: user.address?.country || '',
                city: user.address?.city || '',
                state: user.address?.state || '',
                postal_code: user.address?.postalCode || '',
              },
            },
          };
          this.addressElement = elements.create('address', options);
        } else {
          throw new Error('Elements instance has not been loaded');
        }
      }
    }
    return this.addressElement;
  }
  createOrUpdatePaymentIntent() {
    const cart = this.cartService.cart();
    if (!cart) throw new Error('Problem with cart');
    return this.http.post<Cart>(`${this.baseUrl}payments/${cart.id}`, {}).pipe(
      map((cart) => {
        this.cartService.setCart(cart);
        return cart;
      }),
    );
  }

  disposeElements() {
    this.elements = undefined;
    this.addressElement = undefined;
  }
}
