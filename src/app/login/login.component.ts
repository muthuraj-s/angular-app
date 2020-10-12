import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  firstName:string
  registerForm: FormGroup;
  submitted:boolean;

  errorMessage:string;
  successMessage:string;

  constructor(private formBuilder: FormBuilder,private router: Router,private bookService: BookService) { }
  
  ngOnInit() {
   
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required,Validators.minLength(4)]],
      lastName: ['', Validators.required],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        zip: [],
        city: []
      })
    });
  }
  onFormSubmit(){

  this.bookService.getBooks();  

  // if (name=="aaaa")
  // this.router.navigate(['/welcome'])
}
}