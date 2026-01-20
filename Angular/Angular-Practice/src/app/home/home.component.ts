import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  //   constructor(private router: Router) {}
  // goTo() {
  //     this.router.navigate(['/profile'], {
  //       queryParams: { name: 'Anuj' }
  //     });
  //   }

  users = [
    {
      id: 2,
      name: 'Jhon',
      age: 28,
    },
     {
      id: 2,
      name: 'Jhon2',
      age: 28,
    },
     {
      id: 3,
      name: 'Jhon3',
      age: 28,
    },
     {
      id: 4,
      name: 'Jhon4',
      age: 28,
    },
  ];
}
