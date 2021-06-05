import { Component, OnInit } from '@angular/core';
import { Post } from '../post';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  posts?: Post[];


  constructor() { }

  ngOnInit(): void {

   
  }
  

}
