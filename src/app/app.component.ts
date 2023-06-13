import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_curd';
  constructor(private router : Router ) { }

  ngOnInit(): void {
  }
  
  logout()
    { 
      localStorage.clear();
      //alert("successfully logged out")
      this.router.navigateByUrl("")
    }
}
