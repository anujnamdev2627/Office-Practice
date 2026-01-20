import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  constructor(private router: ActivatedRoute) {}
  name: string | null = '';
  id: number | null = null;
  ngOnInit() {
    this.router.params.subscribe((user) => {
      console.log(user);
      this.id = user['id'];
      this.name = user['name'];
    });
  }
}
