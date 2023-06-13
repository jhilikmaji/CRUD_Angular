// import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { of } from "rxjs";
import { EmployeeModel } from "../Model/employee-dash board.model"
import { ApiService } from "../Service/api.service";
//import { EmployeeDashboardComponent } from "./employee-dashboard.component";

import { EmployeeDashboardComponent } from './employee-dashboard.component';

describe('EmployeeDashboardComponent', () => {
  let component: EmployeeDashboardComponent;
  let fixture: ComponentFixture<EmployeeDashboardComponent>;
  let mockApiService: any;
  let mockformbuilder:any;
  let dummyemployeeModelObject: EmployeeModel[] = [{
    employee_id :  0,
    first_name : 'test1',
    last_name :  'test1 title',
    email :' test@gmail.com',
    phone_number : '8972010479',
    salary : '12000',
  },
  {
    employee_id :  1,
    first_name : 'test2',
    last_name :  'test2 title',
    email :' test2@gmail.com',
    phone_number : '8972010472',
    salary : '18000',
  },
  {
    employee_id :  2,
    first_name : 'test3',
    last_name :  'test3 title',
    email :' test3@gmail.com',
    phone_number : '8972010473',
    salary : '12300',
  }
  
  ];
 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
      imports: [ HttpClientTestingModule, ReactiveFormsModule],
      providers:[EmployeeDashboardComponent]
    })
    .compileComponents();

    
    fixture = TestBed.createComponent(EmployeeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
     component = TestBed.inject(EmployeeDashboardComponent);
  
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // describe('getAllEmployees()',() =>{
  //   it('should return all employee',() => {
  //    const loginFormGroup =component.formValue.value;
  //     mockApiService = jasmine.createSpyObj(['getAllEmployees']);
     
  //     mockApiService.getAllEmployees.and.returnValue(of(dummyemployeeModelObject))
  //     component.ngOnInit();
  //     expect(loginFormGroup).toEqual(dummyemployeeModelObject)
  //     expect(3).toEqual(dummyemployeeModelObject.length)

      
  //   })
  // })
 
       
      
    })

  

// describe('EmployeeDashboard Component',() => {
//   let empModel: EmployeeModel[];
//   let component : EmployeeDashboardComponent;
//   let mockPostService: any;
//   //  formbuilder = new FormBuilder ;

//   beforeEach(() => {
//     empModel =[{
//         employee_id :  0,
//         first_name : 'test1',
//         last_name :  'test1 title',
//         email :' test@gmail.com',
//         phone_number : '8972010479',
//         salary : '12000',
//       },
//       {
//         employee_id :  1,
//         first_name : 'test2',
//         last_name :  'test2 title',
//         email :' test2@gmail.com',
//         phone_number : '8972010472',
//         salary : '18000',
//       },
//       {
//         employee_id :  2,
//         first_name : 'test3',
//         last_name :  'test3 title',
//         email :' test3@gmail.com',
//         phone_number : '8972010473',
//         salary : '12300',
//       }
      
//       ];
//       mockPostService = jasmine.createSpyObj(['postEmployee','getEmployee','updateEmployee','deleteEmployee'])
//       // component = new EmployeeDashboardComponent(mockPostService);
//   });

//   describe('delete', () => {
//     it('should delete the selected post from the posts', () => {
      
//     })
//   })

// });