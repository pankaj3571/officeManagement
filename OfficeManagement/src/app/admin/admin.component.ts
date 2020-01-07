import { Component, OnInit } from '@angular/core';
import { CoomonService } from '../commonService/app.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  obj:any;
  organization : String;
  Website :String;
  Address: String;
  Phone : String;
   Name:String;
 Email :String;
 Mobile: Number;
 Role  :String;
 Username: String;
 Password:string

  constructor(private service:CoomonService) { }

  ngOnInit() {
  }

  Signup(){
    this.obj={
  Organization : this.organization,
  Website :this.Website,
  Address: this.Address,
  Phone : this.Phone,
  createdAt:new Date(),
  updatedAt:new Date()
    }
    console.log(this.obj,"svnbsv")
    this.service.Signup(this.obj).subscribe(data=>{
      console.log(data,"data")
    })
  }
  addHrDetails(){
    this.obj={
      Name :this.Name,
      Email :this.Email,
      Mobile :this.Mobile,
      Role :this.Role,
      Username :this.Username,
      Organization :this.organization,
      Password :this.Password,
    }
    this.service.AddHr(this.obj).subscribe(data=>{
      console.log(data)
    })
  }
}
