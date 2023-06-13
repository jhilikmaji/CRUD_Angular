import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers:[RegistrationComponent],
      imports: [ HttpClientTestingModule, ReactiveFormsModule],
      declarations: [ RegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be valid RegistrationForm if form value is valid', () =>{
    component.regform.setValue({
      user_name: "test",
      user_email: "test@gmail.com",
      user_password: "123456",
      user_con_password:"123456"
    });
});
})
