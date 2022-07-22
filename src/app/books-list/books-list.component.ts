import { Component, OnInit } from '@angular/core';
import { Ibook } from '../shared/model/data';
import { BookService } from '../shared/services/book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  booksArray : Ibook[] = [];
  constructor(private bookService : BookService) { }

  ngOnInit(): void {
    this.booksArray = this.bookService.getBooks();
  }

}
