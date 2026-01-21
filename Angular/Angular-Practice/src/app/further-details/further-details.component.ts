import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-further-details',
  standalone: true,
  imports: [],
  templateUrl: './further-details.component.html',
  styleUrl: './further-details.component.css'
})
export class FurtherDetailsComponent {
  constructor( private route:ActivatedRoute){};

  ngOnInit(){
  let data=(this.route.snapshot.paramMap.get('data'))
  console.log(data);
  
  }

}
