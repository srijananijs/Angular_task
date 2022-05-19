import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  @Input() parentName:any;
  
  childData:String = 'Sparkout';
  @Output() childStringData : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendData()
  {
    this.childStringData.emit(this.childData);
  }

 
}


