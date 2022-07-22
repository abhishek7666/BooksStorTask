import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ibook } from 'src/app/shared/model/data';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book!:Ibook | undefined;
  isbn !: number;
  constructor(private bookService : BookService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
              .subscribe((params:Params) =>{
                  this.isbn = +params['isbn'];
                  this.book = this.bookService.getBook(this.isbn);
              })
  }

  onDeleteHandler(){
    this.bookService.deletedArray(this.isbn);
  }
}
