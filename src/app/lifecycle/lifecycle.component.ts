import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  @Input()
  value : string | undefined;

  childname : string | undefined;

  

  constructor() {
    console.log("Constructor!!!");
   }

   ngOnInit(): void {
    console.log("ngOnIt");
   }

   ngOnChanges(): void {
     console.log("ngOnChanges");
   }

   ngDoCheck(): void {
    console.log("ngDoCheck");
   }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void{
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(): void{
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(): void{
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy(): void{
    console.log("ngOnDestroy");
  }
}


