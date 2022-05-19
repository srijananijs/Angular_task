import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  text = 'Tutorial';
  constructor() { }

  ngOnInit(): void {
  }
  greet(name:String){
    alert("Welcome " + name);
  }
}
