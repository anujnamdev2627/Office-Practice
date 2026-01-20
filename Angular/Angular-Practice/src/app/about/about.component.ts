import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private router:ActivatedRoute){}
  ngOnInit(){
    (this.router.data.subscribe(params=>
      console.log(params)
    ))
  }
} 
