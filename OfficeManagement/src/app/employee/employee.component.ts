import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoomonService } from '../commonService/app.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  result:any;
  selectedIndex:number=-1;
  resultArray:any=[];
  Name:String;
  Email :String;
  Mobile: Number;
  Role  :String;
  Username: String;
  Organization:string;
  id:any;
    obj: any;
    constructor(private route:Router,private service:CoomonService) { }


  ngOnInit() {
    this.getHrList()
  }
  get(index:number){
    this.selectedIndex = index;
      console.log(this.selectedIndex,"index=====")
      var selectedRow = this.result[index];
      console.log(selectedRow)
      this.id=selectedRow.id
      this.Name=selectedRow.Name;
      this.Email=selectedRow.Email
      this.Mobile=selectedRow.Mobile
      this.Role=selectedRow.Role
      this.Organization=selectedRow.Organization
      this.Username=selectedRow.Username
  
  }
  getHrList(){
    this.service.EmpDetails().subscribe(data=>{
      this.result=data['result']
      console.log(data,"data")
    })
  }
  update(){
    this.obj={
      _id:this.id,
      Name :this.Name,
      Email :this.Email,
      Mobile :this.Mobile,
      Role :this.Role,
      Username :this.Username,
      Organization :this.Organization,
    }
    this.service.updateEmp(this.obj).subscribe(data=>{
      this.getHrList()
      console.log(data)
    })
      }
      delete(index:number){
        this.selectedIndex = index;
        console.log(this.selectedIndex,"index=====")
        var selectedRow = this.result[index];
        this.obj={
          _id:this.id,
       
        }
        this.service.deleteEmp(this.obj).subscribe(data=>{
          this.getHrList();
          console.log(data)
        })
      }
}
