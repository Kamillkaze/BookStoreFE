export class Book {
    id!:number;
    title!:string;
    author!:string;
    stars:number = 0;
    price!:number;
    favorite:boolean = false;
    imageUrl!:string;
    tags!:string[];
}