import { Component } from '@angular/core';
import { Cart } from '../models/Cart';
import { CartService } from '../services/cart/cart.service';
import { CartItem } from '../models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart!: Cart;

  constructor(private cartService: CartService) {
    this.setCart();
  }

  setCart(): void {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem: CartItem): void {
    this.cartService.removeFromCart(cartItem.book.urlId);
    this.setCart();
  }

  increaseQuantity(cartItem: CartItem) {
    this.cartService.changeQuantity(cartItem.book.urlId, cartItem.quantity + 1);
    this.setCart();
  }

  decreaseQuantity(cartItem: CartItem) {
    this.cartService.changeQuantity(cartItem.book.urlId, cartItem.quantity - 1);
    this.setCart();
  }
}
