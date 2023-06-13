import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { userModel } from '../Model/user.model';
import { UserService } from '../Service/user.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers:[LoginComponent],
      imports: [ HttpClientTestingModule, ReactiveFormsModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be valid LoginForm if form value is valid', () =>{
    component.loginForm.setValue({
      user_email: "test@gmail.com",
      user_password: "123456"
    });

    expect(component.loginForm.valid).toEqual(true);
  });

  // it('submitting login form ' ,() =>{
  //   expect(component.loginForm.valid).toBeFalse();
  //   component.loginForm.controls['user_email'].setValue('test@gmail.com');
  //   component.loginForm.controls['user_password'].setValue('1234');
  //   expect(component.loginForm.valid).toBeTruthy();
  //   let user:userModel
  //   component

  // })

  
});
