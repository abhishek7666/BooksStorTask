import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookComponent } from './books-list/component/book/book.component';
import { BookDetailsComponent } from './books-list/component/book-details/book-details.component';
import { RouterModule, Routes } from '@angular/router';



const appRoutes : Routes = [
  // {path : '', component : BookListComponent},
  {path : '', redirectTo : 'books', pathMatch: 'full'},
  {path : 'books', component : BooksListComponent, children : [
    {path : ':isbn', component : BookDetailsComponent},
  ]},
]
@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
