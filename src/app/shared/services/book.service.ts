import { Injectable } from '@angular/core';
import { Ibook } from '../model/data';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  booksArray: Ibook[] = [
    {
      isbn: 9781786462084,
      title: 'Laravel 5.x Cookbook',
      authors: 'Alfred Nutile',
      published: 'September 2016',
      description: 'A recipe-based book to help you efficiently create amazing PHP-based applications with Laravel 5.x',
      coverImage: 'https://static.packt-cdn.com/products/9781786462084/cover/smaller'
    },
    {
      isbn: 9781784396527,
      title: 'Sitecore Cookbook for Developers',
      authors: 'Yogesh Patel',
      published: 'April 2016',
      description: 'Over 70 incredibly effective and practical recipes to get you up and running with Sitecore development',
      coverImage: 'https://static.packt-cdn.com/products/9781784396527/cover/smaller'
    },
    {
      isbn: 9781783286935,
      title: 'Sass and Compass Designers Cookbook',
      authors: 'Bass Jobsen',
      published: 'April 2016',
      description: 'Over 120 practical and easy-to-understand recipes that explain how to use Sass and Compass to write efficient, maintainable, and reusable CSS code for your web development projects',
      coverImage: 'https://static.packt-cdn.com/products/9781783286935/cover/smaller'
    }
  ]
  constructor() { }

  getBooks(){
    return this.booksArray;
  }

  getBook(isbn : number){
    return this.booksArray.find(book => book.isbn === isbn);
  }

  deletedArray(isbn :number){
    this.booksArray = this.booksArray.filter(book => book.isbn !== isbn)
  }
}
