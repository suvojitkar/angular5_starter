import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'raj_page1',
  templateUrl: 'Login.html',
  styleUrls: ['Login.scss']
})
export class LoginComponent {
  title = "Welcome to suvojit's application"
  error_login_val = false
  error_login_text = "Wrong username or password!"
  username:string = "admin"
  password:string = "admin"

  constructor(public router : Router){

  }
  
  on_login(){
      if (this.username == "admin" && this.password == "admin"){
          console.log("Login True");
          this.router.navigateByUrl('/page1');
      }
      else {
          console.log("Login False");
          this.error_login_val = true
      }
  }

}
