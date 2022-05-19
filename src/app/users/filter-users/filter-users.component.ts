import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.css']
})
export class FilterUsersComponent implements OnInit {
  @Input()
  data!: String
  @Input()
  value!: String
  
  @Output() 
  greetEvent = new EventEmitter();
  name = "Sri Janani";
  constructor() { }

  ngOnInit(): void {
  }
  callParentGreet(){
    this.greetEvent.emit(this.name);
  }

}
