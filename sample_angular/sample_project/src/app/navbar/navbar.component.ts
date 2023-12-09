import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
<nav class="navbar">
  <div class="logo">
    <h4>Logo</h4>
  </div>

  <ul class="nav-links">
    <li><a href="/reports">Report</a></li>
    <li><a href="/cart">Cart</a></li>
    <li><a href="/orders">Orders</a></li>
    <li><a href="/login">Login</a></li>
  </ul>
</nav>
  `,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
}
