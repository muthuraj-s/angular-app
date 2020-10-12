import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
booking:any[]=[
  {id:1,name:"aaa"},
  {id:2,name:"bbb"},
  {id:3,name:"ccc"},
  {id:4,name:"ddd"}]
  constructor() { }

  ngOnInit(): void {
  }

}
