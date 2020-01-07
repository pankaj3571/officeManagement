import { Component, OnInit } from '@angular/core';
import { CoomonService } from '../commonService/app.service';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {
  Name :String;
  Email :String;
  Mobile :Number;
  Role :String;
  Username :String;
  Organization :String;
  Password :String ;
  obj:any
  constructor(private service:CoomonService) { }

  ngOnInit() {
  }

  employeeDetails(){
    this.obj={
      Name :this.Name,
      Email :this.Email,
      Mobile :this.Mobile,
      Role :this.Role,
      Username :this.Username,
      Organization :this.Organization,
      Password :this.Password,
    }

    this.service.empDetails(this.obj).subscribe(data=>{
      console.log(data)
    })
  }
}
