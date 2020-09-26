import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent implements OnInit {

  constructor( private _route: Router) { }

  ngOnInit(): void {
  }
  login(data){
    document.getElementById("progress").style.display="block";
    console.log(data)
  }

}
