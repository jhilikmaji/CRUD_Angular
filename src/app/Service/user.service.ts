import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  postUser(data : any){
    return this.http.post<any>("http://localhost:8080/api/user/create-user",data)
    .pipe(map((res: any) => {
      return res;
    }))
  }

  getalluser(){
    return this.http.get<any>("http://localhost:8080/api/user/get-all-user")
    .pipe(map((res: any) => {
      return res;
    }))

  }
 

  // getUser(data : any , user_id: number){
  //   return this.http.put<any>("http://localhost:8080/api/user/get-all-user"+user_id,data)
  //   .pipe(map((res: any) =>{
  //     return res;
  //   }))
  // }
}
