import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoadingWidgetComponent } from '../loading-widget/loading-widget.component';
import { Observable, catchError } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LoadingWidgetComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // add http to conSTRUCTOR
  constructor(private http: HttpClient) { }
  email: string = '';
  password: string = '';
  loading: boolean = false;

  checkEmail(): void {
    console.log('Email:', this.email);
  }

  changeEmail(): void {
    console.log('Email:', this.email);
    console.log('paswwrod:', this.password);
  }

  async login(): Promise<void> {
    this.loading = true;
    console.log('Email:', this.email);
    console.log('password ' + this.password)
    try {
  this.http.post('http://localhost:3000/api/auth/login', {
      "email": this.email,
      "password": this.password
    }).subscribe((data: any) => {
      console.log(data)
      this.loading = false;
    }, (error) => {
      console.error('Error logging in:', error);
      this.loading = false;
     });


    } catch (error) {
      console.error('Error logging in:', error);
      this.loading = false;
    }
  }



}
