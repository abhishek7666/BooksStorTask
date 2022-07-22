import { Component, Input, OnInit } from '@angular/core';
import { Ibook } from 'src/app/shared/model/data';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  
  @Input() book! : Ibook;

  constructor() { }

  ngOnInit(): void {
  }

}
