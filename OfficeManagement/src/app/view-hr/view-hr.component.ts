import { Component, OnInit } from '@angular/core';
import { CoomonService } from '../commonService/app.service';

@Component({
  selector: 'app-view-hr',
  templateUrl: './view-hr.component.html',
  styleUrls: ['./view-hr.component.css']
})
export class ViewHrComponent implements OnInit {
result:any;
selectedIndex:number=-1;
resultArray:any=[];
Organization : String;
Website :String;
Address: String;
Phone : String;
obj:any;
id:any;
  constructor(private service:CoomonService) { }

  ngOnInit() {
    this.getHrDetails()
  }
  getHrDetails(){
   
    this.service.hrDetails().subscribe(data=>{
     this.result=data['result']
      console.log(this.result)
    })
  }
  get(index:number){
    this.selectedIndex = index;
    console.log(this.selectedIndex,"index=====")
    var selectedRow = this.result[index];
    this.id=selectedRow._id;
    this.Organization=selectedRow.Organization;
    this.Website=selectedRow.Website;
    this.Address=selectedRow.Address;
    this.Phone=selectedRow.Phone;
    console.log(selectedRow)
  }

  edit(){
    this.obj={
      _id:this.id,
      Organization : this.Organization,
      Website :this.Website,
      Address: this.Address,
      Phone : this.Phone,
    }
    this.service.update(this.obj).subscribe(data=>{
      this.getHrDetails();
      console.log(data,"data")
    })
  }
  delete(index:number){
    this.selectedIndex = index;
    console.log(this.selectedIndex,"index=====")
    var selectedRow = this.result[index];
    this.obj={
      _id:this.id,
   
    }
    this.service.delete(this.obj).subscribe(data=>{
      this.getHrDetails();
      console.log(data,"data")
    })
  }
}
