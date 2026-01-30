import {
  Component,
  ElementRef,
  NgModule,
  viewChild,
  ViewChild,
  inject
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InterractionService } from './services/interraction.service';
import { DragableComponent } from './dragable/dragable.component';
import { RxjsBasicsComponent } from './rxjs-basics/rxjs-basics.component';
import { ProductsService } from './services/products.service';
import {
  interval,
  Observable,
  retry,
  map,
  of,
  from,
  timer,
  filter,
} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ChildComponent,
    RxjsBasicsComponent,
    CommonModule,
    FormsModule,
    DragableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // title="Hello"
  // name="Hello"
  // userName=""
  //  @ViewChild('nameRef') nameElementRef!: ElementRef<HTMLInputElement>;

  //   ngAfterViewInit(){
  //     this.nameElementRef.nativeElement.focus()
  //   }
  // getChange(val: string) {
  //   this.userName = val;
  //   alert('hello ' + val);
  // }
  // userLoggedIn:boolean=false;
  // userName:string="anuj"

  // @ViewChild('child') child!:ChildComponent;

  // ngAfterViewInit(){
  //   this.child.messg="Hello World"
  // }
  // greet(str:string){
  //   alert(str)
  // }
  //  constructor(private _interact:InterractionService){}
  //   greetStudent(){
  //     this._interact.sendMessage("Good Morning")
  //   }
  //   AppreciateStudents(){
  //    this._interact.sendMessage("Well Done")
  //   }
  // list: string[] = [];
  // constructor(private productService: ProductsService) {}

  // ngOnInit() {
  //   this.list = this.productService.getData();
  // }

  // addTask(element: HTMLInputElement) {
  //   this.productService.putData(element.value);
  //   element.value = '';
  // }
  // delete(val: string) {
  //   console.log(val);

  //   this.list = this.productService.deleteData(val);
  // }

  // myTimer$ = interval(1000);

  // timer$=timer(5000)
  // constructor() {
  //   this.myTimer$.subscribe((res) => {
  //     console.log("Timer is ",res);
  //   });

  //   this.timer$.subscribe((res)=>{
  //     console.log("Timer Started Running");

  //   })
  // }

//   nolists$ = from([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
//   rollNolIst$ = of([1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 0]);
//   constructor() {
//     // this.nolists$.subscribe((res:number)=>{
//     //   console.log(res);
//     // })
//     //   this.nolists$
//     //     .pipe(filter((num) => num % 2 == 0))
//     //     .subscribe((res) => console.log(res));
//     //
//     // this.rollNolIst$
//     //   .pipe(map((val) => val.filter((m) => m % 2 == 0)))
//     //   .subscribe((v) => {
//     //     console.log(v);
//     //   });

    
//   }
//  product=inject(ProductsService)

//   onRoleChange(event:any){
//    this.product.role$.next(event.target.value)
//    this.product.roelsub$.next(event.target.value)
//   }
input=''

ngOnInit(){
 console.log("Oninit");
 
}
ngOnChange(){
  console.log("OnChange");
  
}
ngDoCheck(){
  console.log("DoCheck");
  
}
}
