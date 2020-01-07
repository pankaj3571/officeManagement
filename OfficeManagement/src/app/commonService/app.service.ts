import { Injectable } from "@angular/core";
import { appSetting } from '../app.setting';
import {HttpClient} from '@angular/common/http'
@Injectable()

export class CoomonService{

    constructor(private service:HttpClient){}

    Login(obj:any){
        
        return this.service.post(appSetting.login,obj)
    }
    Signup(obj:any){
        return this.service.post(appSetting.signup,obj)
    }
    update(obj:any){
        return this.service.post(appSetting.hrupdate,obj)
    }
    updateEmp(obj:any){
        return this.service.post(appSetting.updateEmp,obj)
    }
    updateHr(obj:any){
        return this.service.post(appSetting.updateHr,obj)
    }
    delete(obj:any){
        return this.service.post(appSetting.hrdelete,obj)
    }
    deleteEmp(obj:any){
        return this.service.post(appSetting.deleteEmp,obj)
    }
    deleteHr(obj:any){
        return this.service.post(appSetting.deleteHr,obj)
    }
    empDetails(obj:any){
        return this.service.post(appSetting.empDetails,obj)
    }
    AddHr(obj:any){
        return this.service.post(appSetting.AddHr,obj)
    }
    hrDetails(){
        return this.service.get(appSetting.hrDetails)
    }
    EmpDetails(){
        return this.service.get(appSetting.empList)
    }
    hrList(){
        return this.service.get(appSetting.hrList)
    }
}