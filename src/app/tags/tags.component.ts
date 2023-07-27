import { Component } from '@angular/core';
import { BookService } from '../services/book/book.service';
import { Tag } from '../models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags: Tag[] = this.service.getAllTags();
  
  constructor(private service: BookService) {}
}
