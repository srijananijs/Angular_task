import { CounterComponent } from './counter/counter.component';
import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {

  //@ViewChild("highlight")marker!: ElementRef;
  @ViewChildren("highlight")marker!: QueryList<any>;

  @ViewChild("child")childcounter!:CounterComponent;

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(){
    console.log('Hello from viewchild');
    console.log(this.marker.length);
    //this.marker.nativeElement.style.color='violet';
    this.marker.first.nativeElement.style.color='violet';
    this.marker.last.nativeElement.style.color='green';
  }

  inc(){
    this.childcounter.increment();
  }

  dec(){
    this.childcounter.decrement();
  }
}
