import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { InterractionService } from '../services/interraction.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  // @Input()title:title
  // @Input()loggedIn:boolean=false;
  // // @Input('userName')user:string="";
  // private _loggedIn = true;
  // messg:string="";

  // get loggedin(){
  //   return this._loggedIn;
  // }
  // @Input() set loggedin(val: boolean) {
  //   this._loggedIn=val;
  //   if(val===true){
  //      this.messg="Okay"

  //   }else{
  //     this.messg="Not logged in"
  //   }
  // }
  // @Output()greetEvent=new EventEmitter();
  //   callParent(){
  //     this.greetEvent.emit("Angular");
  //   }

  // constructor(private _interaction: InterractionService) {}
  _interaction = inject(InterractionService);

  prod = inject(ProductsService);

  constructor(){
    this.prod.role$.subscribe((res)=>{
      console.log(res);
      
    })
     this.prod.roelsub$.subscribe((res)=>{
      console.log(res);
      
    })
  }
  ngOnInit() {
    this._interaction.teacherMessage$.subscribe((msg) => {
      if (msg === 'Good Morning') {
        alert('Good Morning');
      } else if (msg === 'Well Done') {
        alert('thank you');
      }
    });
  }
}
