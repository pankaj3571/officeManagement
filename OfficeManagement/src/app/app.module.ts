import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HrComponent } from './hr/hr.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-routing.module'
import {RouterModule} from '@angular/router';
import {CoomonService} from './commonService/app.service'
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { ViewHrComponent } from './view-hr/view-hr.component';
import { EmployeeComponent } from './employee/employee.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HrDetailsComponent } from './hr-details/hr-details.component'
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HrComponent,
    HomeComponent,
    ViewHrComponent,
    EmployeeComponent,
    NavbarComponent,
    HrDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CoomonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
