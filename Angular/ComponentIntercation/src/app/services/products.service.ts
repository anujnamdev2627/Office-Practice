import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, tap, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  http = inject(HttpClient);
  constructor() {}
  // private list: string[] = ['Hello', 'World', 'Tomato', 'Mango'];

  // getData(): string[] {
  //   return this.list;
  // }
  // putData(val: string): void {
  //   this.list.push(val);
  // }
  // deleteData(val: string): string[] {
  //   this.list = this.list.filter((ele) => ele !== val);
  //   return this.list;
  // }
  // getJson() {
  //   return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
  //     tap((userList) => {
  //       console.log(userList);
  //     }),
  //     map((userList: any) =>
  //       userList.map((user: any) => {
  //         return { id: user.id, name: user.name };
  //       }),
  //     ),
  //   );
  // }
  role$ = new BehaviorSubject<string>('');
  roelsub$ = new Subject<string>();
}
