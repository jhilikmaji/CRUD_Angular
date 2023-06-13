import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userModel } from '../Model/user.model';
import { UserService } from '../Service/user.service';
import { EnandDeCryptionService } from '../Service/enand-de-cryption.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  encryptpassword: string | any;
 
  successsMessage: string = "";
  regform !: FormGroup ;
  
  regsubmitted = false ;
  userodelObj: userModel = new userModel();

  constructor( private formbuilder: FormBuilder,
    private user: UserService,
    private router: Router,
    private encrypt: EnandDeCryptionService) { }

  ngOnInit(): void {

    this.regform = this.formbuilder.group({
      user_name: ['',[Validators.required]],
      user_email:['',[Validators.required]],
      user_password:['',[Validators.required]],
      user_con_password:['',Validators.required]
    })
  }

  get regFormControl(){
    return this.regform.controls;
  }

  register(){
    console.log("okay1")
    if(this.regform.valid){
      console.log("okay2")
      this.userodelObj.user_name = this.regform.value.user_name;
      this.userodelObj.user_email = this.regform.value.user_email;
      this.userodelObj.user_password =this.encrypt.encryptionAES(this.regform.value.user_password);
      //this.userodelObj.user_con_password = this.regform.value.user_con_password;
      this.user.postUser(this.userodelObj).subscribe(res => {
        
        this.successsMessage =" Successfully Registered"
        this.router.navigate([""])

      },err => {
        alert("something wents wrong!!");})
    }
   
  }

}
