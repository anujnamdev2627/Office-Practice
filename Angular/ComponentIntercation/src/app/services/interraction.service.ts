import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterractionService {
 private _tecaherMessage=new Subject<string>();
 teacherMessage$=this._tecaherMessage.asObservable();
  constructor() { }

  sendMessage(message:string){
    this._tecaherMessage.next(message)
  }
}
