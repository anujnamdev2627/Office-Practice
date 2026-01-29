import { Injectable } from '@angular/core';
import { User } from '../interfaces';
@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() {}
  private readonly USERS_KEY = 'users';
  private loginStatus_key = 'loginState';
  getUsers(): User[] {
    return JSON.parse(localStorage.getItem(this.USERS_KEY) || '[]');
  }
  saveUser(user: User): boolean {
    try {
      const users = this.getUsers();
      users.push(user);
      localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
      return true;
    } catch {
      return false;
    }
  }
  getLoginState() {
    return JSON.parse(localStorage.getItem(this.loginStatus_key) || '');
  }
  setLoginState(status: boolean) {
    localStorage.setItem(this.loginStatus_key, JSON.stringify(status));
  }
  clearUsers(): void {
    localStorage.removeItem(this.USERS_KEY);
  }
}
