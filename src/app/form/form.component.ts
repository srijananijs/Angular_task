import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(data: any)
  {
    this.http.post('http://localhost:3000/posts',data);
    .subscribe((result: any)=>{
     console.warn("result",result)
    })
    console.warn(data);
  }

}



