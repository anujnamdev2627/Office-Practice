import { CommonModule, NgStyle } from '@angular/common';
import { Component, Input, Output ,EventEmitter,OnDestroy, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interface';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgStyle ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})


export class UserComponent {
  // @Input() user: User = { id: 0, name: 'Hello', isActive: false };
  // constructor(private router: ActivatedRoute) {}
  // name: string | null = '';
  // id: number | null = null;
  // ngOnInit() {
  //   this.router.params.subscribe((user) => {
  //     console.log(user);
  //     this.id = user['id'];
  //     this.name = user['name'];
  //   });
  // }

  // @Input()user:string='';
  // @Input()city:string='';
  // @Input()user:string='';
  // @Input()isActive:boolean=false;
//  @Output() getArr = new EventEmitter();
//   arr=['Hello','World','No','Yes']
//   handleData(){
//     this.getArr.emit(this.arr)

//   }
   
@Input()counter:number=0;
// constructor(){
//     console.log("First");
    
//    }

//    ngOnInit(){
//     console.log("BgOnInit")
//    }
//    ngOnDestroy(){
//       console.log("Destroyed")
//     }
    input='';
    onchange(val:string){
      this.input=val;
      console.log(this.input);
    }
    ngOnChanges(){
      console.log("Counter changed");
      
    }
    ngDoCheck(){
      if(this.input==='Hello'){
        console.log("hello coustome change");
        
      }
    }
}

