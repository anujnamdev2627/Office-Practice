import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

   url="http://localhost:3000/posts"
  getPosts(){
    return this.http.get(this.url)
  }
   
  saveUsers(data:any){
     return this.http.post(this.url,data)
  }
  
}
