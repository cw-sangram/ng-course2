import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

 @Component({
   selector: 'app-Http',
   templateUrl: './Http.component.html'
 })
 export class HttpComponent implements OnInit {
  private doctors =  [];
  private _http: Http;
  constructor(http: Http){ 
    this._http = http;
    
  }

  ngOnInit(){
    
   }
   showAll(){
    this.doctors = [];
    this._http.get('http://jsonplaceholder.typicode.com/users/').
    flatMap((data)=> data.json()).
    subscribe( (value) => this.doctors.push(value));
    console.log(this.doctors);
   }
   filter(){
    this.doctors = [];
    this._http.get('http://jsonplaceholder.typicode.com/users/')
    .flatMap((data) => data.json()) // equivalent to  (data) => {return data.json()}
    .filter((person : any) => person.id > 5)
    //.map((person : any) => ["Dr. " + person.name]) this will create array of names ["Dr. xyz", "Dr. Jane, .."]
    .subscribe((data) => {
      this.doctors.push(data);
    });
    console.log(this.doctors);
   }
 }