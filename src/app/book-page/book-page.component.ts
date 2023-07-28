import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';
import { BookService } from '../services/book/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
  book!: Book;

  constructor(private service: BookService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.book = this.service.getBookById(params['id']);
      }
    })
  }
}
