import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book/book.service';
import { Book } from '../models/Book';
import { ActivatedRoute } from '@angular/router';
import { Tag } from '../models/Tag';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allBooks!: Book[];
  booksToDisplay!: Book[];

  constructor(private bookService: BookService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscribeToAllBooks();
    this.subscribeToPathParams();
  }

  private subscribeToAllBooks(): void {
    this.bookService.getAllBooks()
      .subscribe((books: Book[]) => {
        this.allBooks = books;
        this.booksToDisplay = this.allBooks;
      });
  }

  private subscribeToPathParams(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.booksToDisplay = this.allBooks.filter(book =>
          book.title.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      } else if (params['tag']) {
        this.booksToDisplay = this.allBooks.filter(book =>
          book.title.toLowerCase().includes(params['tag'].toLowerCase()));
      } else {
        this.booksToDisplay = this.allBooks;
      }
    });
  }
}
