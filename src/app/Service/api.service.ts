import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postEmployee(data : any){
    return this.http.post<any>("http://localhost:8080/api/employee/create-employees", data)
    .pipe(map((res: any) => {
      return res;
    }))
  }

  getEmployee(){
    return this.http.get<any>("http://localhost:8080/api/employee/get-all-employees")
    .pipe(map((res: any) =>{
      return res;
    }))
  }

  updateEmployee(data: any, employee_id: number){
    return this.http.put<any>("http://localhost:8080/api/employee/update-employees/"+employee_id,data)
    .pipe(map((res: any) =>{
      return res;
    }))
  }

  deleteEmployee(employee_id: number){
    return this.http.delete<any>("http://localhost:8080/api/employee/delete-employees/"+employee_id)
    .pipe(map((res: any) =>{
      return res;
    }))
  }
}
