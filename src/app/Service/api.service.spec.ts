import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { EmployeeModel } from '../Model/employee-dash board.model';

import { ApiService } from './api.service';

describe('ApiService', () => {
let service: ApiService;
let httpTestingController : HttpTestingController;
let EmployeeModel = [{
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
  beforeEach(() => {
    
    TestBed.configureTestingModule({
        imports:[HttpClientTestingModule],
        providers:[ApiService]
       
    });
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getEmployee()' , () =>{
    it('should return post when getEmployee() is called',(done: DoneFn) => {
        service.getEmployee().subscribe((data) => {
            expect(data).toEqual(EmployeeModel);
            done();
        });
        const request = httpTestingController.expectOne('http://localhost:8080/api/employee/get-all-employees');
       request.flush(EmployeeModel);
       expect(request.request.method).toBe('GET');
    })
  })

  describe('postEmployee()', () => {
    it('should post new emp when postEmployee() is called',() => {
        const newEmp: EmployeeModel = {
            employee_id :  3,
            first_name : 'test4',
            last_name :  'test4 title',
            email :' test4@gmail.com',
            phone_number : '8972010473',
            salary : '11300',
          };

          service.postEmployee(newEmp).subscribe((data) =>{
            expect(data).toEqual(newEmp);
            
          });
          const request = httpTestingController.expectOne("http://localhost:8080/api/employee/create-employees");
          expect(request.request.method).toEqual('POST');
          expect(request.request.body).toEqual(newEmp);
    });
  })


});
