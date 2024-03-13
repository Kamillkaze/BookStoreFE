import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/Book';
import { Tag } from 'src/app/models/Tag';
import { GET_BOOKS_BY_ID_URL, GET_BOOKS_BY_TAG_URL, GET_BOOKS_URL, GET_TAGS_URL } from 'src/app/utils/url.addresses';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient){}

  getAllBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(GET_BOOKS_URL);
  }

  getAllTags(): Observable<Tag[]> {
    return this.httpClient.get<Tag[]>(GET_TAGS_URL);
  }

  getAllBooksByTag(tag: string): Observable<Book[]> {
    if (tag.includes('All')) {
      return this.getAllBooks();
    } else {
      return this.httpClient.get<Book[]>(GET_BOOKS_BY_TAG_URL + tag);
    }
  }

  getBookById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(GET_BOOKS_BY_ID_URL + id);
  }
}
