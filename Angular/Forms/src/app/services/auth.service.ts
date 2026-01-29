import { inject, Injectable, signal } from '@angular/core';
import { LocalstorageService } from './localstorage.service';
import { flatMap } from 'rxjs';
interface User {
  userName: string;
  password: string;
  email: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private localStorage = inject(LocalstorageService);
  private Users: User[] = [];
  private isLoggedIn = signal(false);
  get users() {
    return (this.Users = this.localStorage.getUsers());
  }
  get login_state() {
    return this.isLoggedIn.set(this.localStorage.getLoginState());
  }
  login(username: string, password: string): boolean {
    this.Users = this.users;
    const exist = this.Users.find(
      (usr) => usr.userName === username && usr.password === password,
    );
    if (exist) {
      console.log('Exists');
      this.isLoggedIn.set(true);
      this.localStorage.setLoginState(true);
      return true;
    } else {
      this.localStorage.setLoginState(false);
      return false;
    }
  }
  logOut() {
    this.localStorage.setLoginState(false);
  }
  isAuthenticated(): boolean {
    return this.localStorage.getLoginState();
  }
  addUser(user: User): boolean {
    this.Users = this.users;
    const exist = this.Users.find((usr) => usr.email === user.email);
    if (!exist) {
      this.localStorage.saveUser(user);
    }
    this.isLoggedIn.set(true);
    return true;
  }
}
