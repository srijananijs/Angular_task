import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css']
})
export class LifecycleChildComponent implements OnInit {
  @Input() value : string | undefined;

  @Output() onNameChange: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  
  onInputChange(event:string): void{
    this.onNameChange.emit(event);
  }
}
