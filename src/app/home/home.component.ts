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

  booksToDisplay!: Book[];

  constructor(private bookService: BookService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscribeToPathParams();
  }

  private subscribeToPathParams(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.subscribeToBooksByPhrase(params['searchTerm']);
      } else if (params['tag']) {
        this.subscribeToBooksByTag(params['tag']);
      } else {
        this.subscribeToAllBooks();
      }
    });
  }

  private subscribeToAllBooks(): void {
    this.bookService.getAllBooks()
      .subscribe((books: Book[]) => {
        this.booksToDisplay = books;
      });
  }

  private subscribeToBooksByPhrase(phrase: string): void {
    this.bookService.getAllBooksByPhrase(phrase.toLowerCase())
      .subscribe((books: Book[]) => {
        this.booksToDisplay = books;
      });
  }

  private subscribeToBooksByTag(tag: string): void {
    this.bookService.getAllBooksByTag(tag.toLowerCase())
      .subscribe((books: Book[]) => {
        this.booksToDisplay = books;
      });
  }
}
