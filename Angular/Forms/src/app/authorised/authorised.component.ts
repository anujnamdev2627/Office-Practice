import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-authorised',
  standalone: true,
  imports: [NavbarComponent,RouterOutlet,RouterLink],
  templateUrl: './authorised.component.html',
  styleUrl: './authorised.component.css'
})
export class AuthorisedComponent {
  
}
