import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Observable, throwError } from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})


export class PageOneComponent implements OnInit {
  users$!: any;

  displayedColumns: string[] = ['id', 'name','username'];
  //dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(this.users$);

  applyFilter(event: Event) {
    console.log("appel");
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filteredData); //value is what I want.

  }
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      (data: any) => this.users$ = data
    );
    
    
  }
  

}