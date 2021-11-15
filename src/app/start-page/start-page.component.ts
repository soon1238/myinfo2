import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  gotoMyInfo(){
    window.location.href = 'https://test.api.myinfo.gov.sg/com/v3/authorise?client_id=STG2-MYINFO-SELF-TEST&attributes=name,sex,race,nationality,dob,birthcountry,residentialstatus,regadd,housingtype,hdbtype,ownerprivate,homeno,mobileno,marital,edulevel,gradyear,schoolname,cpfcontributions,assessableincome,assessyear&purpose=test&state=123&redirect_uri=http://localhost:3001/callback' 
  }
}
