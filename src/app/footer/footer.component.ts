import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  @Input()
  parentName:any;
  
  childName:string='msg from child component';
  @Output() childNameData : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  sendData(){
    this.childNameData.emit(this.childName);
  }

}
