import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import {Login} from '../login/login.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  model = new Login("", "");

  onSubmit(){
    if (this.model.username == "Shawnelle" && this.model.password == "password123") {
      console.log("Username: ", this.model.username);
      console.log("logged in")
      this.model.username="";
      this.model.password="";
     // this.router.navigate('/');

  } else {
      alert("Username or password is incorrect!");
      console.log("Username: ", this.model.username);
  }
  }
}
