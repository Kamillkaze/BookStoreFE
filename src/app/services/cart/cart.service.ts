import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { Cart } from 'src/app/models/Cart';
import { CartItem } from 'src/app/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = new Cart();

  addToCart(book: Book): void {
    let cartItem = this.cart.items.find(item => item.book.urlId === book.urlId);
    if (cartItem) {
      this.changeQuantity(book.urlId, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(book));
  }

  removeFromCart(bookId: string): void {
    this.cart.items = this.cart.items.filter(item => item.book.urlId != bookId);
  }

  changeQuantity(bookId: string, quantity: number) {
    let cartItem = this.cart.items.find(item => item.book.urlId === bookId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }
 
  getCart(): Cart {
    return this.cart;
  }
}
