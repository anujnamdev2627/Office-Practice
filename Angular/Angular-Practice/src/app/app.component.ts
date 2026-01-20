import {
  Component,
  computed,
  effect,
  signal,
  WritableSignal,
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { CounterComponent } from './counter/counter.component';
import { NgFor, NgIf } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
interface user {
  name: string;
  title: string;
}
interface taskFormate {
  id: number;
  title: string;
  completed: boolean;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    HeaderComponent,
    RouterOutlet,
    FormsModule,
    LoginComponent,
    ProfileComponent,
    CounterComponent,
    NgIf,
    NgFor,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // title = 'Anuj Namdev';
  // name = 'Hello';
  // data: user = {
  //   name: this.name,
  //   title: this.title,
  // };
  // hellobutton = () => {
  //   alert(this.data.name);
  // };
  // sum = (a: number, b: number) => {
  //   console.log(a + b);
  // };
  // name: string = '';
  // displayName:string=''
  // getName = (event: Event) => {
  //   console.log(event);
  //   const name = (event.target as HTMLInputElement).value;
  //   this.name = name;
  //   console.log(this.name);
  // };
  // setName = (event: Event) => {
  //   this.name="Aaag"
  // };
  // setValue = (event: Event) => {item
  //   this.displayName=this.name;
  // };
  // display: boolean = false;
  // color:string="Yellow"
  // onClick = ( ) => {
  //   this.display = !this.display;
  // };
  // color: string = 'red';
  // //  handler=(val:string)=>{
  // //   this.color=val;item
  // //  }
  // onChange = (event: Event) => {
  //   console.log((event?.target as HTMLInputElement).value);
  //   this.color = (event?.target as HTMLInputElement).value;
  // };
  // articles:string[]=['Hello','World','Angular','Raect' ]
  // count = signal(10);
  // x = 30;
  // constructor() {
  //   effect(() => {
  //     // console.log(this.x);
  //     console.log(this.count());
  //   });
  // }
  // updateX = (val: string) => {
  //   // this.x=10;
  //   if (val === 'inc') {
  //     this.count.set(this.count() + 1);
  //   } else {
  //     this.count.set(this.count() - 1);
  //   }
  // };
  // data: WritableSignal<number | string> = signal<number | string>(0);
  // count:= computed(() => 10);
  // updateSignal = () => {
  //   this.data.set('Hello');
  // };
  // x = signal(10);
  // y = signal(20);
  // z = computed(() => this.x() + this.y());
  // showValue = () => {
  //   console.log(this.z(  ));
  //   this.x.set(100);
  //   console.log(this.z());
  // };
  // username = signal('Anuj');
  // count = signal(0);
  // display = false;
  // constructor() {
  //   effect(() => {
  //     if (this.count() % 2 === 0) {
  //       this.display = true;ut'
  //       setTimeout(()=>{
  //           this.display=false;
  //       },1000*2)
  //     } else {
  //       this.display = false;
  //     }
  //   });
  // }
  // update() {
  //   this.username.set('Bhai');
  // }
  // toggleVal = () => {
  //   this.count.set(this.count() + 1);
  // };
  // temp:string[]=[];
  // arr: string[] = ['Hello', 'World', 'Angular', 'React','Js','Ts','Redux','Signal'];
  // data:string=""
  // task: string = '';
  // taskList: taskFormate[] = [{ id: 1, title: 'General', completed: false }];
  // setid = (): number => {
  //   return this.taskList.length;
  // };
  // addTask = () => {
  //   this.taskList.push({
  //     id: this.setid() + 1,
  //     title: this.task,
  //     completed: false,
  //   });
  //   this.task=""
  // };
  // deleteTask = (idx: number) => {
  //   this.taskList = this.taskList.filter((task) => task.id !== idx);
  // };
  // markDone = (idx: number) => {
  //   this.taskList[idx-1].completed=true;
  // };
  // show=true;
  // arr: string[] = ['Hello', 'World', 'Angular', 'React','Js','Ts','Redux','Signal'];
}
