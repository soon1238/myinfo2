import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myinfo2';

  gotoMyInfo(){
    window.location.href = 'https://test.api.myinfo.gov.sg/com/v2/authorise?client_id=STG2-MYINFO-SELF-TEST&attributes=name,sex,race,nationality,dob,birthcountry,residentialstatus,regadd,housingtype,hdbtype,ownerprivate,homeno,mobileno,marital,edulevel,gradyear,schoolname,cpfcontributions,assessableincome,assessyear&purpose=test&state=MAHANANDI123&redirect_uri=http://localhost:3001/callback' 
  }
}
