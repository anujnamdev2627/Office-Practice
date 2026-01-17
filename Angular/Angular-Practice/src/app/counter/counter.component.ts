import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  count = 0;
  //  increase=()=>{
  //   this.count=this.count+1;
  //  }
  //  decrease=()=>{
  //   if(this.count>0)
  //   this.count=this.count-1;
  //  }
  //  reset=()=>{
  //   this.count=0;
  //  }
  handler = (val: string) => {
    if (val === 'plus') {
      this.count += 1;
    } else if (val === 'minus') {
      if (this.count > 0) this.count-=1;
    } else if(val==='reset') {
      this.count = 0;
    }
  };
}
