import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Service/user.service';
import { EnandDeCryptionService } from '../Service/enand-de-cryption.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  decryptpassword: string | any;
  successsMessage: string = "";
  loginForm!: FormGroup ;
  submitted =false;
  showlogout !: boolean;

  constructor(private formbuilder: FormBuilder, 
    private userservice: UserService,
    private router: Router,
    private encrypt: EnandDeCryptionService) { }

  ngOnInit(): void {

    this.loginForm = this.formbuilder.group({
      user_email:['',[Validators.required]],
      user_password:['',[Validators.required]]
    })
  }

  get loginFormControl(){
    return this.loginForm.controls;
  }

  login(){
    if(this.loginForm.valid){
     
      this.userservice.getalluser()
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.user_email === this.loginForm.value.user_email && this.encrypt.decryptionAES(a.user_password) === this.loginForm.value.user_password
      });
      if(user){
        this.showlogout = true
        this.successsMessage =" Successfully Login"
        localStorage.setItem("User_email_store",user.user_email);
        localStorage.setItem("User_pass_store",user.user_password);
        this.loginForm.reset()
        this.router.navigate(["EmpDashboard"])
      }else{
        alert("user not found")
      }
    },err=>{
      alert("Something went wrong")
    })

    }
    
}

}
