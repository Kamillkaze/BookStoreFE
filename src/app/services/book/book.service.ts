import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  getAllBooks() {
    return [
      {
        id:1,
        title:"Murder in the family",
        author:"Cara Hunter",
        stars: 0,
        price: 20,
        favorite: false,
        imageUrl: "/assets/images/books/Murder in the family Cara Hunter.PNG"
      },
      {
        id:2,
        title:"The Cove",
        author:"Gregg Dunnet",
        stars: 4,
        price: 10,
        favorite: true,
        imageUrl: "/assets/images/books/The Cove Gregg Dunnet.PNG"
      },
      {
        id:3,
        title:"Yellowface",
        author:"Rebecca F. Kuang",
        stars: 2,
        price: 8,
        favorite: false,
        imageUrl: "/assets/images/books/Yellowface Rebecca F. Kuang.PNG"
      }
    ]
  }
}
