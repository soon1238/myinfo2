import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-display-myinfo',
  templateUrl: './display-myinfo.component.html',
  styleUrls: ['./display-myinfo.component.scss']
})
export class DisplayMyinfoComponent implements OnInit {

  data:any;
  constructor(private http: HttpClient) {

   }

   // this is a temp hack until we have a BE api to call.
   // as this is calling another url, we need to enable cors or have a cors plugin i.e Moesif CORS
   // we are hardcoding an id value as current hack does not support passing of id into the call back
  ngOnInit() {
      this.http.get<any>('https://sandbox.api.myinfo.gov.sg/com/v3/person-sample/S9812381D').subscribe(data => {
        this.data=JSON.stringify(data);
        console.log("what is the data:", this.data);
      })
    }
  
}