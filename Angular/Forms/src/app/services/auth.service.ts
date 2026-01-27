import { Injectable } from '@angular/core';
interface User {
  userName: string;
  password: string;
  email: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  private isLoggedIn = false;
  private Users: User[] = [{userName:'Anuj',password:'1234',email:'anuj@namdev'}];

  login(username: string, password: string): boolean {
    const exist = this.Users.find(
      (usr) => usr.userName === username && usr.password === password,
    );
    if (exist) {
      this.isLoggedIn = true;
      return true;
    }
    this.isLoggedIn = false;
    return false;
  }
  logOut() {
    this.isLoggedIn = false;
  }
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
  addUser(user: User):boolean {
    const exist = this.Users.find((usr) => usr.email === user.email);
    if (!exist) {
      this.Users.push(user);
    }
    this.isLoggedIn = true;
    return true;
  }
}
