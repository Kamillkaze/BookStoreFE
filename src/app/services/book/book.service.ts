import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { Tag } from 'src/app/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  getAllBooks(): Book[] {
    return [
      {
        id:1,
        title:"Murder in the family",
        author:"Cara Hunter",
        stars: 0,
        price: 20,
        favorite: false,
        imageUrl: "/assets/images/books/Murder in the family Cara Hunter.PNG",
        tags: ["Criminal"]
      },
      {
        id:2,
        title:"The Cove",
        author:"Gregg Dunnet",
        stars: 4,
        price: 10,
        favorite: true,
        imageUrl: "/assets/images/books/The Cove Gregg Dunnet.PNG",
        tags: ["Criminal"]
      },
      {
        id:3,
        title:"Yellowface",
        author:"Rebecca F. Kuang",
        stars: 2,
        price: 8,
        favorite: false,
        imageUrl: "/assets/images/books/Yellowface Rebecca F. Kuang.PNG",
        tags: ["Other"]
      }
    ]
  }

  getAllTags(): Tag[] {
    return [
      {
        name: 'All',
        count: 3
      },
      {
        name: 'Criminal',
        count: 2
      },
      {
        name: 'Other',
        count:  1
      }
    ]
  }

  getAllBooksByTag(tag: string): Book[] {
    if (tag.includes('All')) {
      return this.getAllBooks();
    } else {
      return this.getAllBooks().filter(book => book.tags.includes(tag));
    }
  }

  getBookById(id: number): Book {
    return this.getAllBooks().find(book => book.id == id)!;
  }
}
