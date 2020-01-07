
  
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AdminComponent } from './admin/admin.component'
import { HrComponent } from './hr/hr.component'
import { ViewHrComponent } from './view-hr/view-hr.component';
import { EmployeeComponent } from './employee/employee.component';
import { HrDetailsComponent } from './hr-details/hr-details.component';

const routes: Routes=[
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{path:'home',component:HomeComponent},
{path:'adminDashboard',component:AdminComponent},
{path:'home',component:HrComponent},
{path:'viewhr',component:ViewHrComponent},
{path:'employee',component:EmployeeComponent},
{path:'hr',component:HrComponent},
{path:'hrList',component:HrDetailsComponent},



]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // exports: [RouterModule]
})
export class AppRoutingModule { }

