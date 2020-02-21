import { Component, OnInit } from '@angular/core';
import {LoginServiceService, User} from "./login-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [LoginServiceService],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user = new User('','');
  public errorMsg = '';
  constructor(private _service:LoginServiceService) { }

  ngOnInit(): void {
  }

  login() {
    if(!this._service.login(this.user)){
      this.errorMsg = 'Failed to login';
    }
  }

}
