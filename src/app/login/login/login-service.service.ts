import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export class User {
  constructor(
    public nombre: string,
    public password: string) { }
}

var users = [
  new User('admin','1234'),
  new User('alberto','1234')
];

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private _router: Router) { }


  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }

  login(user){
    var authenticatedUser = users.find(u => u.nombre === user.nombre);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("user", authenticatedUser.nombre);
      this._router.navigate(['admin']);
      return true;
    }
    return false;

  }

  checkCredentials(){
    if (localStorage.getItem("user") === null){
      this._router.navigate(['login']);
    }
  }
}
