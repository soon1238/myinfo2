import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplayMyinfoComponent} from './display-myinfo/display-myinfo.component';
import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [
  {
    path: '',
    component:StartPageComponent
  },
  
  {
  path: 'callback',
  pathMatch: 'full',
  component:DisplayMyinfoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
