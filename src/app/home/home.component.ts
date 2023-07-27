import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book/book.service';
import { Book } from '../models/Book';
import { ActivatedRoute } from '@angular/router';
import { Tag } from '../models/Tag';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.books = this.bookService.getAllBooks().filter(book =>  
          book.title.toLowerCase().includes(params['searchTerm'].toLowerCase()))
      } else if (params['tag']) {
        this.books = this.bookService.getAllBooksByTag(params['tag']);
      } else {
        this.books = this.bookService.getAllBooks();
      }
    })
  }
}
