import { Component, OnInit } from '@angular/core';
import {CoomonService} from "../commonService/app.service"
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  obj:any;
 email:any;
 password:any;
 selectedValue:any;
  constructor(private service:CoomonService,private router:Router) { }

  ngOnInit() {
 
  }

  select(event:any){
    this.selectedValue=event.target.value
    console.log( this.selectedValue,"target====")
  }
  login(){
    this.obj={
      email:this.email,
      password:this.password,
      type:this.selectedValue
    }
    console.log(this.obj,"svnbsv")
    this.service.Login(this.obj).subscribe(data=>{
      console.log(data[0]['data'].details.Type,"data")
      if(data[0]['data'].type =="hr"){
       sessionStorage.setItem('token',data[0]['data'].token)
       this.router.navigate(['/hr'])
      }
      else if(data[0]['data'].details.Type =="admin"){
        sessionStorage.setItem('token',data[0]['data'].token)
        this.router.navigate(['/adminDashboard'])
      }
    })
  }
 
}
