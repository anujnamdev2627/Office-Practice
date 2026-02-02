import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 private cache = new Map<string, Observable<any>>();

  constructor(private http: HttpClient) {}

  getData(id: string): string {
    // if (!this.cache.has(id)) {
    //   const request$ = this.http
    //     .get(`https://api.example.com/data/${id}`)
    //     .pipe(shareReplay(1)); // cache response

    //   this.cache.set(id, request$);
    // }
    // return this.cache.get(id)!;
    return "Hello"
  }
}
