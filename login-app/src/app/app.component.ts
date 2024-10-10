import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `<div class="container">
   <nav class="navbar">
            <h1>Forum</h1>
            <input type="text" placeholder="Search...">
            <a routerLink="/login" class="btn btn-secondary"> Login</a>
        </nav>
        <router-outlet></router-outlet>
        </div>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'login';
}
