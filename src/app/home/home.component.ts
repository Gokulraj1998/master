import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  obj={'hello':'hi'}
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
  }
  login(){
    console.log('he')
    this.http.post('login',this.obj).subscribe(res=>{
      console.log(res)
    })
  }
}
