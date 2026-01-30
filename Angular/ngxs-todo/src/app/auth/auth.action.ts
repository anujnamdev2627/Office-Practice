import { User } from './auth.model';

export class LoginUser {
  static readonly type = '[Auth] Login ';
  constructor(public user: User) {}
}
export class LogOutUser {
  static readonly type = '[Auth] LogOut';
  constructor(public user: User) {}
}
