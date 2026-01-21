import {
  Component,
  computed,
  effect,
  signal,
  WritableSignal,
  ViewChild,
  afterRender,
} from '@angular/core';

import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { CounterComponent } from './counter/counter.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { UserComponent } from './user/user.component';
import { CurrencyConvertPipe } from './pipe/currency-convert.pipe';
import { ProductService } from './services/product.service';
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
    FormComponent,
    HeaderComponent,
    ReactiveFormsModule,
    RouterOutlet,
    LoginComponent,
    UserComponent,
    ProfileComponent,
    CounterComponent,
    ReactiveFormsModule,
    NgIf,
    NgFor,
    FormsModule,
    CommonModule,
    CurrencyConvertPipe,
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

  //^Reactive Form

  // name = new FormControl();
  // password = new FormControl();
  // display() {,RouterLink,RouterModule
  //   console.log(this.name.value, this.password.value);
  // }
  // setVal(){
  //   this.name.setValue('Hello')
  //   this.password.setValue('Pass')
  // }
  //!FormGroup

  // formData = new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   email: new FormControl('', [Validators.required, Validators.maxLength(20)]),
  //   password: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(5),
  //     Validators.maxLength(20),
  //   ]),
  // });
  // onSubmit() {
  //   console.log(this.formData.value);
  // }
  // // setValue(){
  // //   this.formData.setValue({
  // //     name:"Peter",
  // //     password:"321",
  // //     email:"peter@test"
  // //   })
  // // }
  // get name() {
  //   return this.formData.get('name');
  // }
  // get email() {
  //   return this.formData.get('email');
  // }
  // get password() {
  //   return this.formData.get('password');
  // }

  //!  Template Driven Froms

  // userDeatils = {};
  // addDetailes(val: NgForm) {
  //   console.log(val);
  //   this.userDeatils = val;
  // }

  // userName="a"

  // onUserCh(user:string){
  //   this.userName=user;
  // }
  // users = [
  //   { id: 1, name: 'Anuj', isActive: true },
  //   { id: 2, name: 'Rohit', isActive: false },
  //   { id: 3, name: 'Priya', isActive: true },
  //   { id: 4, name: 'Aman', isActive: true },
  //   { id: 5, name: 'Neha', isActive: false },
  //   { id: 6, name: 'Karan', isActive: true },
  //   { id: 7, name: 'Sumit', isActive: true },
  //   { id: 8, name: 'Rahul', isActive: false },
  //   { id: 9, name: 'Vikram', isActive: true },
  // ];
  // arr: undefined | string[];
  // //!Input From the child
  // handleArr(arr: string[]) {
  //   this.arr = arr;
  // }
  // title="Hello Pipes"
  // date =new Date()

  // amount=100;
  // @ViewChild('user') UserComponent:any;
  //   count=0;

  //   constructor(){
  //     afterRender(()=>{
  //       console.log("After Render",this.UserComponent.input);

  //     })
  //   }
  //   updateCount(){
  //     this.count++;
  //   }
   productList:any;
  constructor(private productService: ProductService) {}
  ngOnInit(){
    this.productService.getProductList().subscribe((data:any)=>{
      this.productList=data.products;
      console.log(this.productList);
      console.log(Object.keys(this.productList[0]));
    })
  }
}
