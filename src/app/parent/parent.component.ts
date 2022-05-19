import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  
  name:any;//to pass value from parent component
  childname:any;//to receive value from child component

  constructor() { }

  ngOnInit(): void {
  }
  
  receiveData(event:string){
    console.log('Data is passed from child to parent component');
    this.childname = event;
  }
 
}
