import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../services/book/book.service';
import { Tag } from '../models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  
  @Input()
  bookPageTags?:string[];
  tags?:Tag[];
  
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    if (!this.bookPageTags) {
      this.tags = this.bookService.getAllTags();      
    }
  }
}
