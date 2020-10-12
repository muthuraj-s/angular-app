import { Injectable } from '@angular/core';
import { BOOKS } from './books-data';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  getBooks() {
    return Promise.resolve(BOOKS);
  }
}