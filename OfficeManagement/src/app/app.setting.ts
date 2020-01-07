import { environment } from "src/environments/environment";

export const appSetting=
    {
        login:environment.apiUrl+'/login',
        signup:environment.apiUrl+'/signup',
        hrDetails:environment.apiUrl+'/details',
        hrupdate:environment.apiUrl+'/update',
        hrdelete:environment.apiUrl+'/delete',
        empDetails:environment.apiUrl+'/employeeDetails',
        AddHr:environment.apiUrl+'/AddHr',
        empList:environment.apiUrl+'/EmpDetails',
        hrList:environment.apiUrl+'/HrList',
        updateEmp:environment.apiUrl+'/updateEmp',
        updateHr:environment.apiUrl+'/updateHr',
        deleteEmp:environment.apiUrl+'/deleteEmp',
        deleteHr:environment.apiUrl+'/deleteHr',

        
    }
