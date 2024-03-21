import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../services/book/book.service';
import { Tag } from '../models/Tag';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input()
  bookPageTags?:string[];
  tags?: Tag[];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    if (!this.bookPageTags) {
      this.bookService.getAllTags()
      .subscribe((tags: Tag[]) => this.tags = tags);
    }
  }
}
