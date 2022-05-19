import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  name:any;

  childData:any;
  constructor() { }

  ngOnInit(): void {
  }
  
  receiveData(event:string){
    console.log('msg from child comp');
    this.childData = event;
  }
}
