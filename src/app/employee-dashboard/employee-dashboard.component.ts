import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { ApiService } from '../Service/api.service';
import { EmployeeModel } from '../Model/employee-dash board.model';
@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  formValue !: FormGroup;
  employeeModelObject: EmployeeModel = new EmployeeModel();
  employeeData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  showButton !: boolean ;
  submitted = false ;
  // newEmployeeModel: any;
  constructor(private formbuilder: FormBuilder,
    private api: ApiService) { }

  ngOnInit(): void {
    this.showButton = true;
    this.formValue = this.formbuilder.group({
      first_name:  ['' , Validators.compose([Validators.required]) ],
      last_name: ['' ,Validators.compose([Validators.required]) ],
      email: ['' , Validators.compose([Validators.required ,Validators.email])],
      phone_number:['' , Validators.compose([Validators.required , Validators.pattern("[0-9 ]{10}")])],
      salary: ['' , Validators.compose([Validators.required])]
    })
    this.getAllEmployees();
  }

  get registerFormControl() {
    return this.formValue.controls;
  }
 getAllEmployees(){
  this.api.getEmployee()
  .subscribe(res => {
    this.employeeData = res;
    console.log(res);
  })
 }

 postEmployeeDetails()
 {
  this.submitted = true ;
  this.showUpdate = false;
  if (this.formValue.valid){
    this.employeeModelObject.first_name = this.formValue.value.first_name;
  this.employeeModelObject.last_name = this.formValue.value.last_name;
  this.employeeModelObject.email = this.formValue.value.email;
  this.employeeModelObject.phone_number = this.formValue.value.phone_number;
  this.employeeModelObject.salary = this.formValue.value.salary;
  this.api.postEmployee(this.employeeModelObject)
  .subscribe(res => {
  
    console.log(res.first_name);
    // alert("Employee Added successfully")
    let ref = document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getAllEmployees();
  }, err => {
    alert("something wents wrong!!");
  })

  }
  
 }

 deleteEmployee(row : any){
  this.api.deleteEmployee(row.employee_id)
  .subscribe(res => {
    // alert("Employee Deleted");
    this.getAllEmployees();
  })
 }

 onEdit(row : any){
  this.showButton = false;
  this.showUpdate = true;
  this.employeeModelObject.employee_id = row.employee_id;
  this.formValue.controls['first_name'].setValue(row.first_name);
  this.formValue.controls['last_name'].setValue(row.last_name);
  this.formValue.controls['email'].setValue(row.email);
  this.formValue.controls['phone_number'].setValue(row.phone_number);
  this.formValue.controls['salary'].setValue(row.salary);
}

 updateEmployeeDetails(){
  this.employeeModelObject.first_name = this.formValue.value.first_name;
  this.employeeModelObject.last_name = this.formValue.value.last_name;
  this.employeeModelObject.email = this.formValue.value.email;
  this.employeeModelObject.phone_number = this.formValue.value.phone_number;
  this.employeeModelObject.salary = this.formValue.value.salary;
  this.api.updateEmployee(this.employeeModelObject,this.employeeModelObject.employee_id)
  .subscribe(res => {
    // alert("Update Successfully");
    let ref = document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getAllEmployees();
  })
 }
}
