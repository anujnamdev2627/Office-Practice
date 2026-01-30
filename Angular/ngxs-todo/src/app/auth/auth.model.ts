export interface Auth {
  loggedIn: boolean;
}
export interface AuthModel {
  logged: Auth;
}
export interface User{
    id?:number
    userName:string;
    password:string;
}