import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatCardModule, MatButtonModule],
  template: `<div class="container"><router-outlet></router-outlet></div>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'login2';
}
