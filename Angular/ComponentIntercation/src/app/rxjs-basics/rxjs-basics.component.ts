import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  debounce,
  filter,
  interval,
  Observable,
  of,
  Subject,
  take,
} from 'rxjs';
import { ProductsService } from '../services/products.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-rxjs-basics',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './rxjs-basics.component.html',
  styleUrl: './rxjs-basics.component.css',
})
export class RxjsBasicsComponent {
  // cityList:string[]=["Pune","Mumbai","Nagpur"];

  // city$=of(this.cityList)
  // searchControl = new FormControl();

  // http = inject(HttpClient);
  // timer = interval(1000);
  studentName$ = new Subject();
 
  taketill$=new Subject<void>();
  constructor(private Product: ProductsService) {
    // const myobs$ = new Observable((value) => {
    //   value.next('this is demo Text');
    // });

    // this.city$.subscribe((c:string[])=>{
    //   console.log(c);

    // })

    // myobs$.subscribe((msg)=>{
    //   // debugger;
    //   console.log(msg);

    // })
    //!Extracting Only Specific Part
    // this.Product.getJson().subscribe((res)=>{
    //    console.log(res);

    // })
    // this.timer.pipe(filter((res) => res % 2 == 0)).subscribe((num) => {
    //   console.log(num);
    // });
    //!fILTER ON SESARCH
    // this.searchControl.valueChanges
    //   .pipe(filter((text) => text.length % 3 == 0))
    //   .subscribe((res: string) => {
    //     console.log(res);
    //   });

    //!tAKE OPERATOR
    // this.timer.pipe(take(6)).subscribe((num) => {
    //   console.log(num);
    // });
 
    setTimeout(() => {
      this.studentName$.next('Angualr 20');
      this.taketill$.next()
    },4000);
  }
  ngOnInit() {
    this.studentName$.subscribe((s) => {
      console.log(s);
    });
  }
}
