import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';
import { BookService } from '../services/book/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
  book!: Book;

  constructor(private bookService: BookService, 
              private route: ActivatedRoute, 
              private cartService: CartService,
              private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.book = this.bookService.getBookById(params['id']);
      }
    })
  }

  addToCart(): void {
    this.cartService.addToCart(this.book);
    this.router.navigateByUrl('/cart-page');
  }
}
