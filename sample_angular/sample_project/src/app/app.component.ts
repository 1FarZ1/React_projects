import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
// import { RouterOutlet } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, HttpClientModule,
      RouterModule, NavbarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',

})
export class AppComponent {

}
