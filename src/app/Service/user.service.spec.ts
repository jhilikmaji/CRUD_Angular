import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { userModel } from '../Model/user.model';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let hTc : HttpTestingController;
  let userModel =[{
    user_id :  0,
    user_name : 'test1',
    user_email :'test1@gmail.com',
    user_password :  '1234',
    user_con_password : '1234',
  },
{
    user_id :  1,
    user_name : 'test2',
    user_email :'test2@gmail.com',
    user_password :  '1234',
    user_con_password : '1234',
},
{
  user_id :  2,
  user_name : 'test3',
  user_email :'test3@gmail.com',
  user_password :  '12345',
  user_con_password : '12345',

}
]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[UserService]
    });
    service = TestBed.inject(UserService);
    hTc = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getalluser()' , () => {
    it('should return all user when call getalluser()',(done: DoneFn) =>{
      service.getalluser().subscribe((data) =>{
        expect(data).toEqual(userModel);
        done();
      });
      const request = hTc.expectOne('http://localhost:8080/api/user/get-all-user');
      request.flush(userModel);
      expect(request.request.method).toBe('GET');

    })
    
  })

  describe('postUser()' ,() =>{
    it('should post new user when postUser() called' , () =>{
      const postNewUser ={
        user_id :  0,
        user_name : 'test1',
        user_email :'test1@gmail.com',
        user_password :  '1234',
        user_con_password : '1234',
      };
      
      service.postUser(postNewUser).subscribe((data) =>{
        expect(data).toEqual(postNewUser); 
      });
        const request = hTc.expectOne("http://localhost:8080/api/user/create-user");
        expect(request.request.method).toEqual('POST');
        expect(request.request.body).toEqual(postNewUser);


  })

})
});
