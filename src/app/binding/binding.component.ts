import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  text:string = 'Sri Janani';
  className= 'test';
  name = 'Welcome Sri';
  colspan:any ='2';

  constructor() { }

  ngOnInit(): void {
  }
  
  clickMe(){
    alert("Button is clicked");
  }
}
