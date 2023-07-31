import { Book } from "./Book";

export class CartItem {
    book:Book;
    quantity:number = 1;

    constructor(book: Book) {
        this.book = book;
    }

    get totalPrice(): number {
        return this.book.price * this.quantity;
    }
}